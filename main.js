// ═══════════════════════════════════════════════════════════════
// EVDEKİ SES — MAIN JAVASCRIPT
// Natural browser scroll, header dynamics, journey tracker, accessible interactions
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  
  // Header state on scroll with requestAnimationFrame for buttery performance
  let ticking = false;
  const SCROLL_THRESHOLD = 90;

  // Light sections where navbar adjusts to light theme: Sections 6–12 ONLY (.scene-journey-week)
  const lightSections = document.querySelectorAll('.scene-journey-week');

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
      for (let i = 0; i < lightSections.length; i++) {
        const rect = lightSections[i].getBoundingClientRect();
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

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
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

  // Six-Week Journey Tracker (Sections 6–11)
  const journeyTracker = document.getElementById('journeyTracker');
  const weekSections = document.querySelectorAll('.scene-journey-week');
  const trackerLinks = document.querySelectorAll('.tracker-link');

  if (weekSections.length > 0 && trackerLinks.length > 0) {
    const activeWeeks = new Set();

    const weekObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const weekIndex = entry.target.getAttribute('data-week-index');
        
        if (entry.isIntersecting) {
          activeWeeks.add(id);
          // Set active tracker link
          trackerLinks.forEach(link => {
            const linkTarget = link.getAttribute('href').replace('#', '');
            const linkWeek = link.getAttribute('data-week');
            if (linkTarget === id || linkWeek === weekIndex) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
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
      rootMargin: '-25% 0px -25% 0px',
      threshold: 0.2
    });

    weekSections.forEach(section => weekObserver.observe(section));
  }

  // Exclusive FAQ Accordion Handler
  const faqDetails = document.querySelectorAll('#faq .faq-item');
  faqDetails.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        faqDetails.forEach(other => {
          if (other !== detail && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
});
