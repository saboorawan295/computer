/**
 * GS Computer - Realistic Product Catalog Data
 * Contains comprehensive specifications, pricing, ratings, and media for all categories.
 */

const GS_PRODUCTS = [
  {
    id: "gspc-01",
    name: "GS Apex Pro Custom Gaming PC",
    category: "gaming-pcs",
    categoryName: "Gaming PCs",
    brand: "GS Custom Labs",
    price: 2499,
    originalPrice: 2899,
    discount: "14% OFF",
    rating: 4.9,
    reviewCount: 84,
    badge: "Bestseller",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Intel Core i9-14900KF, RTX 4080 Super 16GB, 32GB DDR5 6000MHz, 2TB Gen4 NVMe SSD, 360mm AIO Liquid Cooling.",
    inStock: true,
    stockCount: 8,
    features: [
      "NVIDIA GeForce RTX 4080 Super 16GB GDDR6X",
      "Intel Core i9-14900KF 24-Core up to 6.0 GHz",
      "32GB Corsair Vengeance RGB DDR5 6000MHz",
      "2TB Kingston KC3000 PCIe 4.0 NVMe SSD",
      "GS Custom 360mm ARGB Liquid Cooling",
      "850W 80+ Gold Fully Modular ATX 3.0 PSU",
      "Windows 11 Pro 64-bit Pre-activated"
    ],
    specs: {
      "Processor": "Intel Core i9-14900KF (24 Cores, 32 Threads, 6.0GHz Boost)",
      "Graphics": "NVIDIA GeForce RTX 4080 Super 16GB GDDR6X",
      "RAM": "32GB (2x16GB) DDR5 6000MHz RGB",
      "Storage": "2TB M.2 NVMe PCIe Gen4 SSD (7,000MB/s Read)",
      "Motherboard": "ASUS ROG Strix Z790-E Gaming WiFi II",
      "Power Supply": "850W 80+ Gold Fully Modular PCIe 5.0",
      "Cooling": "DeepCool LT720 360mm Liquid Cooler",
      "Operating System": "Windows 11 Pro 64-Bit Licensed",
      "Warranty": "3-Year Parts & Labor Direct GS Warranty"
    }
  },
  {
    id: "gspc-02",
    name: "Dell XPS 15 Ultra Business Laptop",
    category: "laptops",
    categoryName: "Laptops",
    brand: "Dell",
    price: 1899,
    originalPrice: 2199,
    discount: "14% OFF",
    rating: 4.8,
    reviewCount: 112,
    badge: "Staff Pick",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Intel Core Ultra 7 155H, 32GB LPDDR5x, 1TB NVMe Gen4, 15.6\" 3.5K OLED Touchscreen (400 nits, 100% DCI-P3).",
    inStock: true,
    stockCount: 14,
    features: [
      "15.6-inch 3.5K (3456x2160) OLED Touch Display",
      "Intel Core Ultra 7 155H with Dedicated AI NPU",
      "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "32GB Dual-Channel LPDDR5x 7467MHz",
      "1TB PCIe Gen4 Performance NVMe SSD",
      "CNC Machined Aluminum & Carbon Fiber Chassis",
      "Thunderbolt 4 & Wi-Fi 7 Connectivity"
    ],
    specs: {
      "Processor": "Intel Core Ultra 7 155H (16 Cores, 22 Threads, 4.8GHz)",
      "Graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "Display": "15.6\" 3.5K (3456x2160) InfinityEdge OLED Touch, 400 nits",
      "Memory": "32GB LPDDR5x 7467 MT/s",
      "Storage": "1TB M.2 PCIe NVMe Gen 4 SSD",
      "Battery": "86Whr with ExpressCharge 130W USB-C",
      "Weight": "1.92 kg (4.23 lbs)",
      "Operating System": "Windows 11 Pro",
      "Warranty": "2-Year On-Site Hardware Service"
    }
  },
  {
    id: "gspc-03",
    name: "ASUS ROG Strix SCAR 16 Gaming Laptop",
    category: "laptops",
    categoryName: "Laptops",
    brand: "ASUS ROG",
    price: 2799,
    originalPrice: 3199,
    discount: "13% OFF",
    rating: 5.0,
    reviewCount: 67,
    badge: "Flagship",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Intel Core i9-14900HX, RTX 4090 16GB (175W TGP), 32GB DDR5 5600MHz, 2TB SSD, 16\" Mini LED 240Hz/3ms ROG Nebula HDR.",
    inStock: true,
    stockCount: 5,
    features: [
      "16-inch ROG Nebula HDR QHD+ 240Hz Mini-LED",
      "NVIDIA GeForce RTX 4090 16GB (Max 175W TGP)",
      "Intel Core i9-14900HX 24-Core 5.8 GHz",
      "Conductonaut Extreme Liquid Metal on CPU & GPU",
      "Per-key RGB Chiclet Keyboard & Aura Sync Lightbar",
      "Wi-Fi 6E & 2.5G LAN Port"
    ],
    specs: {
      "Processor": "Intel Core i9-14900HX (24 Cores, 32 Threads)",
      "Graphics": "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W MUX Switch)",
      "Display": "16\" QHD+ (2560x1600) 240Hz, Mini LED, 1100 nits, DCI-P3 100%",
      "Memory": "32GB (2x16GB) DDR5 5600MHz",
      "Storage": "2TB PCIe 4.0 NVMe M.2 Performance SSD",
      "Audio": "4-Speaker System with Dolby Atmos & Smart Amp",
      "Weight": "2.65 kg (5.84 lbs)",
      "Operating System": "Windows 11 Home 64-bit",
      "Warranty": "2-Year Global Warranty"
    }
  },
  {
    id: "gspc-04",
    name: "GS Elite Core i7 Pro Desktop PC",
    category: "desktop-computers",
    categoryName: "Desktop Computers",
    brand: "GS Workstations",
    price: 1199,
    originalPrice: 1399,
    discount: "14% OFF",
    rating: 4.8,
    reviewCount: 95,
    badge: "Office Pick",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Intel Core i7-14700 20-Core, 32GB DDR5 5200MHz, 1TB NVMe Gen4 SSD, Intel UHD 770 Graphics, Triple 4K Display Support.",
    inStock: true,
    stockCount: 18,
    features: [
      "Intel Core i7-14700 20-Core up to 5.4 GHz",
      "32GB High-Speed DDR5 RAM (Expandable to 64GB)",
      "1TB PCIe Gen4 Ultra-Fast M.2 NVMe SSD",
      "Supports 3 External 4K Displays (HDMI + DisplayPort)",
      "Ultra-quiet Silent Acoustic Case with Dust Filters",
      "Built-in Wi-Fi 6 & Bluetooth 5.3",
      "Windows 11 Pro Pre-installed & Optimized"
    ],
    specs: {
      "Processor": "Intel Core i7-14700 (20 Cores, 28 Threads, 5.4GHz)",
      "Graphics": "Intel UHD Graphics 770 (Dual DP + HDMI)",
      "RAM": "32GB DDR5 5200MHz Dual Channel",
      "Storage": "1TB PCIe Gen4 NVMe M.2 SSD",
      "Motherboard": "Intel B760 Business Chipset with WiFi 6",
      "Power Supply": "650W 80+ Bronze Certified",
      "Chassis": "GS Silent Edition Mid-Tower with Sound Dampening",
      "Operating System": "Windows 11 Pro 64-bit",
      "Warranty": "3-Year Commercial Warranty"
    }
  },
  {
    id: "gspc-05",
    name: "GS Essential Core i5 Tower PC",
    category: "desktop-computers",
    categoryName: "Desktop Computers",
    brand: "GS Workstations",
    price: 699,
    originalPrice: 849,
    discount: "18% OFF",
    rating: 4.7,
    reviewCount: 142,
    badge: "Best Value",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Intel Core i5-13400 10-Core, 16GB DDR4 3200MHz, 512GB NVMe SSD, Fast Wi-Fi 6, Dual Display Out, Windows 11 Pro.",
    inStock: true,
    stockCount: 22,
    features: [
      "Intel Core i5-13400 (10 Cores, 16 Threads, 4.6 GHz)",
      "16GB Dual-Channel DDR4 RAM",
      "512GB High-Speed M.2 NVMe SSD",
      "Dual Video Outputs (HDMI + DisplayPort)",
      "Compact Sleek Minimalist Matte-Black Tower",
      "Energy Efficient 450W 80+ Certified PSU",
      "Pre-loaded with LibreOffice & Essential Tools"
    ],
    specs: {
      "Processor": "Intel Core i5-13400 (10 Cores / 16 Threads)",
      "Graphics": "Intel UHD Graphics 730",
      "RAM": "16GB (2x8GB) DDR4 3200MHz",
      "Storage": "512GB M.2 NVMe SSD",
      "Connectivity": "Wi-Fi 6 802.11ax + Bluetooth 5.2 + Gigabit LAN",
      "Ports": "4x USB 3.2, 4x USB 2.0, 1x USB-C, Audio Jacks",
      "Operating System": "Windows 11 Pro",
      "Warranty": "2-Year Parts & Labor Warranty"
    }
  },
  {
    id: "gspc-06",
    name: "Samsung Odyssey G7 27\" QHD Curved Gaming Monitor",
    category: "monitors",
    categoryName: "Monitors",
    brand: "Samsung",
    price: 499,
    originalPrice: 629,
    discount: "21% OFF",
    rating: 4.9,
    reviewCount: 210,
    badge: "Top Rated",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    shortDesc: "27\" WQHD (2560x1440), 240Hz Refresh Rate, 1ms (GtG), 1000R Curvature, QLED Quantum Dot, G-Sync Compatible, HDR600.",
    inStock: true,
    stockCount: 11,
    features: [
      "27-inch WQHD (2560 x 1440) Curved 1000R Panel",
      "Blistering 240Hz Refresh Rate with 1ms GtG Response",
      "Quantum Dot Technology with 95% DCI-P3 Color",
      "VESA DisplayHDR 600 Certified for Vivid Highlights",
      "NVIDIA G-Sync Compatible & AMD FreeSync Premium Pro",
      "CoreSync Ambient Lighting Ring on Rear",
      "Ergonomic Height, Tilt, Swivel & Pivot Adjustable Stand"
    ],
    specs: {
      "Screen Size": "27 Inch (68.4 cm)",
      "Resolution": "2560 x 1440 (WQHD)",
      "Refresh Rate": "240 Hz",
      "Response Time": "1ms (GtG)",
      "Curvature": "1000R Deep Curve",
      "Brightness": "350 cd/m² (Typical), 600 cd/m² (Peak HDR)",
      "Inputs": "2x DisplayPort 1.4, 1x HDMI 2.0, 2x USB 3.0 Hub",
      "Warranty": "3-Year Samsung On-Site Warranty"
    }
  },
  {
    id: "gspc-07",
    name: "LG UltraFine 27\" 4K UHD IPS Professional Monitor",
    category: "monitors",
    categoryName: "Monitors",
    brand: "LG Electronics",
    price: 429,
    originalPrice: 519,
    discount: "17% OFF",
    rating: 4.8,
    reviewCount: 78,
    badge: "Designer Choice",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    shortDesc: "27\" 4K UHD (3840x2160) IPS, DCI-P3 95%, HDR400, USB-C 65W Power Delivery, Height/Pivot Ergonomic Stand.",
    inStock: true,
    stockCount: 16,
    features: [
      "27-inch 4K UHD (3840 x 2160) IPS Crisp Display",
      "95% DCI-P3 Color Gamut for Photo & Video Editing",
      "USB Type-C with 65W Power Delivery & Display",
      "VESA DisplayHDR 400 with Rich Contrast",
      "Dual 5W Built-in MaxxAudio Stereo Speakers",
      "Virtually Borderless 3-Side Design",
      "Ergonomic One-Click Stand (Tilt, Height, Pivot)"
    ],
    specs: {
      "Screen Size": "27 Inch IPS",
      "Resolution": "3840 x 2160 (4K UHD)",
      "Color Gamut": "DCI-P3 95% (CIE1976)",
      "Connectivity": "1x USB-C (65W PD), 2x HDMI 2.0, 1x DisplayPort 1.4",
      "Features": "AMD FreeSync, Black Stabilizer, Dynamic Action Sync",
      "Warranty": "3-Year Manufacturer Warranty"
    }
  },
  {
    id: "gspc-08",
    name: "Logitech MX Master 3S + Mechanical Keyboard Combo",
    category: "computer-accessories",
    categoryName: "Computer Accessories",
    brand: "Logitech",
    price: 249,
    originalPrice: 299,
    discount: "17% OFF",
    rating: 4.9,
    reviewCount: 340,
    badge: "Bestseller",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Quiet Click 8K DPI Sensor, MagSpeed Electromagnetic Wheel, Tactile Quiet Low-Profile Mechanical Switches, Bluetooth & Bolt.",
    inStock: true,
    stockCount: 35,
    features: [
      "8,000 DPI Darkfield Sensor (Tracks on Glass)",
      "90% Quieter Acoustic Clicks for Quiet Workspaces",
      "MagSpeed Smartshift Scrolling (1,000 lines/sec)",
      "Logitech MX Mechanical Keyboard with Smart Backlighting",
      "Multi-device Easy-Switch Pairing (Up to 3 Devices)",
      "USB-C Fast Rechargeable (Up to 70 Days per charge)"
    ],
    specs: {
      "Connectivity": "Bluetooth Low Energy & Logi Bolt USB Receiver",
      "Battery Life": "Up to 70 days on full charge",
      "Compatibility": "Windows, macOS, Linux, iPadOS, ChromeOS",
      "Customization": "Logi Options+ App for Gestures & App Profiles",
      "Warranty": "2-Year Hardware Warranty"
    }
  },
  {
    id: "gspc-09",
    name: "Kingston KC3000 2TB PCIe 4.0 NVMe M.2 SSD",
    category: "storage-devices",
    categoryName: "Storage Devices",
    brand: "Kingston",
    price: 159,
    originalPrice: 199,
    discount: "20% OFF",
    rating: 4.9,
    reviewCount: 188,
    badge: "High Speed",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Up to 7,000MB/s Read & 7,000MB/s Write, 3D TLC NAND, Phison E18 Controller, Low-Profile Graphene Aluminum Heat Spreader.",
    inStock: true,
    stockCount: 40,
    features: [
      "Blazing PCIe 4.0 NVMe Gen 4x4 Speeds",
      "Sequential Read: 7,000 MB/s | Sequential Write: 7,000 MB/s",
      "High-density 3D TLC NAND & Phison PS5018-E18 Controller",
      "Slim Graphene Aluminum Heat Spreader for Thermal Stability",
      "Ideal for PS5 Console & High-End PC Gaming / Video Editing",
      "1,600 TBW Extreme Endurance Rating"
    ],
    specs: {
      "Capacity": "2,048 GB (2TB)",
      "Form Factor": "M.2 2280",
      "Interface": "PCIe 4.0 x4 NVMe",
      "Endurance": "1600 TBW (Total Bytes Written)",
      "MTBF": "2,000,000 Hours",
      "Warranty": "5-Year Limited Warranty with Free Tech Support"
    }
  },
  {
    id: "gspc-10",
    name: "TP-Link Deco BE85 Wi-Fi 7 Tri-Band Mesh System (2-Pack)",
    category: "networking",
    categoryName: "Networking",
    brand: "TP-Link",
    price: 799,
    originalPrice: 949,
    discount: "16% OFF",
    rating: 4.9,
    reviewCount: 45,
    badge: "Next Gen",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    shortDesc: "BE22000 Tri-Band Whole Home Mesh Wi-Fi 7, Dual 10Gbps Ports, 320MHz Channels, 4K-QAM, Covers up to 7,600 sq ft.",
    inStock: true,
    stockCount: 9,
    features: [
      "Wi-Fi 7 Speeds up to 22 Gbps across 3 Bands",
      "2x 10Gbps WAN/LAN Ports + 2x 2.5Gbps Ports per Unit",
      "Multi-Link Operation (MLO) for Ultra-Low Latency",
      "Covers up to 7,600 sq. ft. & Connects 200+ Devices",
      "TP-Link HomeShield Premium Real-time IoT Security",
      "Easy App Setup with Seamless AI-Driven Roaming"
    ],
    specs: {
      "Standard": "Wi-Fi 7 (IEEE 802.11be/ax/ac/n/a/b/g)",
      "Speed": "6GHz: 11520 Mbps, 5GHz: 8640 Mbps, 2.4GHz: 1376 Mbps",
      "Ports": "2x 10 Gbps RJ45/SFP+ Combo, 2x 2.5 Gbps RJ45, 1x USB 3.0",
      "Antennas": "8x High-Gain Internal Antennas per Unit",
      "Warranty": "3-Year TP-Link Warranty"
    }
  },
  {
    id: "gspc-11",
    name: "Epson EcoTank L3250 All-in-One Ink Tank Printer",
    category: "printers",
    categoryName: "Printers",
    brand: "Epson",
    price: 219,
    originalPrice: 269,
    discount: "19% OFF",
    rating: 4.7,
    reviewCount: 165,
    badge: "Eco Saver",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Print, Scan, Copy with Ultra-Low-Cost Ink Tanks, Wi-Fi & Wi-Fi Direct, Borderless 4R Photo Printing, Smart Panel App.",
    inStock: true,
    stockCount: 19,
    features: [
      "Ultra-low-cost printing: Up to 4,500 Black / 7,500 Color Pages",
      "Spill-free, hassle-free ink refill bottles with key slots",
      "Wi-Fi & Wi-Fi Direct for Wireless Smartphone Printing",
      "High resolution 5760 x 1440 dpi Print Quality",
      "Compact integrated tank design fits any desk",
      "Epson Smart Panel Mobile App Management"
    ],
    specs: {
      "Functions": "Print, Scan, Copy",
      "Print Speed": "33 ppm (Black), 15 ppm (Color)",
      "Max Resolution": "5760 x 1440 dpi",
      "Connectivity": "USB 2.0, Wi-Fi IEEE 802.11b/g/n, Wi-Fi Direct",
      "Paper Sizes": "A4, A5, A6, B5, Envelopes, Legal, Letter",
      "Warranty": "2-Year or 30,000 Pages Epson Warranty"
    }
  },
  {
    id: "gspc-12",
    name: "HyperX Cloud Alpha Wireless Gaming Headset",
    category: "computer-accessories",
    categoryName: "Computer Accessories",
    brand: "HyperX",
    price: 179,
    originalPrice: 219,
    discount: "18% OFF",
    rating: 4.9,
    reviewCount: 280,
    badge: "300hr Battery",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Up to 300 Hours Battery Life on Single Charge, DTS Headphone:X Spatial Audio, Dual Chamber 50mm Drivers, Memory Foam.",
    inStock: true,
    stockCount: 25,
    features: [
      "Unmatched 300 Hours Battery Life on a Single Charge",
      "DTS Headphone:X Spatial Audio for 3D Sound Staging",
      "HyperX Dual Chamber 50mm Neodymium Drivers",
      "Signature HyperX Memory Foam and Breathable Leatherette",
      "Detachable Noise-Cancelling Mic with LED Mute Indicator",
      "Fast 2.4GHz Low-Latency Wireless USB Dongle"
    ],
    specs: {
      "Driver": "Custom Dynamic 50mm with Neodymium Magnets",
      "Frequency Response": "15 Hz – 21,000 Hz",
      "Wireless Range": "Up to 20 meters (65 feet)",
      "Battery Life": "Up to 300 hours (Rechargeable Li-Polymer)",
      "Weight": "335g (with microphone)",
      "Warranty": "2-Year Manufacturer Warranty"
    }
  }
];

