# GS Computer - Modern Business Website & Launch Guide

A premium, modern, responsive business website for **GS Computer**, specializing in high-performance computers, laptops, accessories, and professional IT services.

---

## 📌 Official Business Identity & Contact Information

| Detail | Official Value | Description / Format |
|---|---|---|
| **Business Name** | **GS Computer** | Computers, Laptops, Accessories & IT Solutions |
| **Phone** | **`0336 4147095`** | Direct calling link: `tel:03364147095` |
| **WhatsApp** | **`+92 336 4147095`** | International chat link: `https://wa.me/923364147095` |
| **Official Email** | **`saboorahmad5th@gmail.com`** | Direct email link: `mailto:saboorahmad5th@gmail.com` |
| **Address** | **Muhallah Masjid Tajdin, Mughalpura, Lahore, Pakistan** | Physical showroom & certified repair center |
| **Store Hours** | **Monday – Saturday: 9:00 AM – 8:00 PM** | Emergency consultation available on WhatsApp |

---

## 🌟 Key Features & Architecture

### 1. Modern Technology Design System
- **Color Scheme:** Midnight obsidian slate (`#0A0E17`, `#0F172A`), electric cyber blue (`#2563EB`, `#3B82F6`), vivid cyan (`#00D2FF`), neon emerald (`#10B981`), and crisp white typography.
- **Typography:** Google Fonts *Plus Jakarta Sans* for clean geometric layout & *JetBrains Mono* for hardware specs and pricing.
- **Micro-Interactions:** Subtle card elevations, animated glowing borders, floating hardware specification badges, and spring-eased transitions.

### 2. Website Structure & Sections
1. **Top Announcement Bar:**
   - Official business phone: `0336 4147095`
   - WhatsApp quick chat badge: `+92 336 4147095`
   - Official email: `saboorahmad5th@gmail.com`
   - Showroom location: *Muhallah Masjid Tajdin, Mughalpura, Lahore*
   - Store hours: *Mon - Sat: 9:00 AM - 8:00 PM*
2. **Sticky Header & Navigation:**
   - Brand logo with microchip icon and tagline *"Power Your Digital World"*
   - Full navigation links: Home, About Us, Products, Services, Categories, Contact
   - Live search trigger (`Ctrl+K`)
   - Interactive shopping cart with dynamic counter badge
   - "Get a Quote" modal trigger
   - Responsive mobile drawer with direct Call, WhatsApp, and Email buttons
3. **Hero Section:**
   - Heading: *"Power Your Digital World with GS Computer"*
   - Subheading: *"Premium computers, laptops, accessories and reliable IT solutions for home, business and professionals."*
   - CTAs: *"Explore Products"*, *"Call: 0336 4147095"*, *"WhatsApp Quote"*, and *"Get a Quote"*
   - Mobile: Direct click-to-call via `tel:03364147095` and WhatsApp via `https://wa.me/923364147095`
   - Visual: 3D hardware showcase with floating animated spec cards (*RTX 4090 / Intel Ultra 9*, *Official 3-Year Warranty*)
   - Trust metric counters (15,000+ systems built, 99.8% satisfaction, 100% genuine hardware)
4. **Featured Categories (8 Categories):**
   - Laptops, Desktop Computers, Gaming PCs, Monitors, Computer Accessories, Printers, Networking, Storage Devices.
   - Smoothly filters the catalog dynamically.
5. **Featured Products Grid (12 Products):**
   - Realistic hardware systems and peripherals (Dell XPS 15 OLED, ROG Strix SCAR 16 RTX 4090, GS Apex Pro Gaming Tower, GS Elite Core i7 Desktop, GS Essential Core i5 Tower, Samsung Odyssey G7 240Hz, LG 4K UltraFine, Logitech MX Master 3S combo, Kingston KC3000 2TB Gen4 SSD, TP-Link Wi-Fi 7 Mesh, Epson EcoTank, HyperX Cloud Alpha).
   - Category filter tabs, in-catalog search input, and sorting (Featured, Price Low->High, Price High->Low, Highest Rating).
   - "View Details" (opens specs modal) & "Add to Cart" (with animated toast).
6. **Why Choose GS Computer (6 Pillars):**
   - Quality Products, Competitive Prices, Expert Technical Support, Fast Delivery, Warranty Support, Customer Satisfaction.
7. **IT Services Section (9 Offerings):**
   - Computer Repair, Laptop Repair, Windows Installation, Software Installation, Virus & Malware Removal, Data Recovery, Networking Setup, PC Upgrades, CCTV / Security Solutions.
   - "Book Service" CTA pre-selects the service in the booking dialog.
8. **About GS Computer:**
   - 12+ years of hardware excellence, quality commitments, certified ESD clean lab, and business SLAs.
9. **Special Offer Banner (Flash Sale):**
   - Headline: *"Upgrade Your Setup Today"*.
   - Live countdown timer (Days, Hours, Minutes, Seconds).
   - Click-to-copy promo code: `GSPOWER10`.
   - *"Shop Now"* action button.
10. **Customer Reviews:**
    - 4 authentic testimonial cards featuring diverse personas with avatars, verified purchase badges, and star ratings.
