// ═══════════════════════════════════════════════════════════════
// EVDEKİ SES — MAIN JAVASCRIPT
// Natural browser scroll, header dynamics, journey tracker, modal FAQ system
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  
  // Header state on scroll with requestAnimationFrame for buttery performance
  let ticking = false;
  const SCROLL_THRESHOLD = 90;

  // Week & light-themed sections for theme & tracking
  const weekSections = document.querySelectorAll('.scene-journey-week');
  const lightSurfaceSections = document.querySelectorAll('.scene-journey-week, [data-slide-theme="light"]');
  const journeyTracker = document.getElementById('journeyTracker');
  const trackerLinks = document.querySelectorAll('.tracker-link');

  const handleScroll = () => {
    if (!header) return;
    const currentScrollY = window.scrollY || window.pageYOffset;
    
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
  
  handleScroll();

  // Smooth scroll for internal anchor links (excluding FAQ modal triggers)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '' || this.hasAttribute('data-open-faq')) return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
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
    'program', 'program-pratikler', 'program-c', 'program-d', 'program-ritim',
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

    if (currentSectionId && eligibleChatSectionIds.has(currentSectionId)) {
      if (!liveChatAnchor.classList.contains('is-visible')) {
        liveChatAnchor.classList.add('is-visible');
        liveChatAnchor.setAttribute('aria-hidden', 'false');
        if (liveChatBtn) liveChatBtn.setAttribute('tabindex', '0');
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
});
