/* ════════════════════════════════════════════════════════════
   SKYEAGLE REAL ESTATE & VENDOR NETWORK - MULTI-PAGE SCRIPT
   ════════════════════════════════════════════════════════════ */

// Mock Properties Database
const PROPERTIES = [
  {
    id: 1, title: "Modern Luxury Villa", location: "DHA Phase 6, Lahore",
    price: "Rs 7.5 Crore", priceRaw: 75000000, type: "house", status: "sale",
    beds: 5, baths: 6, area: "1 Kanal",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
    featured: true, recent: true,
    desc: "A brand new ultra-modern 1-Kanal villa in DHA Phase 6 Lahore featuring designer interiors, Italian fittings, heated swimming pool, basement cinema, and complete smart automation."
  },
  {
    id: 2, title: "Designer Bungalow", location: "Bahria Town Sector C, Lahore",
    price: "Rs 4.5 Crore", priceRaw: 45000000, type: "house", status: "sale",
    beds: 4, baths: 5, area: "10 Marla",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600",
    featured: true, recent: true,
    desc: "10 Marla luxurious bungalow with imported marble flooring, spanish tiled baths, dual kitchens, landscaped garden, and prime location near Grand Mosque Bahria Town."
  },
  {
    id: 3, title: "Luxury Apartment", location: "Gulberg III, Lahore",
    price: "Rs 2.8 Crore", priceRaw: 28000000, type: "apartment", status: "sale",
    beds: 3, baths: 3, area: "1,800 SqFt",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
    featured: true, recent: false,
    desc: "High-floor luxury corner apartment in MM Alam Road Gulberg with panoramic city view, underground parking, 24/7 security, backup power, and gym access."
  },
  {
    id: 4, title: "Commercial Plaza Floor", location: "Johar Town Phase 2, Lahore",
    price: "Rs 3.2 Crore", priceRaw: 32000000, type: "commercial", status: "sale",
    beds: 0, baths: 2, area: "2,200 SqFt",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    featured: false, recent: true,
    desc: "Prime commercial floor near Doctors Hospital Johar Town. Ideal for corporate offices, IT hubs, or multinational brand outlets with high rental yield."
  },
  {
    id: 5, title: "Executive Villa for Rent", location: "DHA Phase 5, Lahore",
    price: "Rs 3.5 Lac / month", priceRaw: 350000, type: "house", status: "rent",
    beds: 5, baths: 6, area: "1 Kanal",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    featured: true, recent: true,
    desc: "Fully furnished 1 Kanal executive bungalow in DHA Phase 5 with modern furniture, servant quarters, lush green lawn, and solar system installed."
  },
  {
    id: 6, title: "Residential Plot 1 Kanal", location: "DHA Phase 9 Prism, Lahore",
    price: "Rs 2.4 Crore", priceRaw: 24000000, type: "plot", status: "sale",
    beds: 0, baths: 0, area: "1 Kanal",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600",
    featured: false, recent: true,
    desc: "Ideal location plot in Block Q, DHA Phase 9 Prism. Direct owner dealing, possession utility paid, clear title, perfect for quick construction."
  },
  {
    id: 7, title: "Furnished Studio Flat", location: "Model Town Link Rd, Lahore",
    price: "Rs 85,000 / month", priceRaw: 85000, type: "apartment", status: "rent",
    beds: 1, baths: 1, area: "650 SqFt",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
    featured: false, recent: true,
    desc: "Elegantly furnished studio apartment with kitchen appliances, LED TV, AC, high-speed Wi-Fi, and 24-hour lift elevator backup."
  },
  {
    id: 8, title: "5 Marla Smart Home", location: "Wapda Town Phase 1, Lahore",
    price: "Rs 2.1 Crore", priceRaw: 21000000, type: "house", status: "sale",
    beds: 3, baths: 4, area: "5 Marla",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
    featured: false, recent: false,
    desc: "Brand new 5 Marla double story home with smart lock entry, CCTV camera setup, modern Spanish tiles, and park-facing location."
  }
];

