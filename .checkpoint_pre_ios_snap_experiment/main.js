// ═══════════════════════════════════════════════════════════════
// EVDEKİ SES — MAIN JAVASCRIPT
// Natural browser scroll, header dynamics, journey tracker, modal FAQ system
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Prevent Safari from restoring stale scroll positions on reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Strict iOS Safari detection for Dynamic Island and Floating URL bar adaptations
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIOS) {
    document.documentElement.classList.add('is-ios');
  }

  const header = document.getElementById('siteHeader');
  
  // Header state on scroll with requestAnimationFrame for buttery performance
  let ticking = false;
  const SCROLL_THRESHOLD = 90;

  // Universal Section Array for Edge Peeking Prevention across all sections
  const snapSections = Array.from(document.querySelectorAll(
    '.hero-frame-wrapper, .scene-hero-continuation, .scene-recognition, .scene-method, .scene-inside-world, .journey-carousel-wrapper, .scene-program-timeline, .scene-program-ritim, .scene-fit, .scene-nilufer, .scene-practical, .scene-close'
  ));
  const heroSection = document.getElementById('hero');
  const weekSections = document.querySelectorAll('.scene-journey-week');
  const lightSurfaceSections = document.querySelectorAll('[data-slide-theme="light"]');
  const journeyTracker = document.getElementById('journeyTracker');
  const trackerLinks = document.querySelectorAll('.tracker-link');

  const handleScroll = () => {
    if (!header) return;
    const currentScrollY = window.scrollY || window.pageYOffset;

    // Smooth Universal Section Isolation
    // When resting on Section K, adjacent sections (K-1 and K+1) have opacity: 0 to eliminate edge peeking.
    // While actively scrolling between sections, adjacent sections immediately have opacity: 1 for unbroken gliding.
    if (snapSections.length > 0) {
      const viewCenter = currentScrollY + window.innerHeight * 0.5;

      let activeIdx = 0;
      for (let i = 0; i < snapSections.length; i++) {
        const sec = snapSections[i];
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (viewCenter >= top && viewCenter < bottom) {
          activeIdx = i;
          break;
        }
      }

      const activeSec = snapSections[activeIdx];
      const activeTop = activeSec.offsetTop;
      const isSettled = Math.abs(currentScrollY - activeTop) <= 60;

      for (let i = 0; i < snapSections.length; i++) {
        const sec = snapSections[i];
        if (i === activeIdx) {
          if (sec.classList.contains('is-section-hidden')) {
            sec.classList.remove('is-section-hidden');
          }
        } else if (isSettled && (i === activeIdx - 1 || i === activeIdx + 1)) {
          if (!sec.classList.contains('is-section-hidden')) {
            sec.classList.add('is-section-hidden');
          }
        } else if (!isSettled && (i === activeIdx - 1 || i === activeIdx + 1)) {
          if (sec.classList.contains('is-section-hidden')) {
            sec.classList.remove('is-section-hidden');
          }
        } else {
          if (!sec.classList.contains('is-section-hidden')) {
            sec.classList.add('is-section-hidden');
          }
        }
      }
    }

    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      const checkY = 28;
      if (heroRect.top <= checkY && heroRect.bottom >= checkY) {
        if (!header.classList.contains('is-on-hero')) header.classList.add('is-on-hero');
      } else {
        if (header.classList.contains('is-on-hero')) header.classList.remove('is-on-hero');
      }
    }
    
    if (currentScrollY > SCROLL_THRESHOLD) {
      if (!header.classList.contains('is-scrolled')) {
        header.classList.add('is-scrolled');
      }

      // Context-aware surface check for smooth material adaptation
      const headerRect = header.getBoundingClientRect();
      const headerMidY = headerRect.top + headerRect.height / 2;
      
      let onLight = false;
      for (let i = 0; i < lightSurfaceSections.length; i++) {
        const section = lightSurfaceSections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerMidY && rect.bottom >= headerMidY) {
          onLight = true;
          break;
        }
      }
      
      if (onLight) {
        if (!header.classList.contains('is-on-light')) header.classList.add('is-on-light');
      } else {
        if (header.classList.contains('is-on-light')) header.classList.remove('is-on-light');
      }
    } else {
      if (header.classList.contains('is-scrolled')) {
        header.classList.remove('is-scrolled');
      }
      if (header.classList.contains('is-on-light')) {
        header.classList.remove('is-on-light');
      }
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('scrollend', () => {
    handleScroll();
  }, { passive: true });
  
  handleScroll();

  // Smooth scroll for internal anchor links (excluding FAQ modal triggers)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '' || this.hasAttribute('data-open-faq')) return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        if (targetEl.classList.contains('is-section-hidden')) {
          targetEl.classList.remove('is-section-hidden');
        }
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Six-Week Journey Tracker (Sections 6–12 / 00–06)
  if (weekSections.length > 0 && trackerLinks.length > 0) {
    const activeWeeks = new Set();

    const weekObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const weekIndex = entry.target.getAttribute('data-week-index');
        const theme = entry.target.getAttribute('data-slide-theme');
        
        if (entry.isIntersecting) {
          activeWeeks.add(id);

          // Update active tracker link
          trackerLinks.forEach(link => {
            const linkTarget = link.getAttribute('href').replace('#', '');
            const linkWeek = link.getAttribute('data-week');
            if (linkTarget === id || linkWeek === weekIndex) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          // Sync tracker light/dark theme with active slide
          if (journeyTracker) {
            if (theme === 'light') {
              journeyTracker.classList.add('theme-light');
            } else {
              journeyTracker.classList.remove('theme-light');
            }
          }
        } else {
          activeWeeks.delete(id);
        }
      });

      // Toggle tracker visibility based on whether any week section is in view
      if (journeyTracker) {
        if (activeWeeks.size > 0) {
          journeyTracker.classList.add('is-visible');
        } else {
          journeyTracker.classList.remove('is-visible');
        }
      }
    }, {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.15
    });

    weekSections.forEach(section => weekObserver.observe(section));
  }

  // ═══════════════════════════════════════════════════════════
  // CONTEXTUAL FAQ MODAL SYSTEM
  // Accessible, scroll-isolated, single source of truth
  // ═══════════════════════════════════════════════════════════
  const faqModal = document.getElementById('faqModal');
  let lastFocusedTrigger = null;

  const openFaqModal = (targetFaqId) => {
    if (!faqModal) return;
    lastFocusedTrigger = document.activeElement;
    faqModal.classList.add('is-open');
    faqModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const allItems = faqModal.querySelectorAll('.faq-item');
    let targetItem = null;

    allItems.forEach(item => {
      const id = item.getAttribute('data-faq-id');
      if (targetFaqId && targetFaqId !== 'all' && (id === targetFaqId || item.id === targetFaqId)) {
        item.open = true;
        targetItem = item;
      } else {
        item.open = false;
      }
    });

    if (targetItem) {
      setTimeout(() => {
        targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const summary = targetItem.querySelector('summary');
        if (summary) summary.focus();
      }, 120);
    } else {
      const closeBtn = faqModal.querySelector('.faq-modal-close');
      if (closeBtn) closeBtn.focus();
    }
  };

  const closeFaqModal = () => {
    if (!faqModal || !faqModal.classList.contains('is-open')) return;
    faqModal.classList.remove('is-open');
    faqModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  // Open modal triggers
  document.querySelectorAll('[data-open-faq]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const faqId = btn.getAttribute('data-open-faq');
      openFaqModal(faqId);
    });
  });

  // Close modal triggers (backdrop and close button)
  document.querySelectorAll('[data-close-faq]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      closeFaqModal();
    });
  });

  // Escape key listener for accessible closing
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && faqModal && faqModal.classList.contains('is-open')) {
      closeFaqModal();
    }
  });

  // Exclusive Accordion inside FAQ Modal
  if (faqModal) {
    const modalFaqItems = faqModal.querySelectorAll('.faq-item');
    modalFaqItems.forEach(detail => {
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          modalFaqItems.forEach(other => {
            if (other !== detail && other.open) {
              other.open = false;
            }
          });
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // FLOATING LIVE CHAT VISIBILITY SYSTEM
  // Visible strictly from 6 Hafta 00 (#hafta-0) through Nilüfer (#nilufer)
  // ═══════════════════════════════════════════════════════════
  const liveChatAnchor = document.getElementById('liveChatAnchor');
  const liveChatBtn = document.getElementById('liveChatBtn');
  
  const eligibleChatSectionIds = new Set([
    'hafta-0', 'hafta-1', 'hafta-2', 'hafta-3', 'hafta-4', 'hafta-5', 'hafta-6',
    'program', 'program-ritim',
    'uygunluk',
    'nilufer'
  ]);

  const updateChatVisibility = () => {
    if (!liveChatAnchor) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const viewMid = scrollY + window.innerHeight / 2;

    const allSections = document.querySelectorAll('section[id]');
    let currentSectionId = null;

    for (let i = 0; i < allSections.length; i++) {
      const sec = allSections[i];
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (viewMid >= top && viewMid <= bottom) {
        currentSectionId = sec.id;
        break;
      }
    }

    const isMobile = window.innerWidth <= 768;
    const isCarouselSection = currentSectionId && currentSectionId.startsWith('hafta-');
    if (currentSectionId && eligibleChatSectionIds.has(currentSectionId) && !(isMobile && isCarouselSection)) {
      if (!liveChatAnchor.classList.contains('is-visible')) {
        liveChatAnchor.classList.add('is-visible');
        liveChatAnchor.setAttribute('aria-hidden', 'false');
        if (liveChatBtn) liveChatBtn.setAttribute('tabindex', '0');
      }

      // Check if chat anchor is over a light surface
      const chatRect = liveChatAnchor.getBoundingClientRect();
      const chatMidY = chatRect.top + chatRect.height / 2;
      let chatOnLight = false;
      for (let i = 0; i < lightSurfaceSections.length; i++) {
        const sec = lightSurfaceSections[i];
        const rect = sec.getBoundingClientRect();
        if (rect.top <= chatMidY && rect.bottom >= chatMidY) {
          chatOnLight = true;
          break;
        }
      }

      if (chatOnLight) {
        if (!liveChatAnchor.classList.contains('is-on-light')) liveChatAnchor.classList.add('is-on-light');
      } else {
        if (liveChatAnchor.classList.contains('is-on-light')) liveChatAnchor.classList.remove('is-on-light');
      }
    } else {
      if (liveChatAnchor.classList.contains('is-visible')) {
        liveChatAnchor.classList.remove('is-visible');
        liveChatAnchor.setAttribute('aria-hidden', 'true');
        if (liveChatBtn) liveChatBtn.setAttribute('tabindex', '-1');
      }
    }
  };

  window.addEventListener('scroll', updateChatVisibility, { passive: true });
  window.addEventListener('resize', updateChatVisibility, { passive: true });
  updateChatVisibility();

  if (liveChatBtn) {
    liveChatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openFaqModal('all');
    });
  }

  // ═══════════════════════════════════════════════════════════
  // MOBILE SIX-WEEK HORIZONTAL STORYTELLING CAROUSEL
  // Supports touch swiping, dot pagination, prev/next buttons,
  // FAQ modal trigger, and dynamic downward continuation link
  // ═══════════════════════════════════════════════════════════
  const initMobileJourneyCarousel = () => {
    const track = document.getElementById('journeyCarouselTrack');
    if (!track) return;

    const weeks = Array.from(track.querySelectorAll('.scene-journey-week'));
    if (weeks.length === 0) return;

    const allDots = Array.from(document.querySelectorAll('.journey-dot'));
    const prevBtns = document.querySelectorAll('[data-journey-prev]');
    const nextBtns = document.querySelectorAll('[data-journey-next]');
    const advanceBtn = document.getElementById('journeyIntroAdvanceBtn');
    const mobileChatBtns = document.querySelectorAll('.journey-mobile-chat-btn');
    const continuationWrap = document.getElementById('journeyMobileContinuation');
    const downwardText = document.getElementById('journeyDownwardText');

    const scrollToIndex = (index) => {
      const targetIndex = Math.max(0, Math.min(weeks.length - 1, index));
      const targetWeek = weeks[targetIndex];
      if (targetWeek) {
        track.scrollTo({
          left: targetWeek.offsetLeft,
          behavior: 'smooth'
        });
      }
    };

    if (advanceBtn) {
      advanceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToIndex(1);
      });
    }

    prevBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentIdx = Math.round(track.scrollLeft / (track.clientWidth || 1));
        scrollToIndex(currentIdx - 1);
      });
    });

    nextBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentIdx = Math.round(track.scrollLeft / (track.clientWidth || 1));
        scrollToIndex(currentIdx + 1);
      });
    });

    allDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetIdx = parseInt(dot.getAttribute('data-target-index'), 10);
        if (!isNaN(targetIdx)) {
          scrollToIndex(targetIdx);
        }
      });
    });

    mobileChatBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openFaqModal('all');
      });
    });

    let carouselTicking = false;
    const updateCarouselState = () => {
      const trackWidth = track.clientWidth || 1;
      const currentIdx = Math.max(0, Math.min(weeks.length - 1, Math.round(track.scrollLeft / trackWidth)));

      // Sync active pagination dot
      allDots.forEach(dot => {
        const dotIdx = parseInt(dot.getAttribute('data-target-index'), 10);
        dot.classList.toggle('active', dotIdx === currentIdx);
      });

      // Update downward continuation text and visibility
      if (continuationWrap && downwardText) {
        if (currentIdx === 0) {
          downwardText.textContent = 'Aşağıda: Programın içinde neler var?';
          continuationWrap.classList.remove('is-hidden');
        } else if (currentIdx === weeks.length - 1) {
          downwardText.textContent = 'Sonraki bölüm: Programın içinde neler var?';
          continuationWrap.classList.remove('is-hidden');
        } else {
          continuationWrap.classList.add('is-hidden');
        }
      }

      carouselTicking = false;
    };

    track.addEventListener('scroll', () => {
      if (!carouselTicking) {
        window.requestAnimationFrame(updateCarouselState);
        carouselTicking = true;
      }
    }, { passive: true });

    // Initial state setup
    updateCarouselState();
  };

  initMobileJourneyCarousel();
});
