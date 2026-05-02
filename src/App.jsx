import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Mail, ChevronRight, ChevronDown, ChevronUp, Zap, Info, Target, Search, Filter } from 'lucide-react';
import { COMPANIES, MATERIALS, CATEGORIES } from './data';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMat, setSelectedMat] = useState(null);
  const [activeCompany, setActiveCompany] = useState(COMPANIES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllMat, setShowAllMat] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnquiry = (type) => {
    const { name, email, requirement, message } = formData;
    
    // Construct message body
    const bodyText = `
*New Inquiry from Website*
*Name:* ${name}
*Email:* ${email}
*Requirement:* ${requirement}
*Message:* ${message}

---
Sent via ${activeCompany.name} Website
    `.trim();

    if (type === 'whatsapp') {
      // Get first phone number and clean it
      const phone = activeCompany.contact.split(',')[0].replace(/[^0-9]/g, '');
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(bodyText)}`;
      window.open(waUrl, '_blank');
    } else {
      const subject = `New Quote Inquiry: ${requirement || 'General Enquiry'}`;
      // For email, use plain text version (no asterisks)
      const emailBody = bodyText.replace(/\*/g, '');
      const mailtoUrl = `mailto:${activeCompany.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    }

    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };


  const filteredMaterials = useMemo(() => {
    return MATERIALS.filter(m => {
      const matchesSearch = m.grade.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (m.search_keywords || []).some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === 'all' || m.catKey === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="app-root">
      {/* Navbar */}
      <nav style={styles.nav}>
        <div className="container" style={styles.navContent}>
          <div style={styles.logo}>
            <span style={{ color: activeCompany.color }}>{activeCompany.name.split(' ')[0].toUpperCase()}</span> {activeCompany.name.split(' ').slice(1).join(' ').toUpperCase()}
          </div>
          <div className="nav-links" style={styles.navLinks}>
            <a href="#home" style={styles.link}>Home</a>
            <a href="#companies" style={styles.link}>Companies</a>
            <a href="#materials" style={styles.link}>Materials</a>
            <a href="#gallery" style={styles.link}>Gallery</a>
            <a href="#contact" style={styles.cta}>Get Quote</a>
          </div>
          <button className="menu-btn" style={styles.menuBtn} onClick={() => setIsMenuOpen(true)} aria-label="Open navigation menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={styles.mobileMenu}
          >
            <button style={styles.closeBtn} onClick={() => setIsMenuOpen(false)} aria-label="Close navigation menu"><X size={32} /></button>
            <div style={styles.mobLinks}>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#companies" onClick={() => setIsMenuOpen(false)}>Companies</a>
              <a href="#materials" onClick={() => setIsMenuOpen(false)}>Materials</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" style={{ ...styles.hero, paddingTop: 'calc(var(--header-h) + 40px)', paddingBottom: 'var(--section-pad)' }}>
        <div className="container hero-grid" style={styles.heroGrid}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.eyebrow}>
              <Zap size={16} color={activeCompany.color} fill={activeCompany.color} /> 
              <span>PREMIUM STEEL SOLUTIONS</span>
            </div>
            <h1 style={styles.heroTitle}>
              STRENGTH IN <br />
              <span style={{ color: activeCompany.color }}>EVERY GRADE</span>
            </h1>
            <p style={styles.heroSub}>
              Leading supplier of high-quality Tool Steel, Alloy Steel and Specialty Grades. 
              Delivering precision and trust across Gujarat with 5 state-of-the-art facilities.
            </p>
            <div style={styles.heroBtns}>
              <a href="#materials" style={{ ...styles.primaryBtn, background: activeCompany.color }}>Explore Grades</a>
              <a href="#companies" style={styles.secondaryBtn}>Our Network</a>
            </div>
          </motion.div>
          <motion.div 
            style={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div style={{ ...styles.glowBox, borderColor: `${activeCompany.color}33` }}>
              <img src="/h13_steel.png" alt="Gayatri Steel Group - Premium H13 Hot Work Tool Steel" style={styles.heroImg} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" style={{ padding: 'var(--section-pad) 0', background: 'var(--bg-soft)' }}>
        <div className="container">
          <div style={styles.secHeader}>
            <h2 style={styles.secTitle}>OUR GROUP <span style={{ color: activeCompany.color }}>NETWORK</span></h2>
            <p style={styles.secDesc}>Spanning across key industrial hubs to serve you better.</p>
          </div>
          
          <div className="co-grid" style={styles.coGrid}>
            {COMPANIES.map((co) => (
              <motion.div 
                key={co.key}
                className="co-card"
                whileHover={{ y: -8, boxShadow: `0 20px 40px ${co.color}15` }}
                style={{ 
                  ...styles.coCard, 
                  background: activeCompany.key === co.key ? 'rgba(255,255,255,0.02)' : 'var(--bg-card)',
                  borderColor: activeCompany.key === co.key ? co.color : 'rgba(255,255,255,0.05)' 
                }}
                onClick={() => setActiveCompany(co)}
              >
                <div style={styles.coCardTop}>
                  <div style={{ ...styles.coInitials, background: co.color, color: '#fff' }}>{co.initials}</div>
                  <div style={styles.coMeta}>
                    <h3 style={styles.coName}>{co.name}</h3>
                    <span style={styles.coLoc}>{co.location}</span>
                  </div>
                </div>
                
                <div style={styles.coCardDivider}></div>
                
                <div style={styles.coDetailList}>
                  <div style={styles.coDetail}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}><MapPin size={18} color={co.color} /></span>
                    <span>{co.address}</span>
                  </div>
                  <div style={styles.coDetail}>
                    <span style={{ flexShrink: 0 }}><Phone size={18} color={co.color} /></span>
                    <span>{co.contact}</span>
                  </div>
                  <div style={styles.coDetail}>
                    <span style={{ flexShrink: 0 }}><Mail size={18} color={co.color} /></span>
                    <span>{co.email}</span>
                  </div>
                </div>

                {activeCompany.key === co.key && (
                  <motion.div layoutId="active-co" style={{ ...styles.activeBar, background: co.color }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Knowledge Section */}
      <section id="materials" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container">
          <div style={styles.secHeader}>
            <h2 style={styles.secTitle}>MATERIAL <span style={{ color: activeCompany.color }}>KNOWLEDGE</span></h2>
            <p style={styles.secDesc}>Complete technical specifications for professional grade selection.</p>
          </div>

          <div style={styles.controls}>
            <div style={styles.searchBar}>
              <Search size={20} color="var(--fg-mute)" />
              <input 
                type="text" 
                placeholder="Search grades, categories, keywords..." 
                style={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="cat-scroll" style={styles.catScroll}>
              {Object.entries(CATEGORIES).map(([key, label]) => (
                <button 
                  key={key} 
                  style={{ 
                    ...styles.catPill, 
                    background: activeCategory === key ? activeCompany.color : 'rgba(255,255,255,0.05)',
                    color: activeCategory === key ? '#fff' : 'var(--fg-dim)'
                  }}
                  onClick={() => setActiveCategory(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mat-grid" style={styles.matGrid}>
            {(showAllMat ? filteredMaterials : filteredMaterials.slice(0, 2)).map((mat) => (
              <motion.div 
                key={mat.grade}
                className="mat-card"
                style={{ ...styles.matCard, borderTop: `4px solid ${activeCompany.color}33` }}
                whileHover={{ y: -10, borderColor: activeCompany.color }}
                layout
                onClick={() => setSelectedMat(mat)}
              >
                <div style={styles.matHeader}>
                  <div>
                    <span style={{ ...styles.matCat, color: activeCompany.color }}>{mat.category}</span>
                    <h3 style={styles.matGrade}>{mat.grade}</h3>
                  </div>
                  <div style={{ ...styles.matIconCircle, background: `${activeCompany.color}10` }}>
                    <ChevronRight size={20} color={activeCompany.color} />
                  </div>
                </div>

                <div className="spec-grid" style={styles.specGrid}>
                  {Object.entries(mat.chemical_composition_percent || {}).slice(0, 4).map(([el, val]) => (
                    <div key={el} style={styles.specBox}>
                      <span style={styles.specEl}>{el}</span>
                      <span style={styles.specVal}>{val}</span>
                    </div>
                  ))}
                </div>

                <div style={styles.matFooter}>
                  <div style={styles.matTags}>
                    {mat.applications.slice(0, 2).map(app => (
                      <span key={app} style={styles.miniTag}>{app}</span>
                    ))}
                  </div>
                  <span style={{ ...styles.viewBtn, color: activeCompany.color }}>TECHNICAL DATA ›</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMaterials.length > 2 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
              <button 
                onClick={() => setShowAllMat(!showAllMat)}
                style={{ 
                  ...styles.secondaryBtn, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 10,
                  borderColor: activeCompany.color,
                  color: activeCompany.color
                }}
              >
                {showAllMat ? (
                  <>Show Less <ChevronUp size={20} /></>
                ) : (
                  <>View All Materials ({filteredMaterials.length}) <ChevronDown size={20} /></>
                )}
              </button>
            </div>
          )}
          {filteredMaterials.length === 0 && (
            <div style={styles.emptyState}>No materials match your search or filter.</div>
          )}
        </div>
      </section>

      {/* Material Detail Modal */}
      <AnimatePresence>
        {selectedMat && (
          <div style={styles.modalBg} onClick={() => setSelectedMat(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={styles.modal}
              onClick={e => e.stopPropagation()}
            >
              <div style={styles.modalHdr}>
                <div>
                  <h2 style={styles.modalTitle}>{selectedMat.grade}</h2>
                  <p style={{ color: activeCompany.color, fontWeight: 600 }}>{selectedMat.category}</p>
                </div>
                <button onClick={() => setSelectedMat(null)} style={styles.modalX}><X /></button>
              </div>
              
              <div style={styles.modalScroll}>
                <div style={styles.modalSec}>
                  <h4 style={styles.modalSecTitle}><Zap size={16} /> Chemical Composition (%)</h4>
                  <div style={styles.fullComp}>
                    {Object.entries(selectedMat.chemical_composition_percent || {}).map(([el, val]) => (
                      <div key={el} style={styles.fCompItem}>
                        <span style={styles.fCompEl}>{el}</span>
                        <div style={styles.fCompBar}>
                          <div style={{ 
                            ...styles.fCompFill, 
                            width: `${Math.min((parseFloat(val.replace(/[^0-9.]/g, ''))||0.1)/15*100, 100)}%`, 
                            background: activeCompany.color 
                          }}></div>
                        </div>
                        <span style={styles.fCompVal}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedMat.heat_treatment && (
                  <div style={styles.modalSec}>
                    <h4 style={styles.modalSecTitle}><Info size={16} /> Heat Treatment</h4>
                    <div style={styles.htList}>
                      {Object.entries(selectedMat.heat_treatment).map(([key, val]) => (
                        <div key={key} style={styles.htItem}>
                          <span style={{ ...styles.htKey, color: activeCompany.color }}>{key.replace(/_/g, ' ')}</span>
                          <p style={styles.modalText}>{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedMat.applications && (
                  <div style={styles.modalSec}>
                    <h4 style={styles.modalSecTitle}><Target size={16} /> Key Applications</h4>
                    <div style={styles.tagGrid}>
                      {selectedMat.applications.map(app => (
                        <span key={app} style={styles.tag}>{app}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, requirement: `Quote for ${selectedMat.grade}` }));
                      setSelectedMat(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{ 
                      ...styles.primaryBtn, 
                      background: activeCompany.color, 
                      width: '100%', 
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Request Quote for {selectedMat.grade}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery */}
      <section id="gallery" style={{ padding: 'var(--section-pad) 0', background: 'var(--bg-soft)' }}>
        <div className="container">
           <div style={styles.secHeader}>
            <h2 style={styles.secTitle}>VISUAL <span style={{ color: activeCompany.color }}>GALLERY</span></h2>
          </div>
          <div style={styles.galGrid}>
            <div style={styles.galItem}><img src="/h13_steel.png" alt="H13 Hot Work Steel - Gayatri Steel Group" style={styles.galImg} loading="lazy" /></div>
            <div style={styles.galItem}><img src="/d2_steel.png" alt="D2 Cold Work Steel - Gayatri Steel Group" style={styles.galImg} loading="lazy" /></div>
            <div style={styles.galItem}><img src="/p20_steel.png" alt="P20 Plastic Mould Steel - Gayatri Steel Group" style={styles.galImg} loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container contact-grid" style={styles.contactGrid}>
          <div>
            <h2 style={styles.secTitle}>GET A <br /><span style={{ color: activeCompany.color }}>QUOTE TODAY</span></h2>
            <p style={styles.secDesc}>Our experts are ready to assist you with the right grade and sizing.</p>
            <div style={{ marginTop: 40 }}>
              <div style={styles.conItem}>
                <span style={{ flexShrink: 0 }}><Phone color={activeCompany.color} /></span>
                <span>{activeCompany.contact}</span>
              </div>
              <div style={styles.conItem}>
                <span style={{ flexShrink: 0 }}><Mail color={activeCompany.color} /></span>
                <span>{activeCompany.email}</span>
              </div>
              <div style={styles.conItem}>
                <span style={{ flexShrink: 0 }}><MapPin color={activeCompany.color} /></span>
                <span>{activeCompany.address}</span>
              </div>
            </div>
          </div>
          <form 
            style={styles.contactForm} 
            onSubmit={(e) => {
              e.preventDefault();
              handleEnquiry('email');
            }}
          >
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              style={styles.input} 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              style={styles.input} 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input 
              type="text" 
              name="requirement"
              placeholder="Requirement (Grade, Size, Quantity)" 
              style={styles.input} 
              value={formData.requirement}
              onChange={handleInputChange}
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              style={{ ...styles.input, height: 120 }}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            
            <div style={{ display: 'flex', gap: 15, flexDirection: 'column' }}>
              <button 
                type="button"
                onClick={() => handleEnquiry('whatsapp')}
                style={{ 
                  ...styles.primaryBtn, 
                  background: '#25D366', 
                  width: '100%', 
                  color: '#fff', 
                  border: 'none', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10
                }}
              >
                <Phone size={18} /> Send via WhatsApp
              </button>
              <button 
                type="submit"
                style={{ 
                  ...styles.secondaryBtn, 
                  width: '100%', 
                  color: '#fff', 
                  cursor: 'pointer',
                  borderColor: activeCompany.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10
                }}
              >
                <Mail size={18} /> Send via Email
              </button>
            </div>

            <AnimatePresence>
              {isSent && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{ 
                    marginTop: 20, 
                    textAlign: 'center', 
                    color: '#25D366', 
                    fontWeight: 600,
                    fontSize: 14 
                  }}
                >
                  Redirecting to {activeCompany.name}...
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div className="container footer-content" style={styles.footContent}>
          <div style={styles.logo}>
            <span style={{ color: activeCompany.color }}>{activeCompany.name.split(' ')[0].toUpperCase()}</span> {activeCompany.name.split(' ').slice(1).join(' ').toUpperCase()}
          </div>
          <p style={styles.copy}>
            &copy; 2026 Gayatri Steel Group. All Rights Reserved. | Build by <a href="https://tdrstudio.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: activeCompany.color, fontWeight: 700 }}>TDR Studio</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, height: 'var(--header-h)', 
    background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 1000
  },
  navContent: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' },
  logo: { fontSize: 24, fontWeight: 800, letterSpacing: -1 },
  navLinks: { gap: 30, alignItems: 'center' },
  link: { fontSize: 13, fontWeight: 600, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1 },
  cta: { 
    padding: '10px 24px', background: '#fff', color: '#000', 
    borderRadius: 8, fontSize: 13, fontWeight: 800, textTransform: 'uppercase'
  },
  menuBtn: { alignItems: 'center', justifyContent: 'center' }, 
  mobileMenu: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: '#050505', zIndex: 2000, padding: 40,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
  },
  mobLinks: { display: 'flex', flexDirection: 'column', gap: 30, textAlign: 'center', fontSize: 32, fontWeight: 800 },
  closeBtn: { position: 'absolute', top: 30, right: 30 },
  hero: { padding: '180px 0 100px', minHeight: '100vh', display: 'flex', alignItems: 'center' },
  heroGrid: { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'center' },
  eyebrow: { display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 800, letterSpacing: 2, marginBottom: 20, opacity: 0.8 },
  heroTitle: { fontSize: 'clamp(48px, 8vw, 84px)', lineHeight: 1, marginBottom: 24, letterSpacing: -2 },
  heroSub: { fontSize: 18, color: 'var(--fg-dim)', maxWidth: 600, marginBottom: 40 },
  heroBtns: { display: 'flex', gap: 20 },
  primaryBtn: { padding: '18px 40px', borderRadius: 12, fontWeight: 800, textAlign: 'center', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 },
  secondaryBtn: { padding: '18px 40px', borderRadius: 12, border: '1px solid var(--bdr)', fontWeight: 800, fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 },
  heroVisual: { position: 'relative' },
  glowBox: { 
    borderRadius: 32, overflow: 'hidden', border: '1px solid',
    boxShadow: '0 40px 100px rgba(0,0,0,0.8)'
  },
  heroImg: { width: '100%', height: 'auto', display: 'block' },
  secHeader: { textAlign: 'center', marginBottom: 60 },
  secTitle: { marginBottom: 16, letterSpacing: -1 },
  secDesc: { fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--fg-dim)', maxWidth: 700, margin: '0 auto' },
  controls: { marginBottom: 50 },
  searchBar: { 
    width: '100%', maxWidth: 600, margin: '0 auto 30px', 
    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--bdr)',
    borderRadius: 16, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 15
  },
  searchInput: { flex: 1, height: 60, background: 'none', border: 'none', color: '#fff', fontSize: 16, outline: 'none' },
  catScroll: { display: 'flex', gap: 10, paddingBottom: 10, justifyContent: 'center' },
  catPill: { padding: '10px 24px', borderRadius: 30, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', transition: '0.3s' },
  matGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 30 },
  matCard: { 
    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(5,5,5,0.9))',
    padding: 35, 
    borderRadius: 32, 
    border: '1px solid var(--bdr)',
    cursor: 'pointer', 
    transition: '0.4s cubic-bezier(0.2, 0, 0, 1)', 
    position: 'relative',
    display: 'flex', 
    flexDirection: 'column', 
    gap: 25,
    backdropFilter: 'blur(10px)',
    overflow: 'hidden'
  },
  matHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  matIconCircle: { width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  matCat: { fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, display: 'block' },
  matGrade: { fontSize: 36, fontWeight: 900, letterSpacing: -1 },
  
  specGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 },
  specBox: { 
    background: 'rgba(255,255,255,0.015)', 
    padding: '12px 16px', 
    borderRadius: 14, 
    border: '1px solid rgba(255,255,255,0.04)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  specEl: { fontSize: 10, fontWeight: 800, opacity: 0.3, textTransform: 'uppercase', marginBottom: 2 },
  specVal: { fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' },
  
  matFooter: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 'auto', 
    paddingTop: 20, 
    borderTop: '1px solid rgba(255,255,255,0.05)',
    flexWrap: 'wrap',
    gap: 12
  },
  matTags: { 
    display: 'flex', 
    gap: 6, 
    flexWrap: 'wrap',
    flex: 1,
    minWidth: '150px'
  },
  miniTag: { 
    fontSize: 9, 
    fontWeight: 800, 
    padding: '4px 10px', 
    background: 'rgba(255,255,255,0.04)', 
    borderRadius: 6, 
    opacity: 0.5,
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  viewBtn: { 
    fontSize: 10, 
    fontWeight: 900, 
    letterSpacing: 1, 
    whiteSpace: 'nowrap',
    padding: '6px 0',
    display: 'flex',
    alignItems: 'center',
    gap: 4
  },

  emptyState: { textAlign: 'center', padding: 100, fontSize: 18, color: 'var(--fg-mute)' },
  modalBg: { 
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
    background: 'rgba(0,0,0,0.95)', zIndex: 3000, display: 'flex', 
    alignItems: 'center', justifyContent: 'center', padding: 20
  },
  modal: { 
    background: 'var(--bg-card)', width: '90%', maxWidth: 800, maxHeight: '90vh',
    borderRadius: 'clamp(20px, 4vw, 40px)', padding: 'clamp(20px, 5vw, 50px)', position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column'
  },
  modalScroll: { overflowY: 'auto', flex: 1, paddingRight: 10 },
  modalX: { position: 'absolute', top: 'clamp(15px, 3vw, 30px)', right: 'clamp(15px, 3vw, 30px)', opacity: 0.5, border: '1px solid var(--bdr)', borderRadius: '50%', padding: 8, background: 'var(--bg-card)', zIndex: 10 },
  modalTitle: { fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: 5, letterSpacing: -1 },
  modalSec: { marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 30 },
  modalSecTitle: { display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, textTransform: 'uppercase', marginBottom: 25, opacity: 0.6, letterSpacing: 2 },
  fullComp: { display: 'grid', gap: 15 },
  fCompItem: { display: 'flex', alignItems: 'center', gap: 20 },
  fCompEl: { width: 35, fontSize: 15, fontWeight: 800, opacity: 0.7 },
  fCompBar: { flex: 1, height: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 10 },
  fCompFill: { height: '100%', borderRadius: 10 },
  fCompVal: { width: 60, fontSize: 15, fontWeight: 700, textAlign: 'right', opacity: 0.9 },
  htList: { display: 'grid', gap: 20 },
  htItem: { display: 'flex', flexDirection: 'column', gap: 8 },
  htKey: { fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 },
  modalText: { fontSize: 16, color: '#ccc', lineHeight: 1.7 },
  tagGrid: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { padding: '10px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: 12, fontSize: 14, fontWeight: 600 },
  galGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 25 },
  galItem: { borderRadius: 28, overflow: 'hidden', aspectRatio: '16/10', border: '1px solid var(--bdr)' },
  galImg: { width: '100%', height: '100%', objectFit: 'cover' },
  coGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 },
  coCard: { 
    background: 'var(--bg-card)', padding: 'clamp(20px, 4vw, 32px)', borderRadius: 24, border: '1px solid',
    cursor: 'pointer', position: 'relative', transition: '0.4s cubic-bezier(0.2, 0, 0, 1)',
    overflow: 'hidden'
  },
  coCardTop: { display: 'flex', alignItems: 'center', gap: 20, marginBottom: 0 },
  coInitials: { 
    width: 60, height: 60, borderRadius: 16, display: 'flex', 
    alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, flexShrink: 0
  },
  coMeta: { display: 'flex', flexDirection: 'column' },
  coName: { fontSize: 22, fontWeight: 800, marginBottom: 4, letterSpacing: -0.5 },
  coLoc: { fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.5 },
  coCardDivider: { height: 1, background: 'rgba(255,255,255,0.05)', margin: '24px 0' },
  coDetailList: { display: 'flex', flexDirection: 'column', gap: 15 },
  coDetail: { display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--fg-dim)', lineHeight: 1.4 },
  activeBar: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 4 },
  
  contactGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(40px, 8vw, 80px)' },
  conItem: { display: 'flex', alignItems: 'center', gap: 20, marginBottom: 25, fontSize: 17, fontWeight: 500, color: 'var(--fg-dim)' },
  contactForm: { background: 'var(--bg-card)', padding: 'clamp(20px, 5vw, 45px)', borderRadius: 32, border: '1px solid var(--bdr)' },
  input: { 
    width: '100%', padding: '20px', background: 'rgba(255,255,255,0.02)', 
    border: '1px solid var(--bdr)', borderRadius: 16, color: '#fff', marginBottom: 20, fontSize: 16, outline: 'none' 
  },
  footer: { padding: 'clamp(40px, 8vw, 80px) 0', borderTop: '1px solid var(--bdr)', marginTop: 'clamp(60px, 12vw, 120px)' },
  footContent: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 },
  copy: { fontSize: 14, opacity: 0.3 }
};

export default App;