// Mock Verified Vendors Database
const VENDORS = [
  {
    id: 101,
    name: "Lahore BuildCraft & Construction",
    category: "construction",
    categoryLabel: "Construction & Renovation",
    rating: 4.9,
    reviews: 48,
    phone: "03184195665",
    experience: "12 Years",
    location: "DHA Phase 6 & Gulberg, Lahore",
    badge: "SkyEagle Verified Partner",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400",
    services: ["Grey Structure Construction", "Turnkey Villa Projects", "Architectural Blueprinting", "Renovation & Extension"]
  },
  {
    id: 102,
    name: "Aura Luxe Interior & Staging Studio",
    category: "interior",
    categoryLabel: "Interior Design & Staging",
    rating: 5.0,
    reviews: 62,
    phone: "03188791637",
    experience: "8 Years",
    location: "MM Alam Road, Gulberg III",
    badge: "Top Rated Stager",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400",
    services: ["Home Staging for Sale", "3D Architectural Renderings", "Custom Furniture", "Lighting Design"]
  },
  {
    id: 103,
    name: "Express Safe Movers & Packers",
    category: "moving",
    categoryLabel: "Movers & Packers",
    rating: 4.8,
    reviews: 95,
    phone: "03184195665",
    experience: "10 Years",
    location: "Model Town & Johar Town",
    badge: "Insured Relocations",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400",
    services: ["Home & Office Relocation", "Furniture Disassembly", "Bubble Wrap Packing", "Intercity Transport"]
  },
  {
    id: 104,
    name: "Malik & Partners Real Estate Legal Law",
    category: "legal",
    categoryLabel: "Legal & Documentation",
    rating: 4.9,
    reviews: 34,
    phone: "03188791637",
    experience: "15 Years",
    location: "High Court & DHA Phase 3",
    badge: "Senior High Court Advocates",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
    services: ["LDA/DHA Title Search", "Property Transfer Execution", "Registry & Stamp Duty", "Power of Attorney Verification"]
  },
  {
    id: 105,
    name: "Volts & Pipes Engineering Services",
    category: "maintenance",
    categoryLabel: "Electric & Plumbing",
    rating: 4.7,
    reviews: 112,
    phone: "03184195665",
    experience: "9 Years",
    location: "All Lahore Coverage",
    badge: "24/7 Emergency Response",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
    services: ["Solar System Installation", "Electrical Panel Maintenance", "Leakage Detection & Plumbing", "Generator Servicing"]
  },
  {
    id: 106,
    name: "Sparkle Clean Professional Deep Cleaning",
    category: "cleaning",
    categoryLabel: "Deep Cleaning & Fumigation",
    rating: 4.9,
    reviews: 81,
    phone: "03188791637",
    experience: "6 Years",
    location: "Bahria Town & DHA Lahore",
    badge: "Eco-Friendly Products",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
    services: ["Post-Construction Cleaning", "Move-in Deep Sanitization", "Sofa & Carpet Steam Cleaning", "Pest Control Fumigation"]
  }
];

// Mock Agents Database
const AGENTS = [
  { id: 1, name: "Tariq Mehmood", role: "CEO & Managing Director", exp: "14+ Yrs", phone: "03184195665", email: "tariq@skyeagle.pk", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400", deals: "180+ Deals Closed", bio: "Leading Lahore's luxury real estate development and investment sector with over 14 years of hands-on expertise." },
  { id: 2, name: "Sana Khalid", role: "Head of Residential & Staging", exp: "8+ Yrs", phone: "03188791637", email: "sana@skyeagle.pk", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", deals: "120+ Deals Closed", bio: "Specialist in DHA and Gulberg high-end residential listings, property staging, and overseas investor management." },
  { id: 3, name: "Usman Ghani", role: "Commercial Property Lead", exp: "10+ Yrs", phone: "03184195665", email: "usman@skyeagle.pk", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400", deals: "95+ Deals Closed", bio: "Expert in commercial plots, plaza acquisition, high-yield rental assets, and corporate lease structuring." }
];

// Hero Slides
const HERO_SLIDES = [
  { title: "Find Your Dream <em>Home in Lahore</em>", sub: "Explore Lahore's finest luxury houses, villas, and apartments in DHA, Bahria Town & Gulberg.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600" },
  { title: "Verified Vendor <em>Ecosystem</em>", sub: "Connect with certified contractors, interior designers, movers, and legal specialists.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600" },
  { title: "Smart Property <em>Investment</em>", sub: "Get market valuations and high-yield commercial property options with 100% legal backing.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600" }
];

let heroIndex = 0;

// Toast Notification
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = 'position:fixed; bottom:30px; right:30px; background:#0a193c; color:#fff; padding:16px 26px; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,.3); z-index:9999; font-weight:600; font-size:.95rem; display:flex; align-items:center; gap:10px; border-left:4px solid #e74c3c; transition:all .3s ease; opacity:0; transform:translateY(20px);';
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 3500);
}

// ═══════════════ NAVBAR & SCROLL ═══════════════
function initNavbar() {
  const nav = document.querySelector('.navbar');
  const prog = document.getElementById('scroll-progress');
  const st = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    if (prog) {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      prog.style.width = (winScroll / height) * 100 + '%';
    }
    if (st) st.classList.toggle('show', window.scrollY > 450);
  }, { passive: true });
}

