// ═══════════════════════════════════════════════════════════════
// EVDEKİ SES — MAIN JAVASCRIPT
// Natural browser scroll, header dynamics, journey tracker, modal FAQ system
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Prevent Safari from restoring stale scroll positions on reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Mobile detection for Dynamic Viewport & Universal Mobile Snap Engine
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isMobile = window.innerWidth <= 768;
  if (isIOS) {
    document.documentElement.classList.add('is-ios');
  }
  if (isMobile) {
    document.documentElement.classList.add('is-mobile');
    if (isIOS) {
      document.documentElement.classList.add('is-ios-mobile');
    }

    // Ensure mobile source images are cleanly loaded on mobile devices
    const conceptualImg = document.querySelector('.conceptual-photo');
    if (conceptualImg) {
      conceptualImg.src = 'assets/scene-07-mobile.webp';
    }
  }

  const header = document.getElementById('siteHeader');
  const mainContainer = document.querySelector('main');

  // Header state on scroll with requestAnimationFrame for buttery performance
  let ticking = false;
  const SCROLL_THRESHOLD = 90;

  // Universal Section Array for Edge Peeking Prevention across all sections
  const snapSections = Array.from(document.querySelectorAll(
    '.hero-frame-wrapper, .scene-hero-continuation, .scene-recognition, .scene-method, .scene-inside-world, .scene-program-timeline, .scene-program-ritim, .scene-fit, .scene-nilufer, .scene-testimonials, .scene-practical, .scene-close'
  ));

  const journeyWrapper = document.getElementById('journeyCarouselWrapper');
  if (journeyWrapper) {
    journeyWrapper.classList.remove('is-section-hidden');
  }
  const heroSection = document.getElementById('hero');
  const weekSections = document.querySelectorAll('.scene-journey-week');
  const lightSurfaceSections = document.querySelectorAll('[data-slide-theme="light"]');
  const journeyTracker = document.getElementById('journeyTracker');
  const trackerLinks = document.querySelectorAll('.tracker-link');

  const handleScroll = () => {
    if (!header) return;
    const currentScrollY = isMobile && mainContainer ? mainContainer.scrollTop : (window.scrollY || window.pageYOffset);

    // Smooth Universal Section Isolation (Active strictly on Desktop/Tablets)
    // On mobile devices (<=768px), 100dvh pure CSS snap handles section alignment natively
    if (!isMobile && snapSections.length > 0) {
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

    // Dynamic Deep Black theme adaptation for Journey Slides (7 slides) and Closing Section
    const journeyWrapper = document.getElementById('journeyCarouselWrapper');
    const closeSection = document.getElementById('kapanis');
    const metaTheme = document.getElementById('metaThemeColor');

    let isDarkActive = false;
    const vh = window.innerHeight || 1;

    if (journeyWrapper) {
      const jRect = journeyWrapper.getBoundingClientRect();
      if (jRect.top < vh * 0.5 && jRect.bottom > vh * 0.5) {
        isDarkActive = true;
      }
    }

    if (closeSection) {
      const cRect = closeSection.getBoundingClientRect();
      if (cRect.top < vh * 0.5 && cRect.bottom > vh * 0.5) {
        isDarkActive = true;
      }
    }

    if (isDarkActive) {
      if (!document.documentElement.classList.contains('is-theme-journey')) {
        document.documentElement.classList.add('is-theme-journey');
        if (metaTheme) metaTheme.setAttribute('content', '#080A0C');
      }
    } else {
      if (document.documentElement.classList.contains('is-theme-journey')) {
        document.documentElement.classList.remove('is-theme-journey');
        if (metaTheme) metaTheme.setAttribute('content', '#ffffff');
      }
    }

    ticking = false;
  };

  if (isMobile && mainContainer) {
    mainContainer.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });
  } else {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('scrollend', () => {
      handleScroll();
    }, { passive: true });
  }

  handleScroll();

  // ══════════════════════════════════════════════════════════════════════
  // UNIVERSAL MOBILE: SMART BOUNDARY SWAP (CONCEPTUAL & PROGRAM TIMELINE)
  // 1. Kart/bölüm içi doğal ve pürüzsüz kayar.
  // 2. İçerik sonundayken aşağı kaydırma -> sonraki bölüme geçer.
  // 3. İçerik başındayken yukarı kaydırma -> önceki bölüme döner.
  // ══════════════════════════════════════════════════════════════════════
  if (isMobile) {
    const setupBoundarySwipe = (container, prevEl, nextEl) => {
      if (!container || !prevEl || !nextEl) return;

      let touchStartY = 0;
      let touchStartX = 0;
      let initialScrollTop = 0;
      let isTransitioning = false;

      container.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        initialScrollTop = container.scrollTop;
      }, { passive: true });

      container.addEventListener('touchend', (e) => {
        if (isTransitioning) return;
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndX = e.changedTouches[0].clientX;
        const deltaY = touchStartY - touchEndY; // > 0: swipe up (scroll down), < 0: swipe down (scroll up)
        const deltaX = Math.abs(touchStartX - touchEndX);

        if (deltaX > Math.abs(deltaY)) return;

        const threshold = 40;
        const maxScroll = container.scrollHeight - container.clientHeight;
        const isAtBottom = initialScrollTop >= (maxScroll - 10);
        const isAtTop = initialScrollTop <= 10;

        if (deltaY > threshold && isAtBottom) {
          isTransitioning = true;
          nextEl.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => { isTransitioning = false; }, 700);
        } else if (deltaY < -threshold && isAtTop) {
          isTransitioning = true;
          prevEl.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => { isTransitioning = false; }, 700);
        }
      }, { passive: true });
    };

    // 1. Scene Conceptual (Section 7)
    const conceptualInner = document.querySelector('.scene-conceptual .conceptual-stage-container');
    const conceptualPrev = document.getElementById('encounter');
    const conceptualNext = document.getElementById('journeyCarouselWrapper') || document.getElementById('hafta-0');
    setupBoundarySwipe(conceptualInner, conceptualPrev, conceptualNext);

    // 2. Scene Program Timeline (Section 13: Programın içinde neler var?)
    const programInner = document.querySelector('.scene-program-timeline .program-timeline-container');
    const programPrev = document.getElementById('journeyCarouselWrapper') || document.getElementById('hafta-6');
    const programNext = document.getElementById('program-ritim');
    setupBoundarySwipe(programInner, programPrev, programNext);
  }

  // Smooth scroll for internal anchor links (excluding FAQ and Checkout modal triggers and pending destinations)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '' || this.hasAttribute('data-open-faq') || this.hasAttribute('data-open-checkout') || this.hasAttribute('data-pending')) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        if (targetEl.classList.contains('is-section-hidden')) {
          targetEl.classList.remove('is-section-hidden');
        }
        e.preventDefault();
        if (targetId === '#program') {
          const programInner = document.querySelector('.scene-program-timeline .program-timeline-container');
          if (programInner) programInner.scrollTop = 0;
        }
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

  const getActiveSectionTheme = () => {
    const sections = document.querySelectorAll('section[data-slide-theme]');
    const centerY = window.innerHeight / 2;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= centerY && rect.bottom >= centerY) {
        return sec.getAttribute('data-slide-theme') || 'dark';
      }
    }
    const header = document.getElementById('siteHeader');
    if (header && header.classList.contains('is-on-light')) return 'light';
    return 'dark';
  };

  const openFaqModal = (targetFaqId) => {
    if (!faqModal) return;
    lastFocusedTrigger = document.activeElement;
    faqModal.setAttribute('data-modal-theme', getActiveSectionTheme());
    faqModal.classList.add('is-open');
    faqModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const allItems = faqModal.querySelectorAll('.faq-item');
    let targetItem = null;

    allItems.forEach(item => {
      const dataId = item.getAttribute('data-faq-id');
      const itemId = item.getAttribute('id');
      const matches = Boolean(
        targetFaqId &&
        targetFaqId !== 'all' &&
        (dataId === targetFaqId || itemId === targetFaqId)
      );

      if (matches) {
        item.setAttribute('open', '');
        item.open = true;
        targetItem = item;
      } else {
        item.removeAttribute('open');
        item.open = false;
      }
    });

    const modalBody = faqModal.querySelector('.faq-modal-body');
    if (targetItem) {
      setTimeout(() => {
        targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const summary = targetItem.querySelector('summary');
        if (summary) summary.focus();
      }, 100);
    } else {
      if (modalBody) modalBody.scrollTop = 0;
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

  // Open modal triggers (event delegation ensures all desktop & mobile elements with data-open-faq work)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-faq]');
    if (trigger) {
      e.preventDefault();
      const faqId = trigger.getAttribute('data-open-faq');
      openFaqModal(faqId);
    }
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
  // MOBILE FULL-SCREEN NAVIGATION CONTROLLER
  // ═══════════════════════════════════════════════════════════
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavFaqBtn = document.getElementById('mobileNavFaqBtn');
  let isMobileNavOpen = false;
  let savedScrollTop = 0;

  const openMobileNav = () => {
    if (isMobileNavOpen || !mobileNavOverlay) return;
    isMobileNavOpen = true;

    // Record exact current scroll position before locking
    savedScrollTop = isMobile && mainContainer ? mainContainer.scrollTop : (window.scrollY || window.pageYOffset);

    mobileNavOverlay.classList.add('is-open');
    mobileNavOverlay.setAttribute('aria-hidden', 'false');

    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
      mobileMenuToggle.setAttribute('aria-label', 'Menüyü kapat');
    }

    document.body.classList.add('mobile-nav-open');
    document.documentElement.classList.add('mobile-nav-open');

    // Accessibility: Focus first interactive link in overlay
    const firstLink = mobileNavOverlay.querySelector('.mobile-nav-link');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 60);
    }
  };

  const closeMobileNav = (options = { restoreScroll: true }) => {
    if (!isMobileNavOpen || !mobileNavOverlay) return;
    isMobileNavOpen = false;

    mobileNavOverlay.classList.remove('is-open');
    mobileNavOverlay.setAttribute('aria-hidden', 'true');

    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileMenuToggle.setAttribute('aria-label', 'Menüyü aç');
    }

    document.body.classList.remove('mobile-nav-open');
    document.documentElement.classList.remove('mobile-nav-open');

    if (options.restoreScroll) {
      if (isMobile && mainContainer) {
        mainContainer.scrollTop = savedScrollTop;
      } else {
        window.scrollTo(0, savedScrollTop);
      }
    }
  };

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (isMobileNavOpen) {
        closeMobileNav({ restoreScroll: true });
        mobileMenuToggle.focus();
      } else {
        openMobileNav();
      }
    });
  }

  // Section navigation handlers for mobile menu items
  const navigateFromMobileMenu = (targetSelector, resetCarousel = false) => {
    closeMobileNav({ restoreScroll: false });

    // Allow browser frame to unlock scroll container
    requestAnimationFrame(() => {
      if (resetCarousel) {
        const carouselTrack = document.getElementById('journeyCarouselTrack');
        if (carouselTrack) {
          carouselTrack.scrollTo({ left: 0, behavior: 'instant' });
        }
      }

      if (targetSelector === '#hero') {
        if (isMobile && mainContainer) {
          mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        if (targetEl.classList.contains('is-section-hidden')) {
          targetEl.classList.remove('is-section-hidden');
        }

        if (targetSelector === '#program') {
          const programInner = document.querySelector('.scene-program-timeline .program-timeline-container');
          if (programInner) {
            programInner.scrollTop = 0;
          }
        }

        if (isMobile && mainContainer) {
          const mainRect = mainContainer.getBoundingClientRect();
          const targetRect = targetEl.getBoundingClientRect();
          const targetOffset = targetRect.top - mainRect.top + mainContainer.scrollTop;
          mainContainer.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
        } else {
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  };

  // Wire mobile menu navigation links
  if (mobileNavOverlay) {
    const navLinks = mobileNavOverlay.querySelectorAll('[data-mobile-nav]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-mobile-nav');
        const resetCarousel = link.getAttribute('data-reset-carousel') === 'true';
        navigateFromMobileMenu(target, resetCarousel);
      });
    });

    // FAQ handler: Close mobile menu cleanly first, then open FAQ modal
    if (mobileNavFaqBtn) {
      mobileNavFaqBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileNav({ restoreScroll: true });
        setTimeout(() => {
          openFaqModal('all');
        }, 180);
      });
    }

    // Pending legal & contact links (prevent default; do not silently redirect)
    const pendingLinks = mobileNavOverlay.querySelectorAll('[data-pending="true"]');
    pendingLinks.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });

    // Close on overlay backdrop tap (if tapping directly on overlay backdrop)
    mobileNavOverlay.addEventListener('click', (e) => {
      if (e.target === mobileNavOverlay) {
        closeMobileNav({ restoreScroll: true });
      }
    });
  }

  // Keyboard navigation: Escape key closes mobile navigation overlay
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobileNavOpen) {
      closeMobileNav({ restoreScroll: true });
      if (mobileMenuToggle) mobileMenuToggle.focus();
    }
  });

  // ═══════════════════════════════════════════════════════════
  // FOOTER LEGAL & CONTACT LINK INTEGRATION HOOKS
  // Missing destinations await finalized legal documents / channels.
  // Prevents silent redirects / hash jumps; provides clean implementation hooks.
  // ═══════════════════════════════════════════════════════════
  const footerLegalLinks = document.querySelectorAll('.footer-legal-link');
  footerLegalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Allow native mailto: handler to open mail client without preventDefault
      if (link.getAttribute('href') && link.getAttribute('href').startsWith('mailto:')) {
        return;
      }
      e.preventDefault();
      const legalType = link.getAttribute('data-legal');

      switch (legalType) {
        case 'kvkk':
          // TODO: Open KVKK Aydınlatma Metni modal or navigate to /kvkk when document is provided
          console.info('[Footer] KVKK Aydınlatma Metni: Awaiting final document destination.');
          break;
        case 'gizlilik':
          // TODO: Open Gizlilik Politikası modal or navigate to /gizlilik when document is provided
          console.info('[Footer] Gizlilik Politikası: Awaiting final document destination.');
          break;
        case 'cerez':
          // TODO: Open Çerez Politikası modal or navigate to /cerez-politikasi when document is provided
          console.info('[Footer] Çerez Politikası: Awaiting final document destination.');
          break;
        case 'kullanim':
          // TODO: Open Kullanım Koşulları modal or navigate to /kullanim-kosullari when document is provided
          console.info('[Footer] Kullanım Koşulları: Awaiting final document destination.');
          break;
        case 'iletisim':
          // TODO: Connect to official contact modal, mailto:, or support channel when provided
          console.info('[Footer] İletişim: Awaiting final contact destination.');
          break;
        case 'cookie-preferences':
          // Hook: Invoke consent management system if initialized
          if (window.EvdekiSesConsent && typeof window.EvdekiSesConsent.openPreferences === 'function') {
            window.EvdekiSesConsent.openPreferences();
          } else if (typeof window.openCookiePreferences === 'function') {
            window.openCookiePreferences();
          } else {
            // TODO: Consent management interface is not yet installed in codebase
            console.info('[Footer] Çerez Tercihlerini Yönet: Consent manager interface not detected yet.');
          }
          break;
        default:
          break;
      }
    });
  });

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
      // Canlı destek henüz aktif değil - ileride başka fonksiyon atanacak
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
    const mobileChatFab = document.getElementById('journeyMobileChatFab');
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
        const trackWidth = track.clientWidth || 1;
        const currentIdx = Math.round(track.scrollLeft / trackWidth);
        if (currentIdx >= weeks.length - 1) {
          // On 7th slide, clicking right arrow smoothly scrolls down to #program
          const programEl = document.getElementById('program');
          if (programEl) {
            const programInner = document.querySelector('.scene-program-timeline .program-timeline-container');
            if (programInner) programInner.scrollTop = 0;
            programEl.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          scrollToIndex(currentIdx + 1);
        }
      });
    });

    // Touch swipe boundary handler on 7th slide to smoothly transition down to #program
    let trackTouchStartX = 0;
    let trackTouchStartY = 0;
    let isTrackTransitioning = false;

    track.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      trackTouchStartX = e.touches[0].clientX;
      trackTouchStartY = e.touches[0].clientY;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      if (isTrackTransitioning) return;
      const trackTouchEndX = e.changedTouches[0].clientX;
      const trackTouchEndY = e.changedTouches[0].clientY;
      const deltaX = trackTouchStartX - trackTouchEndX;
      const deltaY = Math.abs(trackTouchStartY - trackTouchEndY);

      const trackWidth = track.clientWidth || 1;
      const currentIdx = Math.round(track.scrollLeft / trackWidth);

      // On 7th slide, swiping right (finger drags left past end) triggers smooth transition to #program
      if (currentIdx >= weeks.length - 1 && deltaX > 35 && deltaX > deltaY) {
        isTrackTransitioning = true;
        const programEl = document.getElementById('program');
        if (programEl) {
          const programInner = document.querySelector('.scene-program-timeline .program-timeline-container');
          if (programInner) programInner.scrollTop = 0;
          programEl.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => { isTrackTransitioning = false; }, 800);
      }
    }, { passive: true });

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
        // Canlı destek henüz aktif değil - ileride başka fonksiyon atanacak
      });
    });

    if (mobileChatFab) {
      mobileChatFab.addEventListener('click', (e) => {
        e.preventDefault();
        // Canlı destek henüz aktif değil - ileride başka fonksiyon atanacak
      });
    }

    let carouselTicking = false;
    const updateCarouselState = () => {
      const trackWidth = track.clientWidth || 1;
      const currentIdx = Math.max(0, Math.min(weeks.length - 1, Math.round(track.scrollLeft / trackWidth)));

      // Sync active pagination dot
      allDots.forEach(dot => {
        const dotIdx = parseInt(dot.getAttribute('data-target-index'), 10);
        dot.classList.toggle('active', dotIdx === currentIdx);
      });

      // Sync counter number (1/7 to 7/7)
      const counterCurr = document.getElementById('journeyCounterCurr');
      if (counterCurr) {
        counterCurr.textContent = (currentIdx + 1);
      }

      // Sync prev / next buttons disabled state
      const navPrev = document.getElementById('journeyNavPrev');
      const navNext = document.getElementById('journeyNavNext');
      if (navPrev) {
        navPrev.classList.toggle('disabled', currentIdx === 0);
      }
      if (navNext) {
        navNext.classList.toggle('disabled', currentIdx === weeks.length - 1);
      }

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

  // ═══════════════════════════════════════════════════════════
  // CENTRAL MODAL SCROLL LOCK HELPER
  // Manages body scroll lock when stacked modals open/close
  // ═══════════════════════════════════════════════════════════
  const updateModalScrollLock = () => {
    const isAnyOpen = Boolean(
      document.querySelector('.checkout-modal-overlay.is-open, .legal-modal-overlay.is-open, .cookie-modal-overlay.is-open, .faq-modal-overlay.is-open')
    );
    if (isAnyOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
  };

  // ═══════════════════════════════════════════════════════════
  // CHECKOUT PREVIEW MODAL (C01–C07 IMPLEMENTATION)
  // ═══════════════════════════════════════════════════════════
  const initCheckoutModal = () => {
    const checkoutModal = document.getElementById('checkoutModal');
    if (!checkoutModal) return;

    const openTriggers = document.querySelectorAll('[data-open-checkout="true"]');
    const closeTriggers = document.querySelectorAll('[data-close-checkout="true"]');
    const planRadios = document.querySelectorAll('input[name="checkoutPlan"]');
    const checkoutForm = document.getElementById('checkoutPreviewForm');
    const agreeTerms = document.getElementById('checkoutAgreeTerms');
    const termsError = document.getElementById('checkoutTermsError');
    const successBox = document.getElementById('checkoutSuccessNotice');
    const submitBtn = document.getElementById('checkoutSubmitBtn');

    let previousActiveElement = null;

    const openCheckout = (e) => {
      if (e) e.preventDefault();
      // If mobile navigation is open, close it first cleanly
      if (typeof closeMobileNav === 'function' && typeof isMobileNavOpen !== 'undefined' && isMobileNavOpen) {
        closeMobileNav({ restoreScroll: false });
      }

      previousActiveElement = document.activeElement;
      checkoutModal.setAttribute('data-modal-theme', getActiveSectionTheme());
      checkoutModal.classList.add('is-open');
      checkoutModal.setAttribute('aria-hidden', 'false');
      updateModalScrollLock();

      // Focus first input
      const firstInput = checkoutModal.querySelector('#checkoutName');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    };

    const closeCheckout = (e) => {
      if (e) e.preventDefault();
      checkoutModal.classList.remove('is-open');
      checkoutModal.setAttribute('aria-hidden', 'true');
      updateModalScrollLock();
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };

    openTriggers.forEach(btn => {
      btn.addEventListener('click', openCheckout);
    });

    closeTriggers.forEach(btn => {
      btn.addEventListener('click', closeCheckout);
    });

    planRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.checkout-plan-option').forEach(opt => opt.classList.remove('is-selected'));
        const parentLabel = radio.closest('.checkout-plan-option');
        if (parentLabel) parentLabel.classList.add('is-selected');
      });
    });

    const resetBtn = document.getElementById('btnResetCheckoutForm');
    const simStateButtons = document.querySelectorAll('.btn-sim-state');
    const simStates = {
      'simulated-success': document.getElementById('checkoutStateSimSuccess'),
      'processing': document.getElementById('checkoutStateProcessing'),
      'pending': document.getElementById('checkoutStatePending'),
      'failed': document.getElementById('checkoutStateFailed')
    };

    const activateSimState = (stateKey) => {
      simStateButtons.forEach(btn => {
        const isTarget = btn.getAttribute('data-sim-state') === stateKey;
        btn.classList.toggle('active', isTarget);
        btn.classList.toggle('is-active', isTarget);
      });
      Object.keys(simStates).forEach(key => {
        const el = simStates[key];
        if (el) {
          el.style.display = (key === stateKey) ? 'block' : 'none';
        }
      });
    };

    simStateButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetState = btn.getAttribute('data-sim-state');
        activateSimState(targetState);
      });
    });

    if (checkoutForm) {
      const nameInput = document.getElementById('checkoutName');
      const emailInput = document.getElementById('checkoutEmail');

      if (nameInput) {
        nameInput.addEventListener('input', () => {
          if (nameInput.value.trim()) nameInput.classList.remove('has-error');
        });
      }

      if (emailInput) {
        emailInput.addEventListener('input', () => {
          if (emailInput.value.trim()) emailInput.classList.remove('has-error');
        });
      }

      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let hasFieldErrors = false;

        if (nameInput) {
          if (!nameInput.value.trim()) {
            nameInput.classList.add('has-error');
            hasFieldErrors = true;
          } else {
            nameInput.classList.remove('has-error');
          }
        }

        if (emailInput) {
          const emailVal = emailInput.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailVal || !emailRegex.test(emailVal)) {
            emailInput.classList.add('has-error');
            hasFieldErrors = true;
          } else {
            emailInput.classList.remove('has-error');
          }
        }

        if (hasFieldErrors) {
          if (nameInput && !nameInput.value.trim()) {
            nameInput.focus();
          } else if (emailInput) {
            emailInput.focus();
          }
          return;
        }

        if (!agreeTerms || !agreeTerms.checked) {
          if (termsError) termsError.style.display = 'block';
          const label = agreeTerms ? agreeTerms.closest('.checkout-checkbox-label') : null;
          if (label) label.classList.add('has-error');
          return;
        }

        if (termsError) termsError.style.display = 'none';
        const label = agreeTerms.closest('.checkout-checkbox-label');
        if (label) label.classList.remove('has-error');

        // Show simulated preview confirmation (defaults to simulated-success)
        checkoutForm.style.display = 'none';
        if (successBox) successBox.style.display = 'block';
        activateSimState('simulated-success');
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (checkoutForm) {
          checkoutForm.reset();
          checkoutForm.style.display = 'block';
          const nameInput = document.getElementById('checkoutName');
          const emailInput = document.getElementById('checkoutEmail');
          if (nameInput) nameInput.classList.remove('has-error');
          if (emailInput) emailInput.classList.remove('has-error');
          // Ensure first plan option remains visually active
          document.querySelectorAll('.checkout-plan-option').forEach((opt, idx) => {
            if (idx === 0) {
              opt.classList.add('is-selected');
              const r = opt.querySelector('input[type="radio"]');
              if (r) r.checked = true;
            } else {
              opt.classList.remove('is-selected');
            }
          });
        }
        if (successBox) successBox.style.display = 'none';
        if (termsError) termsError.style.display = 'none';
        const label = agreeTerms ? agreeTerms.closest('.checkout-checkbox-label') : null;
        if (label) label.classList.remove('has-error');
      });
    }

    if (agreeTerms) {
      agreeTerms.addEventListener('change', () => {
        if (agreeTerms.checked) {
          if (termsError) termsError.style.display = 'none';
          const label = agreeTerms.closest('.checkout-checkbox-label');
          if (label) label.classList.remove('has-error');
        }
      });
    }
  };

  initCheckoutModal();

  // ═══════════════════════════════════════════════════════════
  // IN-PAGE LEGAL READER MODAL & TAB CONTROLLER
  // ═══════════════════════════════════════════════════════════
  const initLegalModals = () => {
    const legalModal = document.getElementById('legalModal');
    if (!legalModal) return;

    const closeTriggers = document.querySelectorAll('[data-close-legal="true"]');
    const legalLinks = document.querySelectorAll('[data-legal]');
    const tabs = legalModal.querySelectorAll('.legal-modal-tab');
    const views = legalModal.querySelectorAll('.legal-modal-view');
    const extLink = document.getElementById('legalModalExternalLink');

    const docUrls = {
      'on-bilgilendirme': 'legal/on-bilgilendirme.html',
      'mesafeli-satis': 'legal/mesafeli-satis.html',
      'katilim-kosullari': 'legal/katilim-kosullari.html',
      'gizlilik': 'legal/gizlilik.html',
      'kvkk': 'legal/gizlilik.html',
      'cerez': 'legal/cerez.html',
      'kullanim': 'legal/katilim-kosullari.html'
    };

    const activateTab = (docKey) => {
      const canonicalKey = (docKey === 'kvkk') ? 'gizlilik' : (docKey === 'kullanim') ? 'katilim-kosullari' : docKey;

      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-legal-tab') === canonicalKey);
      });

      views.forEach(view => {
        view.classList.toggle('active', view.id === `legalView-${canonicalKey}`);
      });

      if (extLink && docUrls[canonicalKey]) {
        extLink.href = docUrls[canonicalKey];
      }

      // Scroll modal body to top on tab change
      const body = document.getElementById('legalModalBody');
      if (body) body.scrollTop = 0;
    };

    const openLegalModal = (docKey) => {
      // If mobile navigation is open, close it first cleanly
      if (typeof closeMobileNav === 'function' && typeof isMobileNavOpen !== 'undefined' && isMobileNavOpen) {
        closeMobileNav({ restoreScroll: false });
      }

      activateTab(docKey);
      legalModal.setAttribute('data-modal-theme', getActiveSectionTheme());
      legalModal.classList.add('is-open');
      legalModal.setAttribute('aria-hidden', 'false');
      updateModalScrollLock();
    };

    const closeLegalModal = () => {
      legalModal.classList.remove('is-open');
      legalModal.setAttribute('aria-hidden', 'true');
      updateModalScrollLock();
    };

    legalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Let middle click or Ctrl/Cmd click open actual standalone page in new tab
        if (e.button === 1 || e.ctrlKey || e.metaKey) return;
        e.preventDefault();
        const docKey = link.getAttribute('data-legal');
        openLegalModal(docKey);
      });
    });

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const docKey = tab.getAttribute('data-legal-tab');
        activateTab(docKey);
      });
    });

    closeTriggers.forEach(btn => {
      btn.addEventListener('click', closeLegalModal);
    });
  };

  initLegalModals();

  // ═══════════════════════════════════════════════════════════
  // COOKIE PREFERENCES MODAL
  // ═══════════════════════════════════════════════════════════
  const initCookiePreferencesModal = () => {
    const cookieModal = document.getElementById('cookieModal');
    if (!cookieModal) return;

    const openTriggers = document.querySelectorAll('[data-open-cookies="true"], .footer-cookie-pref-btn');
    const closeTriggers = document.querySelectorAll('[data-close-cookies="true"]');
    const saveBtn = document.getElementById('saveCookiePreferencesBtn');
    const funcInput = document.getElementById('cookieFunc');
    const analyticsInput = document.getElementById('cookieAnalytics');

    // Helper: synchronize modal checkboxes with stored preferences or set defaults (OFF on first visit)
    const syncModalInputsFromStorage = () => {
      try {
        const stored = localStorage.getItem('evdeki_cookie_consent');
        if (stored) {
          const saved = JSON.parse(stored);
          if (funcInput) funcInput.checked = Boolean(saved.functional);
          if (analyticsInput) analyticsInput.checked = Boolean(saved.analytics);
        } else {
          // KVKK / GDPR compliance: Non-essential cookies must start unchecked (off) on initial visit
          if (funcInput) funcInput.checked = false;
          if (analyticsInput) analyticsInput.checked = false;
        }
      } catch (_) {
        if (funcInput) funcInput.checked = false;
        if (analyticsInput) analyticsInput.checked = false;
      }
    };

    // Run on init
    syncModalInputsFromStorage();

    const openCookieModal = (e) => {
      if (e) e.preventDefault();
      // Ensure switches accurately reflect current stored state whenever opened
      syncModalInputsFromStorage();

      // If mobile navigation is open, close it first cleanly
      if (typeof closeMobileNav === 'function' && typeof isMobileNavOpen !== 'undefined' && isMobileNavOpen) {
        closeMobileNav({ restoreScroll: false });
      }

      cookieModal.setAttribute('data-modal-theme', getActiveSectionTheme());
      cookieModal.classList.add('is-open');
      cookieModal.setAttribute('aria-hidden', 'false');
      updateModalScrollLock();
    };

    const closeCookieModal = () => {
      cookieModal.classList.remove('is-open');
      cookieModal.setAttribute('aria-hidden', 'true');
      updateModalScrollLock();
    };

    openTriggers.forEach(btn => {
      btn.addEventListener('click', openCookieModal);
    });

    closeTriggers.forEach(btn => {
      btn.addEventListener('click', closeCookieModal);
    });

    // Cookie Consent Banner Handling
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptAllBtn = document.getElementById('cookieAcceptAll');
    const rejectNonEssentialBtn = document.getElementById('cookieRejectNonEssential');

    const hasStoredConsent = () => {
      try {
        return !!localStorage.getItem('evdeki_cookie_consent');
      } catch (_) {
        return false;
      }
    };

    if (cookieBanner && !hasStoredConsent()) {
      setTimeout(() => {
        cookieBanner.classList.add('is-visible');
      }, 700);
    }

    if (acceptAllBtn) {
      acceptAllBtn.addEventListener('click', () => {
        const preferences = {
          necessary: true,
          functional: true,
          analytics: true,
          timestamp: new Date().toISOString()
        };
        try {
          localStorage.setItem('evdeki_cookie_consent', JSON.stringify(preferences));
        } catch (_) {}
        if (funcInput) funcInput.checked = true;
        if (analyticsInput) analyticsInput.checked = true;
        if (cookieBanner) cookieBanner.classList.remove('is-visible');
      });
    }

    if (rejectNonEssentialBtn) {
      rejectNonEssentialBtn.addEventListener('click', () => {
        const preferences = {
          necessary: true,
          functional: false,
          analytics: false,
          timestamp: new Date().toISOString()
        };
        try {
          localStorage.setItem('evdeki_cookie_consent', JSON.stringify(preferences));
        } catch (_) {}
        if (funcInput) funcInput.checked = false;
        if (analyticsInput) analyticsInput.checked = false;
        if (cookieBanner) cookieBanner.classList.remove('is-visible');
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const preferences = {
          necessary: true,
          functional: funcInput ? funcInput.checked : false,
          analytics: analyticsInput ? analyticsInput.checked : false,
          timestamp: new Date().toISOString()
        };
        try {
          localStorage.setItem('evdeki_cookie_consent', JSON.stringify(preferences));
        } catch (_) {}

        if (cookieBanner) cookieBanner.classList.remove('is-visible');
        saveBtn.textContent = 'Kaydedildi ✓';
        setTimeout(() => {
          saveBtn.textContent = 'Tercihleri Kaydet';
          closeCookieModal();
        }, 500);
      });
    }
  };

  // ═══════════════════════════════════════════════════════════
  // STACKED MODAL ESCAPE KEY CONTROLLER
  // Closes only the topmost open modal without closing lower modals
  // ═══════════════════════════════════════════════════════════
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    const cookieModal = document.getElementById('cookieModal');
    const legalModal = document.getElementById('legalModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const faqModal = document.getElementById('faqModal');

    if (cookieModal && cookieModal.classList.contains('is-open')) {
      cookieModal.classList.remove('is-open');
      cookieModal.setAttribute('aria-hidden', 'true');
      updateModalScrollLock();
      e.stopImmediatePropagation();
      return;
    }

    if (legalModal && legalModal.classList.contains('is-open')) {
      legalModal.classList.remove('is-open');
      legalModal.setAttribute('aria-hidden', 'true');
      updateModalScrollLock();
      e.stopImmediatePropagation();
      return;
    }

    if (checkoutModal && checkoutModal.classList.contains('is-open')) {
      checkoutModal.classList.remove('is-open');
      checkoutModal.setAttribute('aria-hidden', 'true');
      updateModalScrollLock();
      e.stopImmediatePropagation();
      return;
    }

    if (faqModal && faqModal.classList.contains('is-open')) {
      faqModal.classList.remove('is-open');
      faqModal.setAttribute('aria-hidden', 'true');
      updateModalScrollLock();
      e.stopImmediatePropagation();
      return;
    }
  });

  // ═══════════════════════════════════════════════════════════
  // TESTIMONIALS (NİLÜFER'LE ÇALIŞANLARDAN) EDITORIAL CAROUSEL
  // Supports Touch Swipe, Trackpad, Keyboard & Controls
  // ═══════════════════════════════════════════════════════════
  const initTestimonialsCarousel = () => {
    const wrapper = document.getElementById('testimonialsCarouselWrapper');
    const track = document.getElementById('testimonialsTrack');
    const btnPrev = document.getElementById('btnTestimonialPrev');
    const btnNext = document.getElementById('btnTestimonialNext');
    const indicatorsContainer = document.getElementById('testimonialsIndicators');
    const counterEl = document.getElementById('testimonialsCounter');

    if (!wrapper || !track) return;

    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    if (!cards.length) return;

    const totalCards = cards.length;
    let currentIndex = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateControls = () => {
      const wrapperScrollLeft = wrapper.scrollLeft;
      const maxScrollLeft = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);
      const isAtEnd = maxScrollLeft > 0 && wrapperScrollLeft >= maxScrollLeft - 10;
      const isAtStart = wrapperScrollLeft <= 10;

      let closestIdx = 0;
      let minDiff = Infinity;

      cards.forEach((card, idx) => {
        const cardOffset = card.offsetLeft - track.offsetLeft;
        const diff = Math.abs(cardOffset - wrapperScrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });

      if (isAtEnd) {
        currentIndex = totalCards - 1;
      } else if (isAtStart) {
        currentIndex = 0;
      } else {
        currentIndex = closestIdx;
      }

      // Update Prev / Next button disabled state
      if (btnPrev) {
        btnPrev.disabled = isAtStart;
        btnPrev.setAttribute('aria-disabled', String(isAtStart));
      }
      if (btnNext) {
        btnNext.disabled = isAtEnd;
        btnNext.setAttribute('aria-disabled', String(isAtEnd));
      }

      // Update Indicators
      if (indicatorsContainer) {
        const dots = indicatorsContainer.querySelectorAll('.indicator-dot');
        dots.forEach((dot, idx) => {
          const isActive = idx === currentIndex;
          dot.classList.toggle('active', isActive);
          dot.setAttribute('aria-selected', String(isActive));
        });
      }

      // Update Counter
      if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${totalCards}`;
      }
    };

    const scrollToPosition = (targetScroll) => {
      const maxScrollLeft = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);
      const bounded = Math.max(0, Math.min(targetScroll, maxScrollLeft));
      wrapper.scrollTo({
        left: bounded,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    };

    const getPrevTargetScroll = () => {
      const currentScroll = wrapper.scrollLeft;
      // Find all card offsets that are visibly before current scroll position
      const candidateOffsets = cards
        .map(c => c.offsetLeft - track.offsetLeft)
        .filter(offset => offset < currentScroll - 15);

      if (candidateOffsets.length > 0) {
        return candidateOffsets[candidateOffsets.length - 1];
      }
      return 0;
    };

    const getNextTargetScroll = () => {
      const currentScroll = wrapper.scrollLeft;
      const maxScrollLeft = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);
      // Find all card offsets that are visibly after current scroll position
      const candidateOffsets = cards
        .map(c => c.offsetLeft - track.offsetLeft)
        .filter(offset => offset > currentScroll + 15);

      if (candidateOffsets.length > 0) {
        return Math.min(candidateOffsets[0], maxScrollLeft);
      }
      return maxScrollLeft;
    };

    const scrollToCard = (index) => {
      if (index < 0 || index >= totalCards) return;
      const maxScrollLeft = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);

      if (index >= totalCards - 1) {
        scrollToPosition(maxScrollLeft);
        return;
      }

      if (index <= 0) {
        scrollToPosition(0);
        return;
      }

      const targetCard = cards[index];
      if (!targetCard) return;

      scrollToPosition(targetCard.offsetLeft - track.offsetLeft);
    };

    // Button Click Listeners
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (wrapper.scrollLeft > 10) {
          scrollToPosition(getPrevTargetScroll());
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        const maxScrollLeft = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);
        if (wrapper.scrollLeft < maxScrollLeft - 10) {
          scrollToPosition(getNextTargetScroll());
        }
      });
    }

    // Indicator Dot Click Listeners
    if (indicatorsContainer) {
      indicatorsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.indicator-dot');
        if (!dot) return;
        const targetIdx = parseInt(dot.getAttribute('data-slide-index'), 10);
        if (!isNaN(targetIdx)) {
          scrollToCard(targetIdx);
        }
      });
    }

    // Keyboard Navigation (ArrowLeft / ArrowRight)
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (wrapper.scrollLeft > 10) scrollToPosition(getPrevTargetScroll());
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const maxScrollLeft = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);
        if (wrapper.scrollLeft < maxScrollLeft - 10) scrollToPosition(getNextTargetScroll());
      }
    });

    // Scroll Listener with RAF
    let isTicking = false;
    wrapper.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          updateControls();
          isTicking = false;
        });
        isTicking = true;
      }
    }, { passive: true });

    // Initial sync
    updateControls();
  };

  // ═══════════════════════════════════════════════════════════
  // PRATİK BİLGİLER ACCORDION (EXCLUSIVE EXPANSION)
  // Ensures only one condition item is open at a time across all browsers
  // ═══════════════════════════════════════════════════════════
  const initPracticalAccordion = () => {
    const accordion = document.querySelector('.practical-conditions-accordion');
    if (!accordion) return;

    const items = accordion.querySelectorAll('details.practical-condition-item');
    items.forEach((item) => {
      const summary = item.querySelector('summary');
      if (summary) {
        summary.addEventListener('click', () => {
          if (!item.open) {
            items.forEach((other) => {
              if (other !== item && other.open) {
                other.open = false;
              }
            });
          }
        });
      }

      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach((other) => {
            if (other !== item && other.open) {
              other.open = false;
            }
          });
        }
      });
    });
  };

  initCookiePreferencesModal();
  initTestimonialsCarousel();
  initPracticalAccordion();
});