// IT Services Catalog with detail descriptions and pricing starting points
const GS_SERVICES = [
  {
    id: "srv-comp-repair",
    icon: "fa-solid fa-desktop",
    title: "Computer Repair",
    subtitle: "Hardware & Component Troubleshooting",
    desc: "Complete diagnostic and hardware repair for all desktop brands and custom PCs. We fix motherboards, power supplies, thermal throttling, and boot failures with certified OEM replacement parts.",
    turnaround: "Same-Day / 24-48 Hours",
    warranty: "90-Day Service Guarantee",
    startingPrice: "$49",
    popular: true
  },
  {
    id: "srv-laptop-repair",
    icon: "fa-solid fa-laptop-medical",
    title: "Laptop Repair",
    subtitle: "Screens, Keyboards & Batteries",
    desc: "Precision laptop repair for Dell, HP, Lenovo, ASUS, Acer, and MacBooks. Includes cracked screen replacement, battery renewal, liquid spill recovery, hinge repairs, and overheating solutions.",
    turnaround: "24-48 Hours",
    warranty: "6-Month Part Warranty",
    startingPrice: "$59",
    popular: true
  },
  {
    id: "srv-win-install",
    icon: "fa-brands fa-windows",
    title: "Windows Installation",
    subtitle: "Clean OS Setup & Optimization",
    desc: "Genuine Windows 11 / 10 installation, driver configuration, BIOS updates, telemetry bloatware removal, and performance tuning for peak productivity and zero crashes.",
    turnaround: "2-4 Hours",
    warranty: "Lifetime Activation Help",
    startingPrice: "$39",
    popular: false
  },
  {
    id: "srv-soft-install",
    icon: "fa-solid fa-cloud-arrow-down",
    title: "Software Installation",
    subtitle: "Office, Adobe & Specialized Tools",
    desc: "Full software installation, licensing setup, and conflict resolution for Microsoft 365, Adobe Creative Cloud, AutoCAD, QuickBooks, CRM clients, and enterprise suites.",
    turnaround: "Same-Day",
    warranty: "Free Re-configuration",
    startingPrice: "$29",
    popular: false
  },
  {
    id: "srv-virus-removal",
    icon: "fa-solid fa-shield-virus",
    title: "Virus & Malware Removal",
    subtitle: "Deep Threat Cleansing & Security",
    desc: "Comprehensive eradication of Trojans, ransomware, spyware, adware, and crypto miners. Includes full security hardening and premium real-time antivirus deployment.",
    turnaround: "Same-Day",
    warranty: "30-Day Clean Guarantee",
    startingPrice: "$45",
    popular: true
  },
  {
    id: "srv-data-recovery",
    icon: "fa-solid fa-hard-drive",
    title: "Data Recovery",
    subtitle: "HDD, SSD & Corrupt Drive Rescue",
    desc: "Advanced recovery for formatted, deleted, corrupted, or mechanically failed hard drives, NVMe SSDs, flash drives, and RAID arrays in an ISO cleanroom environment.",
    turnaround: "2-5 Days",
    warranty: "No Data, No Recovery Fee",
    startingPrice: "$89",
    popular: true
  },
  {
    id: "srv-networking",
    icon: "fa-solid fa-network-wired",
    title: "Networking Setup",
    subtitle: "Home & Business High-Speed Wi-Fi",
    desc: "Enterprise-grade wired & wireless network design, Wi-Fi 7 mesh installation, structured Cat6/Cat7 cabling, managed switch configuration, and firewall protection.",
    turnaround: "On-Site Scheduled",
    warranty: "1-Year Coverage",
    startingPrice: "$99",
    popular: false
  },
  {
    id: "srv-pc-upgrades",
    icon: "fa-solid fa-microchip",
    title: "PC Upgrades",
    subtitle: "RAM, GPU, SSD & Liquid Cooling",
    desc: "Breathe new life into your setup. We recommend and install high-speed NVMe SSDs, larger RAM modules, RTX graphics cards, power supplies, and quiet thermal solutions.",
    turnaround: "Same-Day / 24 Hours",
    warranty: "1-Year Labor Warranty",
    startingPrice: "$35",
    popular: true
  },
  {
    id: "srv-cctv-security",
    icon: "fa-solid fa-video",
    title: "CCTV / Security Solutions",
    subtitle: "Smart IP Surveillance & Remote Monitoring",
    desc: "Professional installation of 4K IP cameras, NVR recording servers, night-vision smart motion detection, mobile remote live viewing, and commercial access control systems.",
    turnaround: "Site Survey & Fast Setup",
    warranty: "2-Year Hardware Warranty",
    startingPrice: "$149",
    popular: false
  }
];