function toggleMenu() {
  const m = document.getElementById('mobile-nav');
  const b = document.getElementById('hamburger');
  if (!m) return;
  m.classList.toggle('open');
  const spans = b?.querySelectorAll('span') || [];
  if (m.classList.contains('open')) {
    spans[0] && (spans[0].style.transform = 'rotate(45deg) translateY(7px)');
    spans[1] && (spans[1].style.opacity = '0');
    spans[2] && (spans[2].style.transform = 'rotate(-45deg) translateY(-7px)');
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
}

function initLoader() {
  const l = document.getElementById('loader');
  if (!l) return;
  setTimeout(() => l.classList.add('hidden'), 500);
}

// ═══════════════ HERO SLIDER ═══════════════
function initSlider() {
  const track = document.getElementById('hero-track');
  const dots = document.getElementById('hero-dots');
  if (!track) return;

  track.innerHTML = HERO_SLIDES.map((s, i) => `
    <div class="hero-slide">
      <img src="${s.img}" alt="SkyEagle Real Estate">
      <div class="hero-content">
        <div class="hero-eyebrow"><i class="fas fa-crown"></i> <span>Premier Estate & Vendor Network</span></div>
        <h1 class="hero-title">${s.title}</h1>
        <p class="hero-subtitle">${s.sub}</p>
        <div class="hero-btns">
          <a href="properties.html" class="btn-primary"><i class="fas fa-search"></i> Browse Properties</a>
          <a href="vendors.html" class="btn-outline-white"><i class="fas fa-handshake"></i> Verified Vendors</a>
        </div>
      </div>
    </div>
  `).join('');

  if (dots) {
    dots.innerHTML = HERO_SLIDES.map((_, i) => `<button class="hero-dot ${i===0?'active':''}" onclick="goToHero(${i})"></button>`).join('');
  }

  setInterval(() => heroNav(1), 6000);
}

function heroNav(dir) {
  heroIndex = (heroIndex + dir + HERO_SLIDES.length) % HERO_SLIDES.length;
  updateHero();
}

function goToHero(idx) {
  heroIndex = idx;
  updateHero();
}

function updateHero() {
  const track = document.getElementById('hero-track');
  if (track) track.style.transform = `translateX(-${heroIndex * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === heroIndex));
}

function heroSearch(e) {
  e.preventDefault();
  const type = document.getElementById('hs-type')?.value || '';
  const loc = document.getElementById('hs-loc')?.value || '';
  const max = document.getElementById('hs-max')?.value || '';
  window.location.href = `properties.html?type=${encodeURIComponent(type)}&loc=${encodeURIComponent(loc)}&max=${encodeURIComponent(max)}`;
}

// ═══════════════ RENDER CARDS ═══════════════
function renderPropertyCard(p) {
  return `
    <div class="property-card aos">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.title}">
        <div class="card-badges">
          <span class="badge ${p.status === 'sale' ? 'badge-sale' : 'badge-rent'}">For ${p.status === 'sale' ? 'Sale' : 'Rent'}</span>
          ${p.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
        </div>
        <div class="card-price">${p.price}</div>
      </div>
      <div class="card-body">
        <div class="card-type"><i class="fas fa-building"></i> ${p.type.toUpperCase()}</div>
        <h3 class="card-title">${p.title}</h3>
        <div class="card-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</div>
        <div class="card-specs">
          ${p.beds ? `<span><i class="fas fa-bed"></i> ${p.beds} Beds</span>` : ''}
          ${p.baths ? `<span><i class="fas fa-bath"></i> ${p.baths} Baths</span>` : ''}
          <span><i class="fas fa-ruler-combined"></i> ${p.area}</span>
        </div>
      </div>
      <div class="card-footer">
        <button onclick="openProperty(${p.id})" class="btn-card-details"><i class="fas fa-eye"></i> View Details</button>
        <a href="https://wa.me/923188791637?text=Hi%20SkyEagle,%20I'm%20interested%20in%20${encodeURIComponent(p.title)}" target="_blank" class="btn-card-wa"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  `;
}

function openProperty(id) {
  window.location.href = `property-detail.html?id=${id}`;
}

function renderHomeFeatured() {
  const container = document.getElementById('home-featured');
  if (!container) return;
  const list = PROPERTIES.filter(p => p.featured).slice(0, 3);
  container.innerHTML = list.map(p => renderPropertyCard(p)).join('');
}

function renderHomeRecent() {
  const container = document.getElementById('home-recent');
  if (!container) return;
  const list = PROPERTIES.filter(p => p.recent).slice(0, 3);
  container.innerHTML = list.map(p => renderPropertyCard(p)).join('');
}

function renderAgentCards(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = AGENTS.map(a => `
    <div class="agent-card aos">
      <div class="agent-img-wrap">
        <img src="${a.img}" alt="${a.name}">
        <div class="agent-badge"><i class="fas fa-certificate"></i> Verified</div>
      </div>
      <div class="agent-body">
        <h3 class="agent-name">${a.name}</h3>
        <div class="agent-role">${a.role}</div>
        <p style="font-size:.85rem; color:var(--text-light); margin:8px 0 14px; line-height:1.5;">${a.bio}</p>
        <div class="agent-info-row"><i class="fas fa-award"></i> <span>${a.deals}</span></div>
        <div class="agent-info-row"><i class="fas fa-phone-alt"></i> <span>${a.phone}</span></div>
        <div style="display:flex; gap:10px; margin-top:16px;">
          <a href="tel:${a.phone}" class="btn-primary" style="flex:1; justify-center; padding:10px; font-size:.85rem;"><i class="fas fa-phone"></i> Call</a>
          <a href="https://wa.me/92${a.phone.substring(1)}" target="_blank" class="btn-outline-white" style="background:#25D366; color:#fff; border:none; padding:10px 16px; font-size:.9rem;"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  `).join('');
}

// ═══════════════ VENDORS DIRECTORY & FILTERING ═══════════════
function renderVendors(vendorList) {
  const grid = document.getElementById('vendorsGrid');
  const countText = document.getElementById('vendorCountText');
  if (!grid) return;

  const items = vendorList || VENDORS;
  if (countText) countText.textContent = `Showing ${items.length} SkyEagle Certified Vendors`;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:50px 20px; background:#fff; border-radius:14px;">
        <i class="fas fa-search" style="font-size:3rem; color:var(--text-light); margin-bottom:15px; display:block;"></i>
        <h3 style="font-family:var(--font-display); font-size:1.4rem;">No matching vendors found</h3>
        <p style="color:var(--text-light); font-size:.95rem; margin-top:5px;">Try adjusting your keyword or selecting a different category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(v => `
    <div class="why-card" style="background:#fff; border-radius:16px; overflow:hidden; box-shadow:var(--shadow-md); border:1px solid var(--border); display:flex; flex-direction:column; justify-content:space-between; padding:0;">
      <div style="position:relative; height:180px; overflow:hidden;">
        <img src="${v.img}" alt="${v.name}" style="width:100%; height:100%; object-fit:cover;">
        <span style="position:absolute; top:12px; right:12px; background:rgba(10,25,60,.85); backdrop-filter:blur(5px); color:var(--gold-light); font-size:.72rem; font-weight:700; padding:5px 12px; border-radius:30px; letter-spacing:1px; text-transform:uppercase;">
          <i class="fas fa-shield-alt"></i> ${v.badge}
        </span>
      </div>
      <div style="padding:22px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-size:.75rem; font-weight:700; color:var(--rose); text-transform:uppercase; letter-spacing:1px;">${v.categoryLabel}</span>
            <span style="font-weight:700; font-size:.9rem; color:var(--blue);"><i class="fas fa-star" style="color:var(--gold);"></i> ${v.rating} (${v.reviews})</span>
          </div>
          <h3 style="font-family:var(--font-display); font-size:1.25rem; color:var(--text); margin-bottom:10px; line-height:1.3;">${v.name}</h3>
          <p style="font-size:.85rem; color:var(--text-light); margin-bottom:12px;"><i class="fas fa-map-marker-alt" style="color:var(--rose);"></i> ${v.location} • <i class="fas fa-business-time"></i> ${v.experience}</p>

          <div style="margin-bottom:18px;">
            <div style="font-size:.75rem; font-weight:700; color:var(--text); text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Key Services:</div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${v.services.map(s => `<span style="background:var(--off-white); border:1px solid var(--border); font-size:.78rem; padding:4px 9px; border-radius:6px; color:var(--text-light);">${s}</span>`).join('')}
            </div>
          </div>
        </div>

        <div style="display:flex; gap:10px; border-top:1px solid var(--border); padding-top:15px; margin-top:10px;">
          <a href="tel:${v.phone}" class="btn-primary" style="flex:1; justify-content:center; padding:10px; font-size:.85rem;"><i class="fas fa-phone-alt"></i> Call Vendor</a>
          <a href="https://wa.me/92${v.phone.substring(1)}?text=Hi%20${encodeURIComponent(v.name)},%20I%20found%20you%20on%20SkyEagle%20Real%20Estate." target="_blank" class="btn-outline-white" style="background:#25D366; color:#fff; border:none; padding:10px 14px; font-size:.9rem;"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterVendors() {
  const query = document.getElementById('vendorSearchInput')?.value.toLowerCase().trim() || '';
  const category = document.getElementById('vendorCategorySelect')?.value || 'all';

  const filtered = VENDORS.filter(v => {
    const matchesCat = category === 'all' || v.category === category;
    const matchesQuery = !query || v.name.toLowerCase().includes(query) || v.services.some(s => s.toLowerCase().includes(query)) || v.location.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  renderVendors(filtered);
}

function filterVendorCategory(cat) {
  document.querySelectorAll('.vendor-pill').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === cat));
  const select = document.getElementById('vendorCategorySelect');
  if (select) select.value = cat;
  filterVendors();
}

// ═══════════════ VENDOR PORTAL LOGIC ═══════════════
function switchVendorTab(tab) {
  const applyWrap = document.getElementById('vendorApplyFormWrap');
  const loginWrap = document.getElementById('vendorLoginFormWrap');
  const btnApply = document.getElementById('tabApplyBtn');
  const btnLogin = document.getElementById('tabLoginBtn');

  if (tab === 'apply') {
    applyWrap.style.display = 'block';
    loginWrap.style.display = 'none';
    btnApply.style.color = 'var(--blue)';
    btnApply.style.borderBottom = '3px solid var(--blue)';
    btnLogin.style.color = 'var(--text-light)';
    btnLogin.style.borderBottom = '3px solid transparent';
  } else {
    applyWrap.style.display = 'none';
    loginWrap.style.display = 'block';
    btnLogin.style.color = 'var(--blue)';
    btnLogin.style.borderBottom = '3px solid var(--blue)';
    btnApply.style.color = 'var(--text-light)';
    btnApply.style.borderBottom = '3px solid transparent';
  }
}

function submitVendorApplication(e) {
  e.preventDefault();
  const company = document.getElementById('vCompany')?.value;
  showToast(`🎉 Application received for ${company}! Our vendor manager will contact you within 24 hours.`);
  e.target.reset();
}

function submitVendorLogin(e) {
  e.preventDefault();
  showToast('🔑 Login successful! Redirecting to Vendor Partner Dashboard...');
}

function submitContact(e) {
  if (e) e.preventDefault();
  showToast('💬 Thank you for contacting SkyEagle! Our property consultant will get back to you within 1 hour.');
  if (e && e.target && e.target.reset) e.target.reset();
}

// ═══════════════ PROPERTIES PAGE FILTERING ═══════════════
function initFilters(containerId = 'props-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const initialType = urlParams.get('type') || 'all';
  const initialMax = urlParams.get('max') || '';
  const initialStatus = urlParams.get('status') || 'all';

  const typeSelect = document.getElementById('type-filter');
  const statusSelect = document.getElementById('status-filter');
  const minSelect = document.getElementById('min-filter');
  const maxSelect = document.getElementById('max-filter');
  const sortSelect = document.getElementById('sort-filter');
  const applyBtn = document.getElementById('apply-filter');

  if (typeSelect && initialType) typeSelect.value = initialType;
  if (statusSelect && initialStatus) statusSelect.value = initialStatus;
  if (maxSelect && initialMax) maxSelect.value = initialMax;

  function applyAndRender() {
    let list = [...PROPERTIES];
    const typeVal = typeSelect?.value || 'all';
    const statusVal = statusSelect?.value || 'all';
    const minVal = parseInt(minSelect?.value || '0', 10);
    const maxVal = parseInt(maxSelect?.value || '0', 10);
    const sortVal = sortSelect?.value || '';

    if (typeVal !== 'all') {
      list = list.filter(p => p.type === typeVal);
    }
    if (statusVal !== 'all') {
      list = list.filter(p => p.status === statusVal);
    }
    if (minVal > 0) {
      list = list.filter(p => p.priceRaw >= minVal);
    }
    if (maxVal > 0) {
      list = list.filter(p => p.priceRaw <= maxVal);
    }

    if (sortVal === 'asc') {
      list.sort((a, b) => a.priceRaw - b.priceRaw);
    } else if (sortVal === 'desc') {
      list.sort((a, b) => b.priceRaw - a.priceRaw);
    } else if (sortVal === 'new') {
      list.sort((a, b) => b.id - a.id);
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:50px 20px; background:#fff; border-radius:14px;">
          <i class="fas fa-search" style="font-size:3rem; color:var(--text-light); margin-bottom:15px; display:block;"></i>
          <h3 style="font-family:var(--font-display); font-size:1.4rem;">No matching properties found</h3>
          <p style="color:var(--text-light); font-size:.95rem; margin-top:5px;">Try adjusting your search criteria or price range.</p>
        </div>
      `;
    } else {
      container.innerHTML = list.map(p => renderPropertyCard(p)).join('');
    }
  }

  if (applyBtn) {
    applyBtn.addEventListener('click', applyAndRender);
  }

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      if (filter === 'all') {
        if (typeSelect) typeSelect.value = 'all';
        if (statusSelect) statusSelect.value = 'all';
      } else if (['house', 'apartment', 'villa', 'commercial', 'plot'].includes(filter)) {
        if (typeSelect) typeSelect.value = filter;
      } else if (['sale', 'rent'].includes(filter)) {
        if (statusSelect) statusSelect.value = filter;
      }
      applyAndRender();
    });
  });

  applyAndRender();
}

// ═══════════════ SERVICES PAGE CATEGORIES ═══════════════
function switchServiceCategory(cat) {
  document.querySelectorAll('.services-group').forEach(g => g.style.display = 'none');
  const target = document.getElementById(`group-${cat}`);
  if (target) target.style.display = 'grid';

  document.querySelectorAll('.vendor-pill').forEach(p => p.classList.remove('active'));
  const activePill = document.getElementById(`sc-${cat}`);
  if (activePill) activePill.classList.add('active');
}

// ═══════════════ COUNTER ANIMATION ═══════════════
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current.toLocaleString() + suffix;
    }, 30);
  });
}

function initAOS() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.aos').forEach(el => observer.observe(el));
}

// ═══════════════ PROPERTY DETAILS PAGE ═══════════════
function renderPropertyDetail() {
  const container = document.getElementById('property-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id') || '1', 10);
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  container.innerHTML = `
    <div style="margin-bottom:30px;">
      <div class="section-label">Property Details</div>
      <h1 style="font-family:var(--font-display); font-size:clamp(2rem, 4vw, 3rem); margin-bottom:10px;">${property.title}</h1>
      <p style="color:var(--text-light); font-size:1.1rem;"><i class="fas fa-map-marker-alt" style="color:var(--rose);"></i> ${property.location}</p>
    </div>

    <div style="display:grid; grid-template-columns: 2fr 1fr; gap:35px;" class="form-row">
      <div>
        <div style="border-radius:16px; overflow:hidden; margin-bottom:25px; box-shadow:var(--shadow-lg);">
          <img src="${property.img}" alt="${property.title}" style="width:100%; max-height:480px; object-fit:cover;">
        </div>
        <div style="background:#fff; padding:30px; border-radius:16px; box-shadow:var(--shadow-sm); border:1px solid var(--border);">
          <h3 style="font-family:var(--font-display); font-size:1.5rem; margin-bottom:15px;">Property Overview</h3>
          <p style="color:var(--text-light); line-height:1.8; font-size:1rem; margin-bottom:25px;">${property.desc}</p>

          <div class="featured-specs" style="margin-top:20px;">
            <div class="featured-spec"><div class="featured-spec-label">Type</div><div class="featured-spec-value">${property.type.toUpperCase()}</div></div>
            <div class="featured-spec"><div class="featured-spec-label">Area</div><div class="featured-spec-value">${property.area}</div></div>
            <div class="featured-spec"><div class="featured-spec-label">Status</div><div class="featured-spec-value">For ${property.status.toUpperCase()}</div></div>
            ${property.beds ? `<div class="featured-spec"><div class="featured-spec-label">Bedrooms</div><div class="featured-spec-value">${property.beds} Beds</div></div>` : ''}
            ${property.baths ? `<div class="featured-spec"><div class="featured-spec-label">Bathrooms</div><div class="featured-spec-value">${property.baths} Baths</div></div>` : ''}
          </div>
        </div>
      </div>

      <div>
        <div style="background:#fff; padding:30px; border-radius:16px; box-shadow:var(--shadow-lg); border:1px solid var(--border); position:sticky; top:100px;">
          <div style="font-size:.85rem; font-weight:700; color:var(--text-light); text-transform:uppercase; letter-spacing:1px;">Asking Price</div>
          <div style="font-family:var(--font-display); font-size:2rem; font-weight:700; color:var(--rose); margin:5px 0 20px;">${property.price}</div>

          <form onsubmit="submitContact(event)">
            <div class="form-field" style="margin-bottom:15px;">
              <label>Your Name *</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="form-field" style="margin-bottom:15px;">
              <label>Phone / WhatsApp *</label>
              <input type="tel" placeholder="03184195665" required>
            </div>
            <div class="form-field" style="margin-bottom:20px;">
              <label>Message</label>
              <textarea placeholder="I am interested in this property..." rows="3"></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width:100%; justify-content:center; padding:14px;"><i class="fas fa-paper-plane"></i> Request Private Tour</button>
          </form>

          <a href="https://wa.me/923188791637?text=Inquiry%20for%20${encodeURIComponent(property.title)}" target="_blank" class="btn-outline-white" style="width:100%; justify-content:center; margin-top:12px; background:#25D366; color:#fff; border:none; padding:12px;"><i class="fab fa-whatsapp"></i> WhatsApp Agent</a>
        </div>
      </div>
    </div>
  `;
}

// ═══════════════ INITIALIZATION ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initAOS();

  const st = document.getElementById('scroll-top');
  if (st) st.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const page = document.body.dataset.page;
  if (page === 'home') {
    initSlider();
    renderHomeFeatured();
    renderHomeRecent();
    renderAgentCards('#home-agents');
  }
  if (page === 'properties') initFilters('props-grid');
  if (page === 'agents') renderAgentCards('#all-agents');
  if (page === 'property-detail') renderPropertyDetail();
  if (page === 'vendors') {
    renderVendors();
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat) filterVendorCategory(cat);
  }

  // Stats counter trigger
  const statsEl = document.querySelector('.stats-bar');
  if (statsEl) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(statsEl);
  }
});
