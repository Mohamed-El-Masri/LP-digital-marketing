import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';
import SharedActions from './SharedActions';

const OffersPage: React.FC = () => {
  const packages = [
    {
      title: 'باقة البداية',
      price: '2,999 ريال/شهر',
      originalPrice: '4,499 ريال',
      description: 'مثالية للشركات الجديدة التي تسعى لبناء حضورها الرقمي',
      features: [
        'إدارة وسائل التواصل الاجتماعي',
        'إعداد SEO أساسي',
        'إنشاء المحتوى (12 منشور/شهر)',
        'تقرير أداء شهري',
        'دعم عبر البريد الإلكتروني',
        'استشارة شهرية'
      ],
      badge: 'الأكثر شعبية',
      validUntil: '2025-12-31',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🌟'
    },
    {
      title: 'باقة النمو',
      price: '5,999 ريال/شهر',
      originalPrice: '8,399 ريال',
      description: 'حل شامل للشركات النامية التي تريد توسيع نطاق وصولها',
      features: [
        'كل ما في باقة البداية',
        'SEO متقدم وإعلانات PPC',
        'إنشاء المحتوى (25 منشور/شهر)',
        'حملات توليد العملاء المحتملين',
        'مكالمات استراتيجية أسبوعية',
        'دعم أولوية',
        'تحليلات متقدمة'
      ],
      badge: 'أفضل قيمة',
      validUntil: '2025-12-31',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '🚀'
    },
    {
      title: 'باقة المؤسسات',
      price: 'حسب الطلب',
      originalPrice: null,
      description: 'حلول مخصصة للمؤسسات الكبيرة والشركات متعددة الجنسيات',
      features: [
        'تطوير استراتيجية مخصصة',
        'مدير حساب مخصص',
        'فريق تسويق متكامل',
        'تحليلات وتقارير متقدمة',
        'دعم على مدار الساعة',
        'مراجعات ربع سنوية للأعمال',
        'تدريب الفريق'
      ],
      badge: 'مؤسسات',
      validUntil: '2025-12-31',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '🏢'
    }
  ];

  const limitedOffers = [
    {
      title: 'تدقيق موقع مجاني',
      description: 'احصل على تحليل شامل لأداء موقعك الإلكتروني ونقاط التحسين',
      value: 'بقيمة 1,500 ريال',
      cta: 'احصل عليه مجاناً',
      icon: '🔍',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      timeLeft: '15 يوم متبقي'
    },
    {
      title: 'خصم 60% على الشهر الأول',
      description: 'العملاء الجدد يحصلون على خصم 60% على اشتراكهم الأول',
      value: 'وفر حتى 5,000 ريال',
      cta: 'احصل على الخصم',
      icon: '💰',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      timeLeft: '7 أيام متبقية'
    },
    {
      title: 'استشارة استراتيجية مجانية',
      description: 'جلسة استشارية لمدة ساعة مع خبرائنا لوضع استراتيجية مخصصة',
      value: 'بقيمة 800 ريال',
      cta: 'احجز الآن',
      icon: '💡',
      color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      timeLeft: '30 يوم متبقي'
    }
  ];

  const addOns = [
    {
      title: 'تصميم الجرافيك',
      description: 'تصاميم احترافية للمنشورات والإعلانات',
      price: '500 ريال/تصميم',
      icon: '🎨'
    },
    {
      title: 'إدارة الإعلانات',
      description: 'إدارة متخصصة لحملاتك الإعلانية',
      price: '1,200 ريال/شهر',
      icon: '📢'
    },
    {
      title: 'تطوير الموقع',
      description: 'تطوير وتحسين موقعك الإلكتروني',
      price: 'من 8,000 ريال',
      icon: '💻'
    },
    {
      title: 'تصوير المنتجات',
      description: 'تصوير احترافي لمنتجاتك وخدماتك',
      price: '200 ريال/صورة',
      icon: '📸'
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-button">العودة للرئيسية</Link>
        <h1 className="page-title">العروض الخاصة</h1>
      </header>
      
      <div className="page-content">
        <section className="intro-section animate-fadeInUp">
          <div className="intro-content">
            <h2>عروض حصرية محدودة الوقت</h2>
            <p>
              استفد من عروضنا الحصرية محدودة الوقت وابدأ رحلة التسويق الرقمي 
              مع توفير كبير. هذه العروض متاحة لفترة محدودة فقط!
            </p>
            <div className="offer-countdown">
              <div className="countdown-item">
                <span className="countdown-number">15</span>
                <span className="countdown-label">يوم</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">07</span>
                <span className="countdown-label">ساعة</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">23</span>
                <span className="countdown-label">دقيقة</span>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div className="offers-illustration">
              <div className="offer-circle">
                <div className="center-icon">🎁</div>
                <div className="floating-offer offer-1">60%</div>
                <div className="floating-offer offer-2">🆓</div>
                <div className="floating-offer offer-3">💰</div>
                <div className="floating-offer offer-4">⭐</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="limited-offers animate-fadeInUp">
          <h3 className="section-title">عروض محدودة الوقت</h3>
          <div className="limited-offers-grid">
            {limitedOffers.map((offer, index) => (
              <div 
                key={index} 
                className="limited-offer-card"
                style={{background: offer.color}}
              >
                <div className="offer-header">
                  <div className="offer-icon">{offer.icon}</div>
                  <span className="time-left">{offer.timeLeft}</span>
                </div>
                <h4>{offer.title}</h4>
                <p>{offer.description}</p>
                <span className="offer-value">{offer.value}</span>
                <button className="offer-cta">{offer.cta}</button>
              </div>
            ))}
          </div>
        </section>

        <section className="packages-section animate-fadeInUp">
          <h3 className="section-title">باقات الخدمات</h3>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className="package-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
                <div 
                  className="package-header"
                  style={{background: pkg.color}}
                >
                  <div className="package-icon">{pkg.icon}</div>
                  <h4>{pkg.title}</h4>
                </div>
                <div className="package-content">
                  <div className="pricing">
                    <span className="current-price">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="original-price">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p>{pkg.description}</p>
                  <ul className="features-list">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="valid-until">صالح حتى: {pkg.validUntil}</div>
                  <Link to="/contact" className="package-cta">
                    ابدأ الآن
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="add-ons-section animate-fadeInUp">
          <h3 className="section-title">خدمات إضافية</h3>
          <div className="add-ons-grid">
            {addOns.map((addOn, index) => (
              <div key={index} className="add-on-card">
                <div className="add-on-icon">{addOn.icon}</div>
                <h4>{addOn.title}</h4>
                <p>{addOn.description}</p>
                <div className="add-on-price">{addOn.price}</div>
                <button className="add-on-btn">إضافة للباقة</button>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonial-section animate-fadeInUp">
          <div className="testimonial-container">
            <h3>ماذا يقول عملاؤنا عن عروضنا</h3>
            <div className="testimonial-quote">
              <p>"حصلت على خصم 60% على الشهر الأول وكانت هذه أفضل استثمار قمت به لشركتي. النتائج فاقت توقعاتي!"</p>
              <div className="quote-author">
                <span className="author-name">سارة الزهراني</span>
                <span className="author-title">مؤسسة متجر إلكتروني</span>
              </div>
            </div>
          </div>
        </section>

        <section className="offers-cta animate-fadeInUp">
          <div className="cta-container">
            <div className="cta-content">
              <h2>لا تفوت هذه الفرصة الذهبية!</h2>
              <p>
                هذه العروض متاحة لفترة محدودة جداً. احجز استشارتك المجانية اليوم 
                واحصل على خطة مخصصة لنمو عملك الرقمي.
              </p>
              <div className="urgency-indicator">
                <span className="urgency-icon">⚡</span>
                <span>متبقي فقط 48 ساعة على انتهاء العرض!</span>
              </div>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                  احجز استشارتك المجانية
                </Link>
                <a href="tel:+966551234567" className="cta-button secondary">
                  اتصل الآن
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* المكون المشترك للإجراءات */}
      <SharedActions />
    </div>
  );
};

export default OffersPage;
