/**
 * GS Computer - Search, Filter & Catalog Manager
 * Handles global live search modal, category filtering tabs, and product sorting.
 */

class CatalogManager {
  constructor() {
    this.currentCategory = 'all';
    this.currentSort = 'featured';
    this.searchQuery = '';
    
    this.initElements();
    this.bindEvents();
    this.renderProducts();
    this.renderCategoryCards();
  }

  initElements() {
    this.productsGrid = document.getElementById('productsGrid');
    this.productCountEl = document.getElementById('productsCount');
    this.categoryTabs = document.querySelectorAll('.cat-tab-btn');
    this.sortSelect = document.getElementById('productsSortSelect');
    this.catalogSearchInput = document.getElementById('catalogSearchInput');
    this.categoriesGrid = document.getElementById('categoriesGrid');

    // Global Search Modal Elements
    this.searchModal = document.getElementById('searchModal');
    this.searchBackdrop = document.getElementById('searchBackdrop');
    this.searchCloseBtn = document.getElementById('searchCloseBtn');
    this.searchInput = document.getElementById('globalSearchInput');
    this.searchResultsContainer = document.getElementById('globalSearchResults');
    this.searchTags = document.querySelectorAll('.search-tag-chip');
    this.searchOpenBtns = document.querySelectorAll('.js-open-search');
  }

