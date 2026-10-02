/**
 * GS Computer - Interactive Shopping Cart System
 * Manages cart state in localStorage, calculates totals, handles promo codes,
 * and powers the slide-out cart drawer and checkout simulator.
 */

class CartManager {
  constructor() {
    this.storageKey = 'gs_computer_cart_v1';
    this.promoKey = 'gs_computer_promo_v1';
    this.freeShippingThreshold = 100;
    this.taxRate = 0.06; // 6% sales tax
    this.flatShippingRate = 15;
    this.promoCode = localStorage.getItem(this.promoKey) || null;
    this.items = this.loadCart();
    
    this.initElements();
    this.bindEvents();
    this.render();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load cart from storage", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
      if (this.promoCode) {
        localStorage.setItem(this.promoKey, this.promoCode);
      } else {
        localStorage.removeItem(this.promoKey);
      }
    } catch (e) {
      console.error("Failed to save cart to storage", e);
    }
  }

  initElements() {
    this.cartDrawer = document.getElementById('cartDrawer');
    this.cartBackdrop = document.getElementById('cartBackdrop');
    this.cartCloseBtn = document.getElementById('cartCloseBtn');
    this.cartOpenBtns = document.querySelectorAll('.js-open-cart');
    this.cartBadge = document.getElementById('cartBadge');
    this.cartItemsList = document.getElementById('cartItemsList');
    this.cartEmptyState = document.getElementById('cartEmptyState');
    this.cartContentArea = document.getElementById('cartContentArea');
    
    // Summary elements
    this.subtotalEl = document.getElementById('cartSubtotal');
    this.taxEl = document.getElementById('cartTax');
    this.shippingEl = document.getElementById('cartShipping');
    this.discountRow = document.getElementById('cartDiscountRow');
    this.discountEl = document.getElementById('cartDiscount');
    this.totalEl = document.getElementById('cartTotal');
    this.freeShippingMeter = document.getElementById('freeShippingMeter');
    this.freeShippingText = document.getElementById('freeShippingText');
    
    // Promo form
    this.promoInput = document.getElementById('cartPromoInput');
    this.promoBtn = document.getElementById('cartPromoBtn');
    this.promoMessage = document.getElementById('cartPromoMessage');
    
    // Checkout trigger
    this.checkoutBtn = document.getElementById('cartCheckoutBtn');
  }

  bindEvents() {
    // Open cart drawer
    this.cartOpenBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openCart();
      });
    });

    // Close cart drawer
    if (this.cartCloseBtn) {
      this.cartCloseBtn.addEventListener('click', () => this.closeCart());
    }
    if (this.cartBackdrop) {
      this.cartBackdrop.addEventListener('click', () => this.closeCart());
    }

    // Escape key closes cart
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.closeCart();
      }
    });

    // Promo code apply
    if (this.promoBtn && this.promoInput) {
      this.promoBtn.addEventListener('click', () => this.applyPromoCode());
      this.promoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.applyPromoCode();
        }
      });
    }

    // Checkout button
    if (this.checkoutBtn) {
      this.checkoutBtn.addEventListener('click', () => {
        if (this.items.length === 0) {
          showToast('Your cart is empty. Add products to proceed.', 'warning');
          return;
        }
        this.closeCart();
        window.openCheckoutModal();
      });
    }
  }

  isOpen() {
    return this.cartDrawer && this.cartDrawer.classList.contains('active');
  }

  openCart() {
    if (this.cartDrawer && this.cartBackdrop) {
      this.cartDrawer.classList.add('active');
      this.cartBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.render();
    }
  }

  closeCart() {
    if (this.cartDrawer && this.cartBackdrop) {
      this.cartDrawer.classList.remove('active');
      this.cartBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  addItem(productId, quantity = 1, showFeedback = true) {
    const product = GS_PRODUCTS.find(p => p.id === productId);
    if (!product) {
      console.warn("Product not found:", productId);
      return;
    }

    const existingIndex = this.items.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        id: productId,
        quantity: quantity
      });
    }

    this.saveCart();
    this.render();

    if (showFeedback) {
      showToast(`Added "${product.name}" to cart!`, 'success');
      this.animateBadge();
    }
  }

  updateQuantity(productId, newQty) {
    if (newQty <= 0) {
      this.removeItem(productId);
      return;
    }

    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.quantity = newQty;
      this.saveCart();
      this.render();
    }
  }

  removeItem(productId) {
    const product = GS_PRODUCTS.find(p => p.id === productId);
    this.items = this.items.filter(i => i.id !== productId);
    this.saveCart();
    this.render();

    if (product) {
      showToast(`Removed "${product.name}" from cart`, 'info');
    }
  }

  clearCart() {
    this.items = [];
    this.promoCode = null;
    this.saveCart();
    this.render();
  }

  animateBadge() {
    if (this.cartBadge) {
      this.cartBadge.classList.add('badge-bounce');
      setTimeout(() => this.cartBadge.classList.remove('badge-bounce'), 600);
    }
  }

  applyPromoCode() {
    const code = (this.promoInput.value || '').trim().toUpperCase();
    if (!code) return;

    if (code === 'GSPOWER10') {
      this.promoCode = 'GSPOWER10';
      this.promoMessage.innerHTML = `<span class="promo-success"><i class="fa-solid fa-check-circle"></i> "GSPOWER10" applied! 10% discount added.</span>`;
      showToast('10% Discount promo code applied!', 'success');
    } else if (code === 'FREESHIP') {
      this.promoCode = 'FREESHIP';
      this.promoMessage.innerHTML = `<span class="promo-success"><i class="fa-solid fa-check-circle"></i> "FREESHIP" applied! Free shipping unlocked.</span>`;
      showToast('Free Shipping promo applied!', 'success');
    } else {
      this.promoMessage.innerHTML = `<span class="promo-error"><i class="fa-solid fa-circle-exclamation"></i> Invalid code. Try <strong>GSPOWER10</strong> or <strong>FREESHIP</strong></span>`;
      showToast('Invalid promo code. Check spelling.', 'warning');
      return;
    }

    this.saveCart();
    this.render();
  }

  getTotals() {
    let subtotal = 0;
    let itemCount = 0;

    this.items.forEach(item => {
      const prod = GS_PRODUCTS.find(p => p.id === item.id);
      if (prod) {
        subtotal += prod.price * item.quantity;
        itemCount += item.quantity;
      }
    });

    let discount = 0;
    if (this.promoCode === 'GSPOWER10') {
      discount = subtotal * 0.10;
    }

    let shipping = 0;
    if (subtotal === 0) {
      shipping = 0;
    } else if (this.promoCode === 'FREESHIP' || subtotal >= this.freeShippingThreshold) {
      shipping = 0;
    } else {
      shipping = this.flatShippingRate;
    }

    const taxableAmount = Math.max(0, subtotal - discount);
    const tax = taxableAmount * this.taxRate;
    const grandTotal = taxableAmount + tax + shipping;

    return {
      subtotal,
      discount,
      shipping,
      tax,
      grandTotal,
      itemCount
    };
  }

  render() {
    const totals = this.getTotals();

    // Update cart badge counts
    const badges = document.querySelectorAll('.js-cart-count');
    badges.forEach(b => {
      b.textContent = totals.itemCount;
      if (totals.itemCount > 0) {
        b.style.display = 'inline-flex';
      } else {
        b.style.display = 'none';
      }
    });

    // Check empty state
    if (this.items.length === 0) {
      if (this.cartEmptyState) this.cartEmptyState.style.display = 'flex';
      if (this.cartContentArea) this.cartContentArea.style.display = 'none';
      return;
    }

    if (this.cartEmptyState) this.cartEmptyState.style.display = 'none';
    if (this.cartContentArea) this.cartContentArea.style.display = 'flex';

    // Render items list
    if (this.cartItemsList) {
      this.cartItemsList.innerHTML = this.items.map(item => {
        const prod = GS_PRODUCTS.find(p => p.id === item.id);
        if (!prod) return '';

        const itemTotal = (prod.price * item.quantity).toLocaleString();

        return `
          <div class="cart-item" data-id="${prod.id}">
            <div class="cart-item-img-wrap">
              <img src="${prod.image}" alt="${prod.name}" class="cart-item-img" loading="lazy" />
            </div>
            <div class="cart-item-details">
              <div class="cart-item-header">
                <span class="cart-item-brand">${prod.brand}</span>
                <button class="cart-item-remove-btn" onclick="window.cart.removeItem('${prod.id}')" title="Remove item" aria-label="Remove item">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
              <h4 class="cart-item-title">${prod.name}</h4>
              <div class="cart-item-meta">
                <span class="cart-item-unit-price">$${prod.price.toLocaleString()} each</span>
              </div>
              <div class="cart-item-footer">
                <div class="qty-stepper">
                  <button type="button" class="qty-btn minus" onclick="window.cart.updateQuantity('${prod.id}', ${item.quantity - 1})" aria-label="Decrease quantity">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <span class="qty-value">${item.quantity}</span>
                  <button type="button" class="qty-btn plus" onclick="window.cart.updateQuantity('${prod.id}', ${item.quantity + 1})" aria-label="Increase quantity">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="cart-item-price">$${itemTotal}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Free shipping calculation
    if (this.freeShippingMeter && this.freeShippingText) {
      if (totals.subtotal >= this.freeShippingThreshold || this.promoCode === 'FREESHIP') {
        this.freeShippingMeter.style.width = '100%';
        this.freeShippingMeter.style.backgroundColor = '#10B981';
        this.freeShippingText.innerHTML = `<i class="fa-solid fa-circle-check text-emerald"></i> You qualified for <strong>FREE Express Shipping</strong>!`;
      } else {
        const remaining = (this.freeShippingThreshold - totals.subtotal).toFixed(2);
        const percent = Math.min(100, Math.round((totals.subtotal / this.freeShippingThreshold) * 100));
        this.freeShippingMeter.style.width = `${percent}%`;
        this.freeShippingMeter.style.backgroundColor = 'var(--accent-blue)';
        this.freeShippingText.innerHTML = `Add <strong>$${remaining}</strong> more for <strong>FREE Express Shipping</strong>`;
      }
    }

    // Render totals
    if (this.subtotalEl) this.subtotalEl.textContent = `$${totals.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (this.taxEl) this.taxEl.textContent = `$${totals.tax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    if (this.shippingEl) {
      this.shippingEl.textContent = totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`;
      if (totals.shipping === 0) {
        this.shippingEl.classList.add('text-emerald');
      } else {
        this.shippingEl.classList.remove('text-emerald');
      }
    }

    if (this.discountRow && this.discountEl) {
      if (totals.discount > 0) {
        this.discountRow.style.display = 'flex';
        this.discountEl.textContent = `-$${totals.discount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      } else {
        this.discountRow.style.display = 'none';
      }
    }

    if (this.totalEl) {
      this.totalEl.textContent = `$${totals.grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  }
}

