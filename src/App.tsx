import React, { useState, useMemo, useEffect, useCallback, memo } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate
} from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Search, 
  X, 
  Menu,
  Wrench, 
  Zap, 
  Battery, 
  Cpu, 
  Settings, 
  ArrowRight,
  Instagram,
  Facebook
} from 'lucide-react';
import { 
  businessInfo, 
  categories, 
  products, 
  services, 
  heroImage, 
  aboutImage,
  Product 
} from './data/assets';
import './styles/App.css';

// --- Helper: WhatsApp Link Generator ---
const getWhatsAppLink = (productName?: string) => {
  const message = productName 
    ? `Merhaba, ${productName} ürünü hakkında bilgi alabilir miyim?` 
    : "Merhaba, servis ve yedek parçalar hakkında bilgi almak istiyorum.";
  return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
};

// --- Shared Components ---

const Navbar = memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const query = localSearch.trim();
    if (query) {
      navigate('/products', { state: { search: query } });
      setLocalSearch('');
      closeMenu();
    }
  }, [localSearch, navigate]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header>
      <div className="container header-content">
        <Link to="/" className="logo" onClick={closeMenu}>{businessInfo.name}</Link>
        
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Ana Sayfa</Link>
          <Link to="/products" className={pathname === '/products' ? 'active' : ''}>Ürünler</Link>
          <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Hizmetler</Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>Hakkımızda</Link>
          <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>İletişim</Link>
          
          <div className="mobile-search-container">
            <form className="header-search mobile" onSubmit={handleSearch}>
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Ürün ara..." 
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
            </form>
          </div>
        </nav>

        <div className="header-actions">
          <form className="header-search desktop" onSubmit={handleSearch}>
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Ürün ara..." 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              aria-label="Ürün ara"
            />
          </form>
          <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="btn btn-primary btn-sm hide-mobile">
            <Phone size={16} />
            <span>Hemen Ara</span>
          </a>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Menü">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
});

