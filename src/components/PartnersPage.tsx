import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';

const PartnersPage: React.FC = () => {
  const partners = [
    { 
      name: 'شركة التقنية المتقدمة', 
      industry: 'التكنولوجيا', 
      description: 'شركة رائدة في تطوير البرمجيات والحلول التقنية',
      logo: '💻',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      name: 'مجموعة التجارة العالمية', 
      industry: 'التجارة الإلكترونية', 
      description: 'سلسلة متاجر عالمية متخصصة في التجارة الإلكترونية',
      logo: '🛒',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      name: 'بنك المستقبل الأول', 
      industry: 'الخدمات المصرفية', 
      description: 'مؤسسة مصرفية رائدة في الخدمات المالية الرقمية',
      logo: '🏦',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    { 
      name: 'مجموعة الرعاية الصحية', 
      industry: 'الرعاية الصحية', 
      description: 'مقدم خدمات طبية متطورة ومتخصصة',
      logo: '🏥',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    { 
      name: 'أكاديمية التعلم الذكي', 
      industry: 'التعليم', 
      description: 'منصة تعليمية إلكترونية متطورة',
      logo: '🎓',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    { 
      name: 'شركة الطاقة المتجددة', 
      industry: 'الطاقة', 
      description: 'حلول الطاقة المتجددة والمستدامة',
      logo: '🌱',
      color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
    }
  ];

  const achievements = [
    {
      title: 'زيادة متوسطة في المبيعات',
      percentage: '+250%',
      description: 'متوسط زيادة المبيعات لشركائنا خلال 6 أشهر'
    },
    {
      title: 'تحسن الحضور الرقمي',
      percentage: '+400%',
      description: 'زيادة التفاعل عبر منصات التواصل الاجتماعي'
    },
    {
      title: 'عائد الاستثمار',
      percentage: '+180%',
      description: 'متوسط عائد الاستثمار في الحملات التسويقية'
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-button">العودة للرئيسية</Link>
        <h1 className="page-title">شركاؤنا</h1>
      </header>
      
      <div className="page-content">
        <section className="intro-section animate-fadeInUp">
          <div className="intro-content">
            <h2>شراكات استراتيجية ناجحة</h2>
            <p>
              نفخر بالعمل مع شركات رائدة في مختلف القطاعات، حيث نقدم نتائج 
              تسويقية استثنائية من خلال التعاون والشراكة الحقيقية. شركاؤنا هم 
              شاهد على جودة خدماتنا وتميزنا في السوق.
            </p>
            <div className="partnership-stats">
              {achievements.map((achievement, index) => (
                <div key={index} className="partners-stat-card">
                  <span className="partners-stat-percentage">{achievement.percentage}</span>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="intro-image">
            <div className="partners-illustration">
              <div className="partnership-circle">
                <div className="center-logo">🤝</div>
                <div className="orbit-element orbit-1">💼</div>
                <div className="orbit-element orbit-2">🎯</div>
                <div className="orbit-element orbit-3">📈</div>
                <div className="orbit-element orbit-4">⭐</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="partners-showcase">
          <h2 className="section-title">شركاؤنا المميزون</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`partner-card animate-fadeInUp`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="partner-header"
                  style={{background: partner.color}}
                >
                  <div className="partner-logo">{partner.logo}</div>
                  <span className="industry-tag">{partner.industry}</span>
                </div>
                <div className="partner-content">
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                  <div className="partner-success">
                    <div className="success-metric">
                      <span className="metric-label">زيادة المبيعات</span>
                      <span className="metric-value">+{Math.floor(Math.random() * 200 + 150)}%</span>
                    </div>
                    <div className="success-metric">
                      <span className="metric-label">نمو الجمهور</span>
                      <span className="metric-value">+{Math.floor(Math.random() * 300 + 200)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="partnership-benefits animate-fadeInUp">
          <h2>مزايا الشراكة معنا</h2>
          <div className="benefits-container">
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <h4>النمو المشترك</h4>
                <p>استراتيجيات تعاونية تفيد جميع الأطراف وتحقق النمو المستدام</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔗</div>
                <h4>تبادل الموارد</h4>
                <p>الوصول إلى قدرات وخبرات موسعة من خلال الشراكة</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌍</div>
                <h4>توسيع الأسواق</h4>
                <p>الوصول إلى جماهير وأسواق جديدة من خلال التعاون</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💡</div>
                <h4>الابتكار المشترك</h4>
                <p>تطوير حلول مبتكرة من خلال الجمع بين الخبرات</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <h4>قياس النتائج</h4>
                <p>تتبع دقيق للأداء وتحسين مستمر للشراكة</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <h4>الثقة والموثوقية</h4>
                <p>علاقات طويلة الأمد قائمة على الثقة والشفافية</p>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-testimonials animate-fadeInUp">
          <h2>ماذا يقول شركاؤنا</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"لقد حققنا نموًا هائلاً في مبيعاتنا الإلكترونية بفضل استراتيجيات التسويق الرقمي المبتكرة."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>أحمد المحمد</h4>
                  <span>مدير التسويق - شركة التقنية المتقدمة</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"الشراكة معهم كانت نقطة تحول في رحلتنا الرقمية. فريق محترف ونتائج فعلية."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>فاطمة العلي</h4>
                  <span>الرئيس التنفيذي - مجموعة التجارة العالمية</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-cta animate-fadeInUp">
          <div className="cta-content">
            <h2>هل تريد أن تكون شريكنا القادم؟</h2>
            <p>انضم إلى مجتمع شركائنا الناجحين واكتشف كيف يمكننا تحقيق النجاح معًا</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                ابدأ الشراكة الآن
              </Link>
              <Link to="/services" className="cta-button secondary">
                استكشف خدماتنا
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;