11. **Contact Section & Store Locator:**
    - **Master Business Contact Card:**
      - 📞 Phone: `0336 4147095` (`tel:03364147095`)
      - 💬 WhatsApp: `0336 4147095` (`https://wa.me/923364147095`)
      - ✉️ Email: `saboorahmad5th@gmail.com` (`mailto:saboorahmad5th@gmail.com`)
      - 📍 Address: `Muhallah Masjid Tajdin, Mughalpura, Lahore, Pakistan`
    - Quick contact strip directly beside the form with phone, WhatsApp, email, and address.
    - **Interactive Contact Form:** Name, Email (RFC validation), Phone, Subject, and Message fields with clear, honest client submission status and direct Email/WhatsApp forward buttons.
    - Embedded Google Maps section for `Muhallah Masjid Tajdin, Mughalpura, Lahore, Pakistan` with directions button and landmark guidance notice.
12. **Professional Footer:**
    - GS Computer branding & mission.
    - Official Phone (`0336 4147095`), WhatsApp (`+92 336 4147095`), Email (`saboorahmad5th@gmail.com`), and physical address in both Column 1 and Column 4.
    - Multi-column navigation, newsletter subscription with feedback, accepted payment methods, and social media links.

---

## 📁 File Structure

```
GS computer/
├── index.html              # Main semantic HTML5 webpage with full metadata
├── favicon.svg             # Modern SVG tech favicon (microchip GS logo)
├── robots.txt              # Web crawler instructions & sitemap location
├── sitemap.xml             # XML sitemap for Google Search Console
├── css/
│   ├── style.css           # Design tokens, variables, typography & layout styles
│   ├── components.css      # Modals, cart drawer, search, toast & floating buttons
│   └── responsive.css      # Tablet & mobile responsive breakpoints and drawer
├── js/
│   ├── products-data.js    # Data catalog for products, services, categories & reviews
│   ├── cart.js             # Cart state management, calculations & drawer logic
│   ├── search-filter.js    # Global search modal, catalog filtering & sorting
│   ├── modals.js           # Modal controllers (Quick View, Booking, Quote, Checkout)
│   └── app.js              # Sticky nav, mobile menu, validations, countdown & toast
└── README.md               # Complete documentation & launch guide
```

---

## 🚀 Website Launch & Registration Guide

To take **GS Computer** live on a custom domain with hosting, SSL, Google indexing, and real email notifications, follow this step-by-step procedure:

### Step 1: Register Your Domain Name
You can register a `.pk` (local Pakistan) or `.com` domain:
- **For `.pk` or `.com.pk` Domains:** Visit the official PKNIC registry ([pknic.net.pk](https://www.pknic.net.pk/)) or accredited Pakistani registrars (e.g. Nexus, HosterPK, Pakas). Recommended domain: `gscomputer.pk` or `gscomputers.com.pk`.
- **For `.com` Domains:** Register via Namecheap, GoDaddy, or Cloudflare Registrar. Recommended: `gscomputerpk.com` or `gscomputer.com`.

### Step 2: Choose Web Hosting & Deploy Files
Since the site is built with modern static HTML5, CSS3, and JavaScript, you can host it easily:
- **Option A (Free High-Speed Static Hosting - Recommended):**
  - **Netlify / Vercel:** Create a free account, drag and drop the `GS computer` folder, and connect your custom domain.
  - **GitHub Pages:** Create a repository, push the files, and configure your custom domain in repository settings.
- **Option B (Traditional cPanel / Shared Hosting):**
  - Upload all files and folders directly to `public_html/` using cPanel File Manager or FTP (FileZilla).

### Step 3: Configure Free SSL Certificate
- On Netlify/Vercel: SSL (HTTPS) is provisioned automatically via Let's Encrypt for free.
- On cPanel: Enable "AutoSSL" or use Cloudflare Free SSL by routing your domain nameservers through Cloudflare.

### Step 4: Configure Live Email for the Contact Form
Currently, the form operates in a transparent client demonstration mode with fallback to `mailto:` and WhatsApp. To send real emails automatically to `saboorahmad5th@gmail.com`, you can choose any of these free/low-cost backends:
- **Formspree (Easiest - No backend code required):**
  1. Sign up at [formspree.io](https://formspree.io/) using `saboorahmad5th@gmail.com`.
  2. Create a new form and copy your unique Formspree URL (e.g., `https://formspree.io/f/xyza...`).
  3. In `index.html`, set `<form id="mainContactForm" action="https://formspree.io/f/YOUR_ID" method="POST">`.
- **EmailJS:** Connect your Gmail account (`saboorahmad5th@gmail.com`) directly via client JavaScript API keys.
- **PHP Mailer (if on cPanel):** Create a lightweight `contact.php` script that utilizes `mail()` or PHPMailer.

### Step 5: Google Search Console & Google Business Profile Setup
1. **Google Search Console ([search.google.com/search-console](https://search.google.com/search-console)):**
   - Add your domain (e.g. `https://gscomputer.pk/`).
   - Verify ownership via DNS TXT record or HTML verification file.
   - Submit your sitemap: `https://gscomputer.pk/sitemap.xml`.
2. **Google Business Profile ([business.google.com](https://business.google.com)):**
   - Create a listing for **GS Computer**.
   - Address: *Muhallah Masjid Tajdin, Mughalpura, Lahore, Pakistan*.
   - Phone: `0336 4147095` / `+92 336 4147095`.
   - Category: *Computer store* / *Computer repair service*.
   - Website: Link to your live domain.
   - Request postcard/video verification from Google to enable local Google Maps search results.

---

## 💻 How to Run & Test Locally

You can test the website on any browser:
1. Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.
2. Or run a local HTTP server:
   ```bash
   # Using Node.js
   npx serve .

   # Using Python
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your browser.