// Product Categories definitions with icons and descriptions
const GS_CATEGORIES = [
  {
    id: "laptops",
    name: "Laptops",
    tagline: "Ultrabooks & Gaming",
    count: "24+ Models",
    icon: "fa-solid fa-laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "desktop-computers",
    name: "Desktop Computers",
    tagline: "Workstations & Office",
    count: "18+ Models",
    icon: "fa-solid fa-desktop",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gaming-pcs",
    name: "Gaming PCs",
    tagline: "High-FPS Custom Rigs",
    count: "15+ Builds",
    icon: "fa-solid fa-gamepad",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "monitors",
    name: "Monitors",
    tagline: "4K, Curved & 240Hz",
    count: "30+ Displays",
    icon: "fa-solid fa-display",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "computer-accessories",
    name: "Computer Accessories",
    tagline: "Keyboards, Mice & Audio",
    count: "120+ Items",
    icon: "fa-solid fa-keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "printers",
    name: "Printers",
    tagline: "EcoTank, Laser & Multi",
    count: "16+ Models",
    icon: "fa-solid fa-print",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "networking",
    name: "Networking",
    tagline: "Wi-Fi 7, Routers & Mesh",
    count: "22+ Systems",
    icon: "fa-solid fa-wifi",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "storage-devices",
    name: "Storage Devices",
    tagline: "NVMe SSDs & External",
    count: "40+ Drives",
    icon: "fa-solid fa-hard-drive",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80"
  }
];

