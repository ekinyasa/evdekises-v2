/**
 * EVDEKİ SES — REFINEMENT CANDIDATE A
 * True Seamless Infinite Carousel Engine + Single-Open Accordions
 */

(function() {
  'use strict';

  // ══════════════════════════════════════════════════════════════════════
  // SEAMLESS INFINITE CAROUSEL ENGINE
  // ══════════════════════════════════════════════════════════════════════
  const viewport = document.getElementById('carouselViewport');
  const track = document.getElementById('carouselTrack');
  const btnPrev = document.getElementById('btnNavPrev');
  const btnNext = document.getElementById('btnNavNext');
  const progressBar = document.getElementById('progressBar');
  const counter = document.getElementById('testiCounter');

  if (!viewport || !track) return;

  const originalCards = Array.from(track.children);
  const totalOriginal = originalCards.length; // 6 cards

  // Clone 2 cards at start, 2 cards at end
  const cloneStart1 = originalCards[totalOriginal - 2].cloneNode(true);
  const cloneStart2 = originalCards[totalOriginal - 1].cloneNode(true);
  cloneStart1.setAttribute('aria-hidden', 'true');
  cloneStart2.setAttribute('aria-hidden', 'true');
  cloneStart1.classList.add('is-clone');
  cloneStart2.classList.add('is-clone');

  const cloneEnd1 = originalCards[0].cloneNode(true);
  const cloneEnd2 = originalCards[1].cloneNode(true);
  cloneEnd1.setAttribute('aria-hidden', 'true');
  cloneEnd2.setAttribute('aria-hidden', 'true');
  cloneEnd1.classList.add('is-clone');
  cloneEnd2.classList.add('is-clone');

  track.insertBefore(cloneStart2, track.firstChild);
  track.insertBefore(cloneStart1, track.firstChild);
  track.appendChild(cloneEnd1);
  track.appendChild(cloneEnd2);

  const allCards = Array.from(track.children); // 10 cards total
  const offsetIndex = 2; // Real Card 0 is at index 2
  let currentPos = offsetIndex; // Starts at Card 0
  let isTransitioning = false;
  let autoplayTimer = null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function getCardOffset(pos) {
    if (!allCards[pos]) return 0;
    const card = allCards[pos];
    const vpWidth = viewport.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    return cardLeft - (vpWidth - cardWidth) / 2;
  }

  function getRealIndex(pos) {
    let r = (pos - offsetIndex) % totalOriginal;
    if (r < 0) r += totalOriginal;
    return r;
  }

  function updateVisuals(pos) {
    const realIdx = getRealIndex(pos);

    // Update active/inactive classes
    allCards.forEach((card, idx) => {
      const cardRealIdx = card.getAttribute('data-idx');
      const isCurrentlyActive = (idx === pos) || (cardRealIdx === String(realIdx) && !card.classList.contains('is-clone'));
      card.classList.toggle('is-active', idx === pos);
      card.classList.toggle('is-inactive', idx !== pos);
    });

    // Update Progress Bar
    if (progressBar) {
      const percent = ((realIdx + 1) / totalOriginal) * 100;
      progressBar.style.width = `${percent}%`;
    }

    // Update Counter (01 / 06)
    if (counter) {
      const cur = String(realIdx + 1).padStart(2, '0');
      const tot = String(totalOriginal).padStart(2, '0');
      counter.textContent = `${cur} / ${tot}`;
    }
  }

  function moveTo(pos, animated = true) {
    isTransitioning = animated;
    const offset = getCardOffset(pos);

    if (animated) {
      track.style.transition = 'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)';
    } else {
      track.style.transition = 'none';
    }

    track.style.transform = `translateX(-${offset}px)`;
    currentPos = pos;
    updateVisuals(pos);
  }

  // Handle seamless teleportation on transitionend
  track.addEventListener('transitionend', () => {
    isTransitioning = false;

    // If reached end clone (C0_clone at index 8), snap back to real C0 (index 2)
    if (currentPos >= totalOriginal + offsetIndex) {
      const snapPos = currentPos - totalOriginal;
      moveTo(snapPos, false);
    }
    // If reached start clone (C5_clone at index 1), snap forward to real C5 (index 7)
    else if (currentPos < offsetIndex) {
      const snapPos = currentPos + totalOriginal;
      moveTo(snapPos, false);
    }
  });

  function goNext() {
    if (isTransitioning) return;
    moveTo(currentPos + 1, true);
  }

  function goPrev() {
    if (isTransitioning) return;
    moveTo(currentPos - 1, true);
  }

  if (btnNext) btnNext.addEventListener('click', () => { goNext(); resetAutoplay(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { goPrev(); resetAutoplay(); });

  // Clicking neighbor card focuses it
  allCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (idx !== currentPos && !isTransitioning) {
        moveTo(idx, true);
        resetAutoplay();
      }
    });
  });

  // Touch Swipe for mobile/tablet
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    stopAutoplay();
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartX;
    const deltaY = currentY - touchStartY;
    
    // Ignore if vertical scrolling
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;
    touchDeltaX = deltaX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    const threshold = 40;
    if (touchDeltaX < -threshold) {
      goNext();
    } else if (touchDeltaX > threshold) {
      goPrev();
    }
    startAutoplay();
  }, { passive: true });

  // Autoplay Logic
  function startAutoplay() {
    if (prefersReducedMotion || autoplayTimer) return;
    autoplayTimer = setInterval(goNext, 6500);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  const testiSection = document.getElementById('deneyimler');
  if (testiSection) {
    testiSection.addEventListener('mouseenter', stopAutoplay);
    testiSection.addEventListener('mouseleave', startAutoplay);
    testiSection.addEventListener('focusin', stopAutoplay);
    testiSection.addEventListener('focusout', startAutoplay);
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (document.activeElement && document.activeElement.closest('#deneyimler')) {
      if (e.key === 'ArrowRight') { goNext(); resetAutoplay(); }
      if (e.key === 'ArrowLeft') { goPrev(); resetAutoplay(); }
    }
  });

  // Resize handler
  window.addEventListener('resize', () => {
    moveTo(currentPos, false);
  });

  // Initial position
  window.addEventListener('DOMContentLoaded', () => {
    moveTo(offsetIndex, false);
    startAutoplay();
  });
  setTimeout(() => moveTo(offsetIndex, false), 150);


  // ══════════════════════════════════════════════════════════════════════
  // PRATİK BİLGİLER: SINGLE-OPEN ACCORDION DISCLOSURE
  // ══════════════════════════════════════════════════════════════════════
  const accordionItems = document.querySelectorAll('.refine-accordion-item');
  accordionItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        accordionItems.forEach(other => {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

})();
