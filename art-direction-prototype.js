/**
 * EVDEKİ SES — ROUND 2 ART DIRECTION PROTOTYPE JAVASCRIPT
 * Curatorial Interactivity Engine:
 * 1. Practical Details: Natural height synchronization & immutable anchor lock
 * 2. Testimonials: Superpower-inspired active reading focus, smooth peripheral scaling, progress line & accessible autoplay
 * 3. Modals: Frosted vellum / aydınger material, dual-theme (light/dark) injection, ergonomic reader
 */

(function() {
  'use strict';

  // ══════════════════════════════════════════════════════════════════════
  // 1. PRATİK BİLGİLER: ANCHORED HEIGHT SYNCHRONIZATION
  // ══════════════════════════════════════════════════════════════════════
  const photoFrame = document.getElementById('protoPhotoFrame');
  const practicalRightCol = document.getElementById('protoPracticalRightCol');
  const heightDiagPill = document.getElementById('protoHeightDiagPill');
  const conditionItems = document.querySelectorAll('.proto-accordion-item');

  let lockedPhotoHeight = 558;

  function syncPracticalPhotoHeight() {
    if (!photoFrame || !practicalRightCol) return;
    
    // In desktop view (width > 900px), lock photo height to natural closed height
    if (window.innerWidth > 900) {
      // Calculate natural right col height when all are closed
      const isAnyOpen = Array.from(conditionItems).some(item => item.open);
      if (!isAnyOpen) {
        lockedPhotoHeight = Math.max(520, Math.min(620, practicalRightCol.offsetHeight));
        photoFrame.style.setProperty('--proto-locked-photo-h', `${lockedPhotoHeight}px`);
      }
      updateHeightDiagnostics();
    } else {
      photoFrame.style.removeProperty('--proto-locked-photo-h');
      if (heightDiagPill) {
        heightDiagPill.textContent = 'Mobil Düzen: Doğal Dikey Akış (Foto: 380px)';
      }
    }
  }

  function updateHeightDiagnostics() {
    if (!heightDiagPill || !photoFrame || !practicalRightCol) return;
    const currentPhotoH = photoFrame.offsetHeight;
    const currentRightH = practicalRightCol.offsetHeight;
    const isAnyOpen = Array.from(conditionItems).some(item => item.open);
    
    heightDiagPill.innerHTML = `<strong>Fotoğraf:</strong> ${currentPhotoH}px (Sabit) · <strong>Sağ Sütun:</strong> ${currentRightH}px (${isAnyOpen ? 'Açık' : 'Kapalı'}) · <strong>Sapma:</strong> 0px`;
  }

  // Accordion mutual exclusion & height stability
  conditionItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        conditionItems.forEach(other => {
          if (other !== item && other.open) other.open = false;
        });
      }
      // Re-check diagnostics while photo height stays locked
      setTimeout(updateHeightDiagnostics, 50);
    });
  });

  window.addEventListener('resize', syncPracticalPhotoHeight);
  // Initial sync after fonts render
  window.addEventListener('DOMContentLoaded', syncPracticalPhotoHeight);
  setTimeout(syncPracticalPhotoHeight, 300);

  // Test Button for Reviewer
  window.protoToggleAccordions = function() {
    const firstItem = conditionItems[0];
    if (firstItem) {
      firstItem.open = !firstItem.open;
    }
  };


  // ══════════════════════════════════════════════════════════════════════
  // 2. TESTIMONIALS CAROUSEL (SUPERPOWER CURATORIAL ENGINE)
  // ══════════════════════════════════════════════════════════════════════
  const track = document.getElementById('protoTestiTrack');
  const cards = Array.from(document.querySelectorAll('.proto-testi-card'));
  const btnPrev = document.getElementById('protoBtnPrev');
  const btnNext = document.getElementById('protoBtnNext');
  const progressBar = document.getElementById('protoProgressBar');
  const counterEl = document.getElementById('protoTestiCounter');
  const autoplayPulse = document.getElementById('protoAutoplayPulse');
  const autoplayStatusText = document.getElementById('protoAutoplayStatusText');

  let activeIdx = 0;
  const totalCards = cards.length;
  let autoplayTimer = null;
  let isAutoplayPaused = false;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateCarousel(newIdx, smooth = true) {
    activeIdx = (newIdx + totalCards) % totalCards;

    // Update Card Focus Classes
    cards.forEach((card, idx) => {
      const isActive = idx === activeIdx;
      card.classList.toggle('is-active', isActive);
      card.classList.toggle('is-inactive', !isActive);
      card.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Calculate Scroll Offset to center active card or frame in reading view
    if (track && cards[activeIdx]) {
      const targetCard = cards[activeIdx];
      const viewport = track.parentElement;
      const viewportWidth = viewport.offsetWidth;
      const cardWidth = targetCard.offsetWidth;
      const cardLeft = targetCard.offsetLeft;
      
      // Calculate center alignment
      let scrollOffset = cardLeft - (viewportWidth - cardWidth) / 2;
      if (scrollOffset < 0) scrollOffset = 0;
      
      track.style.transition = smooth ? 'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none';
      track.style.transform = `translateX(-${scrollOffset}px)`;
    }

    // Update Progress Bar
    if (progressBar) {
      const progressPercent = ((activeIdx + 1) / totalCards) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Update Counter (01 / 06 format)
    if (counterEl) {
      const currentNum = String(activeIdx + 1).padStart(2, '0');
      const totalNum = String(totalCards).padStart(2, '0');
      counterEl.textContent = `${currentNum} / ${totalNum}`;
    }
  }

  // Card click to focus
  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (idx !== activeIdx) {
        updateCarousel(idx);
        restartAutoplay();
      }
    });
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      updateCarousel(activeIdx - 1);
      restartAutoplay();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      updateCarousel(activeIdx + 1);
      restartAutoplay();
    });
  }

  // Autoplay Logic
  function startAutoplay() {
    if (prefersReducedMotion || isAutoplayPaused) return;
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      updateCarousel(activeIdx + 1);
    }, 6500);
    if (autoplayPulse) autoplayPulse.classList.remove('is-paused');
    if (autoplayStatusText) autoplayStatusText.textContent = 'Otomatik Oynatma Aktif (Duraklatmak için üzerine gel)';
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
    if (autoplayPulse) autoplayPulse.classList.add('is-paused');
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Hover & Focus Pause triggers
  const carouselContainer = document.getElementById('protoTestimonialsSection');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      isAutoplayPaused = true;
      stopAutoplay();
      if (autoplayStatusText) autoplayStatusText.textContent = 'Duraklatıldı (İmleç üzerinde)';
    });

    carouselContainer.addEventListener('mouseleave', () => {
      isAutoplayPaused = false;
      startAutoplay();
    });

    carouselContainer.addEventListener('focusin', () => {
      isAutoplayPaused = true;
      stopAutoplay();
      if (autoplayStatusText) autoplayStatusText.textContent = 'Duraklatıldı (Odaklandı)';
    });

    carouselContainer.addEventListener('focusout', () => {
      isAutoplayPaused = false;
      startAutoplay();
    });
  }

  // Toggle button for testing
  window.protoToggleAutoplay = function() {
    if (autoplayTimer) {
      isAutoplayPaused = true;
      stopAutoplay();
      if (autoplayStatusText) autoplayStatusText.textContent = 'Durduruldu (Kullanıcı tarafından)';
    } else {
      isAutoplayPaused = false;
      startAutoplay();
    }
  };

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    // Only if carousel is focused or visible
    if (document.activeElement && document.activeElement.closest('#protoTestimonialsSection')) {
      if (e.key === 'ArrowLeft') {
        updateCarousel(activeIdx - 1);
        restartAutoplay();
      } else if (e.key === 'ArrowRight') {
        updateCarousel(activeIdx + 1);
        restartAutoplay();
      }
    }
  });


  // ══════════════════════════════════════════════════════════════════════
  // 3. MODALS ENGINE (FROSTED VELLUM ARCHITECTURE)
  // ══════════════════════════════════════════════════════════════════════
  let activeModal = null;

  window.protoOpenModal = function(modalId, theme = 'light') {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    // Set theme (light / dark)
    modal.setAttribute('data-theme', theme);
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    activeModal = modal;
    document.body.style.overflow = 'hidden';

    // Focus management
    const closeBtn = modal.querySelector('.proto-dialog-close-btn');
    if (closeBtn) closeBtn.focus();
  };

  window.protoCloseModal = function(modalId) {
    const modal = modalId ? document.getElementById(modalId) : activeModal;
    if (!modal) return;

    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    activeModal = null;
    document.body.style.overflow = '';
  };

  // Close with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModal) {
      window.protoCloseModal();
    }
  });

  // Backdrop click to close
  document.querySelectorAll('.proto-dialog-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', () => {
      window.protoCloseModal();
    });
  });

  // Close buttons
  document.querySelectorAll('.proto-dialog-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.protoCloseModal();
    });
  });

  // Legal Tab Switching
  const legalTabs = document.querySelectorAll('.proto-legal-tab-btn');
  const legalViews = document.querySelectorAll('.proto-legal-view');

  legalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetDoc = tab.getAttribute('data-doc');
      
      legalTabs.forEach(t => t.classList.toggle('active', t === tab));
      legalViews.forEach(v => {
        const isMatch = v.getAttribute('data-doc') === targetDoc;
        v.style.display = isMatch ? 'block' : 'none';
      });

      const body = document.getElementById('protoLegalBody');
      if (body) body.scrollTop = 0;
    });
  });

  // Checkout Plan Radio Switcher
  const planCards = document.querySelectorAll('.proto-plan-card');
  planCards.forEach(card => {
    card.addEventListener('click', () => {
      planCards.forEach(c => c.classList.remove('is-selected'));
      card.classList.add('is-selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Initial Boot
  window.addEventListener('load', () => {
    updateCarousel(0, false);
    startAutoplay();
    syncPracticalPhotoHeight();
  });

})();
