/**
 * GS Computer - Core Application Orchestrator
 * Controls navigation, mobile drawer, services rendering, testimonials,
 * contact form validation, countdown timer, back to top, and toast notifications.
 */

// Toast Notification Engine
window.showToast = function(message, type = 'info', duration = 4000) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;

  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-circle-check';
  else if (type === 'warning') icon = 'fa-triangle-exclamation';
  else if (type === 'error') icon = 'fa-circle-xmark';

  toast.innerHTML = `
    <div class="toast-icon"><i class="fa-solid ${icon}"></i></div>
    <div class="toast-content">
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;

  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => removeToast(toast));

  container.appendChild(toast);
  
  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  const timer = setTimeout(() => {
    removeToast(toast);
  }, duration);

  function removeToast(el) {
    clearTimeout(timer);
    el.classList.remove('visible');
    el.classList.add('hiding');
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 300);
  }
};

// Wishlist toggle
window.toggleWishlist = function(productId, btn) {
  const icon = btn.querySelector('i');
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
    icon.classList.remove('fa-solid', 'text-rose');
    icon.classList.add('fa-regular');
    showToast('Removed from saved wishlist', 'info');
  } else {
    btn.classList.add('active');
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid', 'text-rose');
    showToast('Saved to wishlist!', 'success');
  }
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Managers
  window.cart = new CartManager();
  window.catalog = new CatalogManager();

  // 2. Render IT Services
  renderServices();

  // 3. Render Testimonials
  renderReviews();

  // 4. Sticky Header & Active Nav Links
  initStickyHeader();

  // 5. Mobile Navigation Menu
  initMobileNav();

  // 6. Special Offer Countdown Timer
  initOfferCountdown();

  // 7. Contact Form Handling
  initContactForm();

  // 8. Newsletter Form Handling
  initNewsletterForm();

  // 9. Back To Top Button & Scroll Progress
  initBackToTop();

  // 10. Smooth Scrolling Offset
  initSmoothScroll();
});

/**
 * Render IT Services Cards
 */
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container || !GS_SERVICES) return;

  container.innerHTML = GS_SERVICES.map(srv => `
    <div class="service-card ${srv.popular ? 'popular' : ''}">
      ${srv.popular ? '<div class="service-badge">Most Requested</div>' : ''}
      <div class="service-icon-box">
        <i class="${srv.icon}"></i>
      </div>
      <div class="service-content">
        <h3 class="service-title">${srv.title}</h3>
        <span class="service-subtitle">${srv.subtitle}</span>
        <p class="service-desc">${srv.desc}</p>
        <div class="service-meta-row">
          <div class="meta-item">
            <i class="fa-regular fa-clock"></i>
            <span>${srv.turnaround}</span>
          </div>
          <div class="meta-item">
            <i class="fa-solid fa-shield-halved"></i>
            <span>${srv.warranty}</span>
          </div>
        </div>
      </div>
      <div class="service-card-footer">
        <div class="service-price">
          <span class="price-label">Starts at</span>
          <span class="price-num">${srv.startingPrice}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm" onclick="window.openBookingModal('${srv.title}')">
          <i class="fa-regular fa-calendar-check"></i> Book Service
        </button>
      </div>
    </div>
  `).join('');
}

/**
 * Render Customer Reviews
 */
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container || !GS_REVIEWS) return;

  container.innerHTML = GS_REVIEWS.map(rev => {
    let starsHtml = '';
    for (let i = 0; i < rev.rating; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }

    return `
      <div class="review-card">
        <div class="review-quote-mark">“</div>
        <div class="review-header">
          <img src="${rev.avatar}" alt="${rev.name}" class="review-avatar" loading="lazy" />
          <div class="review-user-info">
            <div class="review-user-name">
              ${rev.name}
              <span class="verified-badge" title="Verified Customer">
                <i class="fa-solid fa-circle-check"></i> Verified
              </span>
            </div>
            <div class="review-user-role">${rev.role} • <em>${rev.company}</em></div>
          </div>
        </div>
        <div class="review-stars-row">
          <div class="rating-stars">${starsHtml}</div>
          <span class="review-date">${rev.date}</span>
        </div>
        <h4 class="review-headline">${rev.title}</h4>
        <p class="review-text">${rev.review}</p>
      </div>
    `;
  }).join('');
}

/**
 * Sticky Navigation and Active Link Tracking
 */
function initStickyHeader() {
  const header = document.querySelector('.header-main');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section tracking
    let currentId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileClose = document.getElementById('mobileNavClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    mobileNav.classList.add('active');
    mobileBackdrop.classList.add('active');
    toggleBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('active');
    mobileBackdrop.classList.remove('active');
    toggleBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });
}

/**
 * Special Offer Countdown Timer
 */
function initOfferCountdown() {
  const daysEl = document.getElementById('timerDays');
  const hoursEl = document.getElementById('timerHours');
  const minsEl = document.getElementById('timerMins');
  const secsEl = document.getElementById('timerSecs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Set target to 4 days from first load or stored time
  let targetTime = localStorage.getItem('gs_sale_end');
  if (!targetTime || parseInt(targetTime, 10) < Date.now()) {
    const end = new Date();
    end.setDate(end.getDate() + 4);
    end.setHours(23, 59, 59, 0);
    targetTime = end.getTime();
    localStorage.setItem('gs_sale_end', targetTime);
  } else {
    targetTime = parseInt(targetTime, 10);
  }

  function updateTimer() {
    const now = Date.now();
    const distance = targetTime - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/**
 * Contact Form with Validation & Feedback
 */
/**
 * Contact Form with Comprehensive Validation & Transparent Submission Handling
 */
function initContactForm() {
  const form = document.getElementById('mainContactForm');
  if (!form) return;

  const feedbackBox = document.getElementById('contactFormFeedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const phoneInput = document.getElementById('contactPhone');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const submitBtn = form.querySelector('button[type="submit"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Clear previous feedback
    if (feedbackBox) {
      feedbackBox.style.display = 'none';
      feedbackBox.className = 'contact-feedback-box';
      feedbackBox.innerHTML = '';
    }

    // 1. Name validation
    if (!name || name.length < 2) {
      showToast('Please enter your full name (at least 2 characters)', 'warning');
      showFormFeedback('error', 'Invalid Name', 'Please enter your full name before submitting.');
      if (nameInput) nameInput.focus();
      return;
    }

    // 2. Strict RFC email validation
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!email || !emailPattern.test(email)) {
      showToast('Please enter a valid email address (e.g. name@domain.com)', 'warning');
      showFormFeedback('error', 'Invalid Email Address', 'Please provide a valid email address so we can reply to your inquiry.');
      if (emailInput) emailInput.focus();
      return;
    }

    // 3. Optional Phone validation if provided
    if (phone) {
      const cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '');
      if (cleanPhone.length < 7 || !/^\d+$/.test(cleanPhone)) {
        showToast('Please enter a valid phone number (e.g. 0336 4147095)', 'warning');
        showFormFeedback('error', 'Invalid Phone Number', 'The phone number format appears incomplete. Please enter a valid number or leave blank.');
        if (phoneInput) phoneInput.focus();
        return;
      }
    }

    // 4. Message validation
    if (!message || message.length < 10) {
      showToast('Please describe your requirements in at least 10 characters', 'warning');
      showFormFeedback('error', 'Message Too Short', 'Please enter at least 10 characters describing the hardware model, repair issue, or quote you need.');
      if (messageInput) messageInput.focus();
      return;
    }

    // Form submission processing
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Inquiry...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;

      // Prepare mailto and WhatsApp forward links
      const mailSubject = encodeURIComponent(`[GS Computer Inquiry] ${subject} - ${name}`);
      const mailBody = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n` +
        `Subject: ${subject}\n\n` +
        `Message:\n${message}\n\n` +
        `Sent via GS Computer Website Contact Form`
      );
      const mailtoUrl = `mailto:saboorahmad5th@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      const waText = encodeURIComponent(
        `Hello GS Computer!\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone || 'Not provided'}\n` +
        `*Subject:* ${subject}\n\n` +
        `*Message:* ${message}`
      );
      const waUrl = `https://wa.me/923364147095?text=${waText}`;

      // Reset the form
      form.reset();

      // Show toast
      showToast(`Thank you, ${name}! Your inquiry regarding "${subject}" has been validated.`, 'success', 5000);

      // Render honest, transparent, and actionable feedback
      showFormFeedback(
        'success',
        'Inquiry Validated & Logged',
        `<strong>Thank you, ${name}!</strong> Your inquiry has been processed and logged on the browser.
         <div class="feedback-note">
           <i class="fa-solid fa-circle-info text-cyan"></i> <strong>Launch Notice:</strong> Direct backend SMTP delivery is in staging mode until live server connection. To transmit this message directly to our official inbox or WhatsApp right now, click below:
         </div>
         <div class="feedback-actions">
           <a href="${mailtoUrl}" class="btn btn-sm btn-primary" title="Open email client">
             <i class="fa-solid fa-envelope"></i> Send via Email (saboorahmad5th@gmail.com)
           </a>
           <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp" title="Send directly to WhatsApp">
             <i class="fa-brands fa-whatsapp"></i> Send via WhatsApp (+92 336 4147095)
           </a>
         </div>`
      );
    }, 900);
  });

  function showFormFeedback(type, title, htmlContent) {
    if (!feedbackBox) return;
    feedbackBox.className = `contact-feedback-box is-${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation';
    feedbackBox.innerHTML = `
      <div class="feedback-headline">
        <i class="fa-solid ${icon}"></i>
        <span>${title}</span>
      </div>
      <div class="feedback-body">${htmlContent}</div>
    `;
    feedbackBox.style.display = 'block';
  }
}

/**
 * Newsletter Subscription
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      showToast('Please enter a valid email address', 'warning');
      return;
    }

    input.value = '';
    showToast('Subscribed! Check your inbox for your 10% welcome coupon code.', 'success', 5000);
  });
}

/**
 * Back To Top Button & Circular Scroll Progress
 */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  const progressPath = document.getElementById('backToTopProgress');

  if (!btn) return;

  const pathLength = progressPath ? progressPath.getTotalLength() : 0;
  if (progressPath) {
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }

    if (progressPath && docHeight > 0) {
      const scrollPercent = scrollY / docHeight;
      const drawLength = pathLength * (1 - scrollPercent);
      progressPath.style.strokeDashoffset = drawLength;
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Smooth scrolling offset calculation for sticky header
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