// Customer Testimonials
const GS_REVIEWS = [
  {
    id: "rev-1",
    name: "David Sterling",
    role: "Senior Full-Stack Engineer",
    company: "CloudVantage Labs",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "2 days ago",
    title: "Best custom PC builder in the state",
    review: "Bought the GS Apex Pro with an RTX 4080 Super for 3D simulation and compiling. The cable management is museum-grade, thermals stay under 68°C under full load, and it shipped in bulletproof wooden crate packaging. GS Computer is now our studio's default vendor."
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    role: "Digital Art Director",
    company: "Prism Creative Studio",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    date: "1 week ago",
    title: "Saved our client data after hard drive failure",
    review: "Our main RAID production drive corrupted two days before a major campaign deliverable. The GS Computer technician team recovered 100% of our lost PSD and video files within 24 hours. Honest pricing, incredible professionalism, and zero stress."
  },
  {
    id: "rev-3",
    name: "Marcus Vance",
    role: "Esports Competitor & Streamer",
    company: "Apex Valorant League",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago",
    title: "Insane FPS and zero thermal throttling",
    review: "Upgraded to the Samsung Odyssey 240Hz monitor and custom liquid rig from GS Computer. Their advice on matching RAM speeds with my GPU was spot-on. They didn't try to upsell what I didn't need. Truly gamers who know their hardware."
  },
  {
    id: "rev-4",
    name: "Sarah Chen",
    role: "Operations Director",
    company: "NexGen Financial Group",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    date: "3 weeks ago",
    title: "Flawless office deployment of 25 workstations",
    review: "GS Computer provisioned, network-configured, and installed 25 Core i7 desktop workstations with dual monitors for our new branch. On time, under budget, and their ongoing IT support SLA has been rock-solid. Highly recommended!"
  }
];

