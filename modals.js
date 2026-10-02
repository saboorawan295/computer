/**
 * GS Computer - Interactive Modal Controllers
 * Manages Product Quick View, Service Booking, Quote Configurator, and Checkout Simulation.
 */

// Global helper to open Product Quick View
window.openProductModal = function(productId) {
  const product = GS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('productBackdrop');
  if (!modal || !backdrop) return;

  // Populate data
  document.getElementById('modalProdImg').src = product.image;
  document.getElementById('modalProdImg').alt = product.name;
  document.getElementById('modalProdCategory').textContent = `${product.brand} • ${product.categoryName}`;
  document.getElementById('modalProdTitle').textContent = product.name;
  
  // Rating
  const starsEl = document.getElementById('modalProdStars');
  if (starsEl && window.catalog) {
    starsEl.innerHTML = window.catalog.generateStars(product.rating);
  }
  document.getElementById('modalProdRatingScore').textContent = `${product.rating} (${product.reviewCount} customer reviews)`;
  
  // Price
  document.getElementById('modalProdPrice').textContent = `$${product.price.toLocaleString()}`;
  const origPriceEl = document.getElementById('modalProdOriginalPrice');
  if (product.originalPrice) {
    origPriceEl.textContent = `$${product.originalPrice.toLocaleString()}`;
    origPriceEl.style.display = 'inline-block';
  } else {
    origPriceEl.style.display = 'none';
  }

  const discountEl = document.getElementById('modalProdDiscount');
  if (product.discount) {
    discountEl.textContent = product.discount;
    discountEl.style.display = 'inline-block';
  } else {
    discountEl.style.display = 'none';
  }

  // Description
  document.getElementById('modalProdDesc').textContent = product.shortDesc;

  // Features list
  const featuresList = document.getElementById('modalProdFeatures');
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(f => `
      <li><i class="fa-solid fa-check text-cyan"></i> ${f}</li>
    `).join('');
  }

  // Specifications table
  const specsTable = document.getElementById('modalProdSpecs');
  if (specsTable && product.specs) {
    specsTable.innerHTML = Object.entries(product.specs).map(([label, val]) => `
      <tr>
        <td class="spec-label">${label}</td>
        <td class="spec-val">${val}</td>
      </tr>
    `).join('');
  }

  // Reset quantity input
  const qtyInput = document.getElementById('modalProdQty');
  if (qtyInput) qtyInput.value = 1;

  // Setup Add to Cart button
  const addCartBtn = document.getElementById('modalProdAddCartBtn');
  if (addCartBtn) {
    addCartBtn.onclick = function() {
      const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
      if (window.cart) {
        window.cart.addItem(product.id, qty);
        closeProductModal();
      }
    };
  }

  // Setup Buy Now button
  const buyNowBtn = document.getElementById('modalProdBuyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.onclick = function() {
      const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
      if (window.cart) {
        window.cart.addItem(product.id, qty, false);
        closeProductModal();
        window.openCheckoutModal();
      }
    };
  }

  // Open modal
  modal.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = function() {
  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('productBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Quantity stepper in modal
window.stepModalQty = function(delta) {
  const qtyInput = document.getElementById('modalProdQty');
  if (!qtyInput) return;
  let val = parseInt(qtyInput.value, 10) || 1;
  val = Math.max(1, Math.min(99, val + delta));
  qtyInput.value = val;
};

// Global helper to open Service Booking Modal
window.openBookingModal = function(preferredServiceName = '') {
  const modal = document.getElementById('bookingModal');
  const backdrop = document.getElementById('bookingBackdrop');
  if (!modal || !backdrop) return;

  const select = document.getElementById('bookingServiceSelect');
  if (select && preferredServiceName) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(preferredServiceName.toLowerCase())) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  // Set default min date to tomorrow
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const isoDate = today.toISOString().split('T')[0];
    dateInput.min = isoDate;
    if (!dateInput.value) dateInput.value = isoDate;
  }

  modal.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeBookingModal = function() {
  const modal = document.getElementById('bookingModal');
  const backdrop = document.getElementById('bookingBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Global helper for "Get a Quote" Modal
window.openQuoteModal = function() {
  const modal = document.getElementById('quoteModal');
  const backdrop = document.getElementById('quoteBackdrop');
  if (!modal || !backdrop) return;

  modal.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeQuoteModal = function() {
  const modal = document.getElementById('quoteModal');
  const backdrop = document.getElementById('quoteBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Global helper for Checkout Modal
window.openCheckoutModal = function() {
  if (!window.cart || window.cart.items.length === 0) {
    showToast('Your cart is empty!', 'warning');
    return;
  }

  const modal = document.getElementById('checkoutModal');
  const backdrop = document.getElementById('checkoutBackdrop');
  if (!modal || !backdrop) return;

  const totals = window.cart.getTotals();
  const summaryList = document.getElementById('checkoutSummaryItems');
  if (summaryList) {
    summaryList.innerHTML = window.cart.items.map(item => {
      const prod = GS_PRODUCTS.find(p => p.id === item.id);
      if (!prod) return '';
      return `
        <div class="checkout-summary-row">
          <span class="chk-item-name">${item.quantity}x ${prod.name}</span>
          <span class="chk-item-price">$${(prod.price * item.quantity).toLocaleString()}</span>
        </div>
      `;
    }).join('');
  }

  document.getElementById('chkSubtotal').textContent = `$${totals.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  document.getElementById('chkShipping').textContent = totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`;
  document.getElementById('chkTax').textContent = `$${totals.tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  document.getElementById('chkTotal').textContent = `$${totals.grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  modal.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkoutModal');
  const backdrop = document.getElementById('checkoutBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Initialize modal close events
document.addEventListener('DOMContentLoaded', () => {
  // Product modal
  const prodClose = document.getElementById('productCloseBtn');
  const prodBackdrop = document.getElementById('productBackdrop');
  if (prodClose) prodClose.addEventListener('click', closeProductModal);
  if (prodBackdrop) prodBackdrop.addEventListener('click', closeProductModal);

  // Booking modal
  const bookClose = document.getElementById('bookingCloseBtn');
  const bookBackdrop = document.getElementById('bookingBackdrop');
  if (bookClose) bookClose.addEventListener('click', closeBookingModal);
  if (bookBackdrop) bookBackdrop.addEventListener('click', closeBookingModal);

  // Quote modal
  const quoteClose = document.getElementById('quoteCloseBtn');
  const quoteBackdrop = document.getElementById('quoteBackdrop');
  if (quoteClose) quoteClose.addEventListener('click', closeQuoteModal);
  if (quoteBackdrop) quoteBackdrop.addEventListener('click', closeQuoteModal);

  // Checkout modal
  const chkClose = document.getElementById('checkoutCloseBtn');
  const chkBackdrop = document.getElementById('checkoutBackdrop');
  if (chkClose) chkClose.addEventListener('click', closeCheckoutModal);
  if (chkBackdrop) chkBackdrop.addEventListener('click', closeCheckoutModal);

  // Hook up Service Booking Form
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const serviceName = document.getElementById('bookingServiceSelect').value;
      const clientName = document.getElementById('bookingName').value;
      const clientPhone = document.getElementById('bookingPhone').value;
      const clientDate = document.getElementById('bookingDate').value;
      const clientTime = document.getElementById('bookingTimeSlot').value;

      if (!clientName || !clientPhone || !clientDate) {
        showToast('Please fill out all required fields', 'warning');
        return;
      }

      const refId = 'GS-SRV-' + Math.floor(10000 + Math.random() * 90000);
      closeBookingModal();
      bookingForm.reset();

      // Show confirmed alert dialog or fancy toast
      showToast(`Appointment Confirmed! Ref: ${refId}. We'll call ${clientPhone} shortly.`, 'success', 7000);
    });
  }

  // Hook up Quote Form
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quoteName').value;
      const email = document.getElementById('quoteEmail').value;
      const projectType = document.getElementById('quoteProjectType').value;

      if (!name || !email) {
        showToast('Please provide your name and email', 'warning');
        return;
      }

      const quoteId = 'GS-QT-' + Math.floor(1000 + Math.random() * 9000);
      closeQuoteModal();
      quoteForm.reset();

      showToast(`Quote Request Submitted! Ref: ${quoteId}. Our engineers will email you in 2 hours.`, 'success', 7000);
    });
  }

  // Hook up Checkout Form
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('chkCustomerName').value;
      const email = document.getElementById('chkCustomerEmail').value;
      const address = document.getElementById('chkAddress').value;

      if (!name || !email || !address) {
        showToast('Please fill all required billing details', 'warning');
        return;
      }

      const orderId = 'GS-ORD-' + Math.floor(100000 + Math.random() * 900000);
      if (window.cart) {
        window.cart.clearCart();
      }
      closeCheckoutModal();
      checkoutForm.reset();

      // Show celebratory confirmation
      const confirmationModal = document.getElementById('orderConfirmationModal');
      const orderIdSpan = document.getElementById('confirmedOrderId');
      if (confirmationModal && orderIdSpan) {
        orderIdSpan.textContent = orderId;
        confirmationModal.classList.add('active');
        document.getElementById('confirmationBackdrop').classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        showToast(`Order #${orderId} Placed Successfully! Confirmation sent to ${email}`, 'success', 8000);
      }
    });
  }

  // Order confirmation close
  const confClose = document.getElementById('orderConfCloseBtn');
  const confBackdrop = document.getElementById('confirmationBackdrop');
  if (confClose) {
    confClose.addEventListener('click', () => {
      document.getElementById('orderConfirmationModal').classList.remove('active');
      confBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  if (confBackdrop) {
    confBackdrop.addEventListener('click', () => {
      document.getElementById('orderConfirmationModal').classList.remove('active');
      confBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});

