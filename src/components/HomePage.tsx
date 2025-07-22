import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const sections = [
    { id: 'about', title: 'من نحن', description: 'تعرف على شركتنا وفلسفتها في التسويق الرقمي', icon: '🌟' },
    { id: 'services', title: 'خدماتنا', description: 'مجموعة شاملة من خدمات التسويق الرقمي', icon: '🚀' },
    { id: 'contact', title: 'تواصل معنا', description: 'طرق متعددة للوصول إلينا والحصول على استشارة', icon: '📞' },
    { id: 'partners', title: 'شركاؤنا', description: 'عرض لشراكاتنا التجارية الناجحة', icon: '🤝' },
    { id: 'numbers', title: 'أرقامنا', description: 'إحصائيات وإنجازات توضح نجاحنا', icon: '📊' },
    { id: 'portfolio', title: 'أعمالنا', description: 'مجموعة من مشاريعنا السابقة ودراسات الحالة', icon: '💼' },
    { id: 'offers', title: 'العروض الخاصة', description: 'عروض وخصومات حصرية لفترة محدودة', icon: '🎁' },
  ];

  return (
    <div className="homepage">
      {/* خلفية متحركة */}
      <div className="animated-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate-fadeInUp">
            شريكك في النجاح الرقمي
            <span className="gradient-text">حلول تسويقية متقدمة</span>
          </h1>
          <p className="hero-subtitle animate-fadeInUp">
            نساعدك في بناء حضور رقمي قوي وزيادة مبيعاتك من خلال استراتيجيات تسويقية مبتكرة ومدروسة
          </p>
          <div className="hero-cta animate-fadeInUp">
            <Link to="/contact" className="hero-btn primary">
              ابدأ مشروعك
            </Link>
            <Link to="/services" className="hero-btn secondary">
              تعرف على خدماتنا
            </Link>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="phone-mockup animate-float">
            <div className="phone-screen">
              <div className="screen-header">
                <h3>لوحة الأرقام</h3>
                <p>إحصائيات ديناميكية</p>
              </div>
              <div className="stats-grid">
                <div className="stats-slider">
                  <div className="stat-card">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">عميل راضٍ</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">2M+</span>
                    <span className="stat-label">عميل محتمل</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">250%</span>
                    <span className="stat-label">نمو متوسط</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">معدل النجاح</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">سنة خبرة</span>
                  </div>
                </div>
                <div className="stats-indicators">
                  <div className="stats-dot"></div>
                  <div className="stats-dot"></div>
                  <div className="stats-dot"></div>
                  <div className="stats-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">استكشف خدماتنا</h2>
          <div className="cards-container">
            {sections.map((section, index) => (
              <Link 
                key={section.id} 
                to={`/${section.id}`} 
                className={`card animate-fadeInUp`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="card-shimmer"></div>
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="card-icon">{section.icon}</div>
                  <h3 className="card-title">{section.title}</h3>
                  <p className="card-description">{section.description}</p>
                
                </div>
                <div className="card-arrow"></div>
                <div className="card-glow"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              هل أنت مستعد لنقل عملك إلى المستوى التالي؟
            </h2>
            <p className="cta-description">
              انضم إلى أكثر من 500 شركة تثق في خدماتنا لتحقيق النجاح الرقمي
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                ابدأ رحلتك معنا
              </Link>
              <Link to="/portfolio" className="cta-button secondary">
                استعرض أعمالنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