const Footer = memo(() => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3 className="logo">{businessInfo.name}</h3>
          <p>{businessInfo.description}</p>
        </div>
        <div className="footer-links">
          <h4>Hızlı Erişim</h4>
          <ul>
            <li><Link to="/products">Ürün Kataloğu</Link></li>
            <li><Link to="/services">Teknik Hizmetler</Link></li>
            <li><Link to="/about">Kurumsal</Link></li>
            <li><Link to="/contact">Bize Ulaşın</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>İletişim Bilgileri</h4>
          <p style={{display: 'flex', gap: '10px', alignItems: 'center'}}><MapPin size={16} color="var(--primary)" /> {businessInfo.address}</p>
          <p style={{display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px'}}><Phone size={16} color="var(--primary)" /> {businessInfo.phone}</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {businessInfo.name}. Tüm Hakları Saklıdır.
      </div>
    </div>
  </footer>
));

const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const waLink = useMemo(() => getWhatsAppLink(product.name), [product.name]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Kapat"><X size={24} /></button>
        <div className="modal-body">
          <div className="modal-image"><img src={product.image} alt={product.name} loading="lazy" /></div>
          <div className="modal-details">
            <span className="badge">{product.category}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="modal-actions">
              <button className="btn btn-whatsapp" onClick={() => window.open(waLink, '_blank')}>
                <MessageCircle size={20} /> WhatsApp Bilgi
              </button>
              <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="btn btn-outline">
                <Phone size={20} /> Telefon Et
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Page Components ---

const Home = () => {
  const navigate = useNavigate();
  const featured = useMemo(() => [
    { name: 'Aküler', category: 'aku', image: '/motorfoto/akü stock.jpg', icon: <Battery size={24} /> },
    { name: 'Elektronik Beyinler', category: 'yedek-parca', image: '/elektriliparca/akıllı kara beyin.webp', icon: <Cpu size={24} /> },
    { name: 'Şarj Sistemleri', category: 'sarj', image: '/motorfoto/or-tec akıllı sarj aleti.jpg', icon: <Settings size={24} /> }
  ], []);

  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url('${heroImage}')` }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-btns">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta">
              <MessageCircle size={18} /> WhatsApp Destek
            </a>
            <Link to="/products" className="btn btn-primary btn-cta">Ürünleri İncele</Link>
            <a href={businessInfo.locationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta">
              <MapPin size={18} /> Konumumuz
            </a>
            <Link to="/contact" className="btn btn-primary btn-cta">
              <Phone size={18} /> İletişim
            </Link>
            <a href="https://www.instagram.com/oner_seref/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta">
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/oner.seref?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta">
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Öne Çıkan <span>Kategoriler</span></h2>
          <div className="featured-grid">
            {featured.map((item, idx) => (
              <div key={idx} className="featured-card card" onClick={() => navigate('/products', { state: { category: item.category } })}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="featured-info">
                  {item.icon}
                  <h3>{item.name}</h3>
                  <span className="btn-text">Ürünleri Gör <ArrowRight size={16} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
      setSearch('');
    } else if (location.state?.search) {
      setSearch(location.state.search);
      setActiveCategory('all');
    }
    window.history.replaceState({}, document.title);
  }, [location.state]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return products.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch = !query || p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h2 className="section-title no-margin">Ürün <span>Kataloğu</span></h2>
        </div>
      </div>
      <section className="products-section">
        <div className="container">
          <div className="filter-bar">
            <div className="search-box">
              <Search size={22} />
              <input type="text" placeholder="Ürün veya parça ara..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="categories">
              {categories.map(c => (
                <button key={c.id} className={`cat-btn ${activeCategory === c.id ? 'active' : ''}`} onClick={() => setActiveCategory(c.id)}>
                  {c.name}
                </button>
              ))}
            </div>
          </div>
          <div className="product-grid">
            {filtered.map(p => (
              <div key={p.id} className="product-card card" onClick={() => setSelected(p)}>
                <div className="product-img">
                  <span className="stock-badge">Stokta</span>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="card-footer"><div className="btn-order">Sipariş Ver</div></div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="no-results">
              <p>Aradığınız kriterlere uygun sonuç bulunamadı.</p>
              <button className="btn btn-outline" onClick={() => { setSearch(''); setActiveCategory('all'); }}>Tüm Ürünleri Göster</button>
            </div>
          )}
        </div>
      </section>
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

const ServicesPage = () => (
  <div className="page-wrapper">
    <div className="page-header"><div className="container"><h2 className="section-title no-margin">Teknik <span>Hizmetler</span></h2></div></div>
    <section className="services-page-content">
      <div className="container">
        <div className="services-intro">
          <p>{businessInfo.description}</p>
        </div>
        <div className="service-grid">
          {services.map((s, idx) => (
            <div key={idx} className="service-card card">
              <img src={s.image} alt={s.name} loading="lazy" />
              <div className="service-info">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="page-wrapper">
    <div className="page-header"><div className="container"><h2 className="section-title no-margin">Kurumsal <span>Kimliğimiz</span></h2></div></div>
    <section className="about-page-content">
      <div className="container">
        <div className="about-layout">
          <div className="about-image"><img src={aboutImage} alt="Şeref Motor Atölye" /></div>
          <div className="about-content">
            <h2>Biz Kimiz?</h2>
            <p className="about-text">Manisa Turgutlu'da uzun yıllardır elektrikli motor servisi ve yedek parça satışı alanında hizmet vermekteyiz. Deneyimli usta kadromuzla, orijinal parça garantisi ve profesyonel işçilik ile motorunuzun ömrünü uzatıyoruz.</p>
            <div className="stats">
              <div className="stat-item"><Zap size={24} /> <div><h4>Hızlı Çözüm</h4></div></div>
              <div className="stat-item"><Wrench size={24} /> <div><h4>Uzman Kadro</h4></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => (
  <div className="page-wrapper">
    <div className="page-header"><div className="container"><h2 className="section-title no-margin">İletişim <span>Kanalları</span></h2></div></div>
    <section className="contact-page-content">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-card"><Phone size={32} /> <div><h4>Müşteri Hizmetleri</h4><p>{businessInfo.phone}</p></div></div>
            <div className="info-card clickable" onClick={() => window.open(getWhatsAppLink(), '_blank')}>
              <MessageCircle size={32} /> <div><h4>WhatsApp Destek</h4><p>Hemen Mesaj Gönder</p></div>
            </div>
            <div className="info-card"><MapPin size={32} /> <div><h4>Mağaza Adresi</h4><p>{businessInfo.address}</p></div></div>
            
            <div className="social-contact-section">
              <h4>Sosyal Medya Hesaplarımız</h4>
              <div className="social-links-row">
                <a href="https://www.instagram.com/oner_seref/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                  <Instagram size={20} /> Instagram
                </a>
                <a href="https://www.facebook.com/oner.seref?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="social-link-item">
                  <Facebook size={20} /> Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="map-box">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.347565314782!2d27.7011!3d38.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI1JzI2LjAiTiAyN8KwNDInMDQuMCJF!5e0!3m2!1str!2str!4v1651840000000" 
              width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Şeref Motor Konum"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <main><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes></main>
    <Footer />
  </Router>
);

export default App;