  bindEvents() {
    // Category Tabs click
    this.categoryTabs.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.categoryTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category || 'all';
        this.renderProducts();
      });
    });

    // Sort select change
    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        this.renderProducts();
      });
    }

    // In-catalog live search input
    if (this.catalogSearchInput) {
      this.catalogSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProducts();
      });
    }

    // Global Search Modal Trigger
    this.searchOpenBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSearchModal();
      });
    });

    // Keyboard shortcut: Ctrl+K or Cmd+K
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
      if (e.key === 'Escape' && this.isSearchModalOpen()) {
        this.closeSearchModal();
      }
    });

    // Close Search modal
    if (this.searchCloseBtn) {
      this.searchCloseBtn.addEventListener('click', () => this.closeSearchModal());
    }
    if (this.searchBackdrop) {
      this.searchBackdrop.addEventListener('click', () => this.closeSearchModal());
    }

    // Live global search typing
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.handleGlobalSearch(e.target.value);
      });
    }

    // Search quick tags
    this.searchTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const query = tag.dataset.query || tag.textContent.trim();
        if (this.searchInput) {
          this.searchInput.value = query;
          this.handleGlobalSearch(query);
        }
      });
    });
  }

  isSearchModalOpen() {
    return this.searchModal && this.searchModal.classList.contains('active');
  }

  openSearchModal() {
    if (this.searchModal && this.searchBackdrop) {
      this.searchModal.classList.add('active');
      this.searchBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.focus();
          this.handleGlobalSearch(this.searchInput.value || '');
        }
      }, 50);
    }
  }

  closeSearchModal() {
    if (this.searchModal && this.searchBackdrop) {
      this.searchModal.classList.remove('active');
      this.searchBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  handleGlobalSearch(query) {
    const q = query.toLowerCase().trim();
    if (!this.searchResultsContainer) return;

    if (!q) {
      // Show popular picks when empty
      const popularProducts = GS_PRODUCTS.slice(0, 4);
      this.searchResultsContainer.innerHTML = `
        <div class="search-section-label">Popular Hardware & Systems</div>
        <div class="search-results-list">
          ${popularProducts.map(p => this.createSearchResultItem(p)).join('')}
        </div>
      `;
      return;
    }

    const matchedProducts = GS_PRODUCTS.filter(p => {
      const specsStr = p.specs ? Object.values(p.specs).join(' ') : '';
      const featuresStr = p.features ? p.features.join(' ') : '';
      const haystack = `${p.name} ${p.brand} ${p.categoryName} ${p.shortDesc} ${featuresStr} ${specsStr}`.toLowerCase();
      return haystack.includes(q);
    });

    const matchedServices = GS_SERVICES.filter(s => {
      return s.title.toLowerCase().includes(q) ||
             s.desc.toLowerCase().includes(q) ||
             s.subtitle.toLowerCase().includes(q);
    });

    if (matchedProducts.length === 0 && matchedServices.length === 0) {
      this.searchResultsContainer.innerHTML = `
        <div class="search-empty-state">
          <i class="fa-solid fa-magnifying-glass search-empty-icon"></i>
          <h4>No results found for "${query}"</h4>
          <p>Try searching for keywords like "Gaming", "Laptop", "Core i7", "Monitor", or "Repair".</p>
        </div>
      `;
      return;
    }

    let html = '';

    if (matchedProducts.length > 0) {
      html += `
        <div class="search-section-label">Products (${matchedProducts.length})</div>
        <div class="search-results-list">
          ${matchedProducts.map(p => this.createSearchResultItem(p)).join('')}
        </div>
      `;
    }

    if (matchedServices.length > 0) {
      html += `
        <div class="search-section-label mt-4">IT Services (${matchedServices.length})</div>
        <div class="search-results-list">
          ${matchedServices.map(s => `
            <div class="search-result-service-item" onclick="window.catalog.selectServiceFromSearch('${s.id}')">
              <div class="service-search-icon">
                <i class="${s.icon}"></i>
              </div>
              <div class="service-search-info">
                <h5>${s.title}</h5>
                <p>${s.subtitle}</p>
              </div>
              <div class="service-search-cta">
                <span class="service-starting-tag">From ${s.startingPrice}</span>
                <span class="btn-text-blue">Book Service <i class="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    this.searchResultsContainer.innerHTML = html;
  }

  createSearchResultItem(product) {
    return `
      <div class="search-result-item" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" class="search-result-img" loading="lazy" />
        <div class="search-result-info">
          <span class="search-result-cat">${product.categoryName} • ${product.brand}</span>
          <h5 class="search-result-title">${product.name}</h5>
          <div class="search-result-pricing">
            <span class="search-result-price">$${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="search-result-old-price">$${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>
        </div>
        <div class="search-result-actions">
          <button class="btn btn-sm btn-outline-cyan" onclick="window.catalog.viewProductFromSearch('${product.id}')">
            View
          </button>
          <button class="btn btn-sm btn-primary" onclick="window.catalog.addProductFromSearch('${product.id}')">
            <i class="fa-solid fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    `;
  }

  viewProductFromSearch(id) {
    this.closeSearchModal();
    if (window.openProductModal) {
      window.openProductModal(id);
    }
  }

  addProductFromSearch(id) {
    if (window.cart) {
      window.cart.addItem(id, 1);
    }
  }

  selectServiceFromSearch(id) {
    this.closeSearchModal();
    const service = GS_SERVICES.find(s => s.id === id);
    if (service && window.openBookingModal) {
      window.openBookingModal(service.title);
    }
  }

  filterByCategory(categoryId) {
    this.currentCategory = categoryId;
    
    // Update tabs
    this.categoryTabs.forEach(tab => {
      if (tab.dataset.category === categoryId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    this.renderProducts();

    // Scroll to products section smoothly
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const navHeight = document.querySelector('.header-main')?.offsetHeight || 80;
      const targetPos = productsSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  }

  renderCategoryCards() {
    if (!this.categoriesGrid) return;

    this.categoriesGrid.innerHTML = GS_CATEGORIES.map(cat => `
      <div class="category-card" onclick="window.catalog.filterByCategory('${cat.id}')" tabindex="0" role="button" aria-label="Browse ${cat.name}">
        <div class="cat-card-bg-img" style="background-image: url('${cat.image}');"></div>
        <div class="cat-card-overlay"></div>
        <div class="cat-card-content">
          <div class="cat-card-icon-wrap">
            <i class="${cat.icon}"></i>
          </div>
          <span class="cat-card-count">${cat.count}</span>
          <h3 class="cat-card-title">${cat.name}</h3>
          <p class="cat-card-tagline">${cat.tagline}</p>
          <span class="cat-card-link">
            Explore Category <i class="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    `).join('');
  }

  renderProducts() {
    if (!this.productsGrid) return;

    let filtered = [...GS_PRODUCTS];

    // Filter by Category
    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.currentCategory);
    }

    // Filter by In-catalog search query
    if (this.searchQuery) {
      filtered = filtered.filter(p => {
        const specsStr = p.specs ? Object.values(p.specs).join(' ') : '';
        const featuresStr = p.features ? p.features.join(' ') : '';
        const haystack = `${p.name} ${p.brand} ${p.categoryName} ${p.shortDesc} ${featuresStr} ${specsStr}`.toLowerCase();
        return haystack.includes(this.searchQuery);
      });
    }

    // Sort
    if (this.currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Update product counter
    if (this.productCountEl) {
      this.productCountEl.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
    }

    // Check empty state
    if (filtered.length === 0) {
      this.productsGrid.innerHTML = `
        <div class="products-empty-state">
          <div class="empty-icon"><i class="fa-solid fa-laptop-file"></i></div>
          <h3>No matching tech found</h3>
          <p>We couldn't find any products matching your current filters.</p>
          <button class="btn btn-secondary" onclick="window.catalog.resetFilters()">
            <i class="fa-solid fa-rotate-left"></i> Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    // Render cards
    this.productsGrid.innerHTML = filtered.map(product => {
      const stars = this.generateStars(product.rating);
      const badgeHtml = product.badge ? `
        <span class="prod-badge badge-${product.badgeType || 'default'}">
          ${product.badge}
        </span>
      ` : '';

      return `
        <div class="product-card" data-id="${product.id}">
          <div class="product-card-head">
            ${badgeHtml}
            ${product.discount ? `<span class="prod-discount-pill">${product.discount}</span>` : ''}
            <button class="prod-wishlist-btn" onclick="window.toggleWishlist('${product.id}', this)" title="Add to wishlist" aria-label="Save to wishlist">
              <i class="fa-regular fa-heart"></i>
            </button>
            <div class="prod-image-wrapper" onclick="window.openProductModal('${product.id}')">
              <img src="${product.image}" alt="${product.name}" class="product-thumb" loading="lazy" />
            </div>
          </div>

          <div class="product-card-body">
            <div class="prod-meta-strip">
              <span class="prod-category-tag">${product.categoryName}</span>
              <span class="prod-stock-indicator in-stock">
                <span class="stock-dot"></span> In Stock
              </span>
            </div>

            <h3 class="product-title" onclick="window.openProductModal('${product.id}')" title="${product.name}">
              ${product.name}
            </h3>

            <p class="product-desc-snippet">${product.shortDesc}</p>

            <div class="product-rating-row">
              <div class="rating-stars">${stars}</div>
              <span class="rating-score">${product.rating}</span>
              <span class="rating-reviews">(${product.reviewCount})</span>
            </div>

            <div class="product-price-row">
              <div class="price-box">
                <span class="current-price">$${product.price.toLocaleString()}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toLocaleString()}</span>` : ''}
              </div>
            </div>
          </div>

          <div class="product-card-footer">
            <button type="button" class="btn btn-view-details" onclick="window.openProductModal('${product.id}')">
              <i class="fa-regular fa-eye"></i> View Details
            </button>
            <button type="button" class="btn btn-add-cart" onclick="window.cart.addItem('${product.id}', 1)" aria-label="Add ${product.name} to cart">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
    return starsHtml;
  }

  resetFilters() {
    this.currentCategory = 'all';
    this.currentSort = 'featured';
    this.searchQuery = '';
    if (this.catalogSearchInput) this.catalogSearchInput.value = '';
    if (this.sortSelect) this.sortSelect.value = 'featured';
    this.categoryTabs.forEach(b => {
      if (b.dataset.category === 'all') b.classList.add('active');
      else b.classList.remove('active');
    });
    this.renderProducts();
  }
}
