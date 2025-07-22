import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';
import './NumbersPage.css';
import SharedActions from './SharedActions';

const NumbersPage: React.FC = () => {
  const mainStats = [
    { 
      number: '500+', 
      label: 'عميل سعيد', 
      description: 'شركات ساعدناها في تحقيق النجاح الرقمي',
      icon: '😊',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      number: '2M+', 
      label: 'عميل محتمل تم توليده', 
      description: 'عملاء محتملون عالي الجودة لعملائنا',
      icon: '🎯',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      number: '250%', 
      label: 'متوسط زيادة العائد', 
      description: 'متوسط زيادة عائد الاستثمار لعملائنا',
      icon: '📈',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    { 
      number: '98%', 
      label: 'معدل رضا العملاء', 
      description: 'نسبة العملاء الراضين عن خدماتنا',
      icon: '⭐',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    { 
      number: '75+', 
      label: 'خبير متخصص', 
      description: 'فريق من خبراء التسويق الرقمي المحترفين',
      icon: '👥',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    { 
      number: '6', 
      label: 'سنوات خبرة', 
      description: 'سنوات من الخبرة والتميز في السوق',
      icon: '🏆',
      color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
    }
  ];

  const industryStats = [
    { industry: 'التجارة الإلكترونية', growth: '+320%', projects: 150 },
    { industry: 'الخدمات المالية', growth: '+280%', projects: 85 },
    { industry: 'الرعاية الصحية', growth: '+250%', projects: 95 },
    { industry: 'التعليم', growth: '+300%', projects: 70 },
    { industry: 'التكنولوجيا', growth: '+350%', projects: 120 },
    { industry: 'العقارات', growth: '+220%', projects: 60 }
  ];

  const globalPresence = [
    { region: 'المملكة العربية السعودية', clients: 200, growth: '+45%' },
    { region: 'دولة الإمارات العربية المتحدة', clients: 150, growth: '+38%' },
    { region: 'دولة الكويت', clients: 80, growth: '+42%' },
    { region: 'مملكة البحرين', clients: 45, growth: '+35%' },
    { region: 'سلطنة عُمان', clients: 35, growth: '+40%' },
    { region: 'دولة قطر', clients: 25, growth: '+50%' }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-button">العودة للرئيسية</Link>
        <h1 className="page-title">أرقامنا</h1>
      </header>
      
      <div className="page-content">
        <section className="intro-section animate-fadeInUp">
          <div className="intro-content">
            <h2>النجاح بالأرقام</h2>
            <p>
              إنجازاتنا تتحدث عن نفسها. إليك المقاييس التي تُظهر التزامنا 
              بتقديم نتائج استثنائية وتحقيق النجاح لعملائنا في رحلتهم الرقمية.
            </p>
            <div className="intro-highlights">
              <div className="highlight-stat">
                <span className="highlight-number">+500</span>
                <span className="highlight-text">مشروع ناجح</span>
              </div>
              <div className="highlight-stat">
                <span className="highlight-number">98%</span>
                <span className="highlight-text">رضا العملاء</span>
              </div>
              <div className="highlight-stat">
                <span className="highlight-number">6+</span>
                <span className="highlight-text">سنوات خبرة</span>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div className="numbers-illustration">
              <div className="stats-circle">
                <div className="center-icon">📊</div>
                <div className="floating-number num-1">250%</div>
                <div className="floating-number num-2">2M+</div>
                <div className="floating-number num-3">500+</div>
                <div className="floating-number num-4">98%</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="main-stats-section">
          <h2 className="section-title">إحصائياتنا الرئيسية</h2>
          <div className="numbers-stats-grid">
            {mainStats.map((stat, index) => (
              <div 
                key={index} 
                className={`numbers-stat-card animate-fadeInUp`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="stat-header"
                  style={{background: stat.color}}
                >
                  <div className="numbers-stat-icon">{stat.icon}</div>
                  <div className="numbers-stat-number">{stat.number}</div>
                </div>
                <div className="stat-content">
                  <h3>{stat.label}</h3>
                  <p>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="industry-performance animate-fadeInUp">
          <h2 className="section-title">الأداء حسب القطاع</h2>
          <div className="industry-grid">
            {industryStats.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-header">
                  <h3>{industry.industry}</h3>
                  <span className="growth-badge">{industry.growth}</span>
                </div>
                <div className="industry-details">
                  <div className="detail-item">
                    <span className="detail-label">عدد المشاريع</span>
                    <span className="detail-value">{industry.projects}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">متوسط النمو</span>
                    <span className="detail-value">{industry.growth}</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{width: `${Math.min(parseInt(industry.growth.replace('%', '').replace('+', '')) / 4, 100)}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="global-presence animate-fadeInUp">
          <h2 className="section-title">انتشارنا الجغرافي</h2>
          <div className="presence-grid">
            {globalPresence.map((region, index) => (
              <div key={index} className="region-card">
                <div className="region-flag">🌍</div>
                <h4>{region.region}</h4>
                <div className="region-stats">
                  <div className="region-stat">
                    <span className="stat-label">العملاء</span>
                    <span className="stat-value">{region.clients}</span>
                  </div>
                  <div className="region-stat">
                    <span className="stat-label">النمو السنوي</span>
                    <span className="stat-value">{region.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="achievements-section animate-fadeInUp">
          <h2 className="section-title">إنجازاتنا الحديثة</h2>
          <div className="achievements-timeline">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>أفضل وكالة تسويق رقمي 2025</h4>
                <p>تم منحها من قبل جوائز التميز الرقمي العربية</p>
                <span className="achievement-date">يناير 2025</span>
              </div>
            </div>
            
            <div className="achievement-item">
              <div className="achievement-icon">🚀</div>
              <div className="achievement-content">
                <h4>أسرع 10 شركات نموًا في القطاع</h4>
                <p>مُدرجة في مجلة الأعمال والنمو التجاري</p>
                <span className="achievement-date">ديسمبر 2024</span>
              </div>
            </div>
            
            <div className="achievement-item">
              <div className="achievement-icon">⭐</div>
              <div className="achievement-content">
                <h4>تقييم 5 نجوم في رضا العملاء</h4>
                <p>بناءً على أكثر من 300 تقييم عميل</p>
                <span className="achievement-date">نوفمبر 2024</span>
              </div>
            </div>
            
            <div className="achievement-item">
              <div className="achievement-icon">🌟</div>
              <div className="achievement-content">
                <h4>شهادة الآيزو للجودة العالمية</h4>
                <p>حصلنا على شهادة ISO 9001:2015 للجودة</p>
                <span className="achievement-date">أكتوبر 2024</span>
              </div>
            </div>
          </div>
        </section>

        <section className="numbers-cta animate-fadeInUp">
          <div className="cta-content">
            <h2>هل تريد أن تكون جزءًا من قصة نجاحنا؟</h2>
            <p>انضم إلى مئات الشركات التي حققت نموًا استثنائيًا معنا</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                ابدأ رحلتك معنا
              </Link>
              <Link to="/portfolio" className="cta-button secondary">
                شاهد قصص النجاح
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* المكون المشترك للإجراءات */}
      <SharedActions />
    </div>
  );
};

export default NumbersPage;
