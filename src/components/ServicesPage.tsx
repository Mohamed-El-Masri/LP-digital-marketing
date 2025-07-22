import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'تحسين محركات البحث (SEO)',
      description: 'نحسن ترتيب موقعك في نتائج البحث لزيادة الزيارات المجانية وجذب العملاء المستهدفين بفعالية أكبر',
      features: [
        'تحليل الكلمات المفتاحية المتخصص', 
        'تحسين المحتوى والهيكل التقني', 
        'بناء الروابط الخارجية القوية', 
        'تحسين السرعة والأداء',
        'تقارير ترتيب شهرية مفصلة',
        'استراتيجية SEO محلية متقدمة'
      ],
      icon: '🔍',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'إدارة وسائل التواصل الاجتماعي',
      description: 'نبني حضورك الرقمي القوي على منصات التواصل مع استراتيجية محتوى فعالة تزيد التفاعل وتبني المجتمع',
      features: [
        'استراتيجية المحتوى المخصصة والإبداعية', 
        'إدارة يومية احترافية للحسابات', 
        'تصميم منشورات جذابة ومتميزة', 
        'تحليل الأداء والتقارير التفصيلية',
        'إدارة التفاعل مع المتابعين',
        'حملات زيادة المتابعين المستهدفين'
      ],
      icon: '📱',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'الإعلانات المدفوعة (PPC)',
      description: 'حملات إعلانية مدروسة ومحسنة على جوجل وفيسبوك وإنستغرام لتحقيق أقصى عائد على الاستثمار',
      features: [
        'استهداف دقيق للجمهور المناسب', 
        'إدارة الميزانيات بكفاءة عالية', 
        'تصميم إعلانات جذابة ومؤثرة', 
        'اختبار A/B المتقدم للحملات',
        'تحليل مفصل ودقيق للنتائج',
        'تحسين مستمر وتطوير الأداء'
      ],
      icon: '🎯',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'تسويق المحتوى',
      description: 'إنشاء محتوى جذاب يحول الزوار إلى عملاء',
      features: ['كتابة المقالات', 'محتوى الفيديو', 'الإنفوجرافيك', 'حملات البريد الإلكتروني'],
      icon: '✍️',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      title: 'تصميم وتطوير المواقع',
      description: 'مواقع ويب عصرية ومتجاوبة تحقق أهدافك التجارية',
      features: ['تصميم متجاوب', 'تجربة مستخدم محسنة', 'سرعة التحميل', 'أمان عالي'],
      icon: '🎨',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      title: 'التحليلات والتقارير',
      description: 'فهم أداء حملاتك واتخاذ قرارات مدروسة بناءً على البيانات',
      features: ['تحليل البيانات', 'تقارير مفصلة', 'KPIs مخصصة', 'توصيات محسنة'],
      icon: '📊',
      color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-button">العودة للرئيسية</Link>
        <h1 className="page-title">خدماتنا</h1>
      </header>
      
      <div className="page-content">
        <section className="intro-section animate-fadeInUp">
          <div className="intro-content">
            <h2>حلول التسويق الرقمي الشاملة</h2>
            <p>
              نقدم مجموعة شاملة من خدمات التسويق الرقمي المصممة لتنمية عملك 
              وتعظيم حضورك على الإنترنت. من تحسين محركات البحث إلى التسويق عبر 
              وسائل التواصل الاجتماعي، نحن هنا لمساعدتك في تحقيق أهدافك.
            </p>
          </div>
          <div className="intro-image">
            <div className="services-illustration">
              <div className="service-icon-float">🚀</div>
              <div className="service-icon-float">📱</div>
              <div className="service-icon-float">💡</div>
              <div className="service-icon-float">📊</div>
            </div>
          </div>
        </section>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card animate-fadeInUp`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div 
                className="service-header"
                style={{background: service.color}}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <div className="service-content">
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="service-action">
                  <Link to="/contact" className="service-button">
                    احصل على استشارة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="services-cta animate-fadeInUp">
          <div className="cta-content">
            <h2>هل تحتاج خدمة مخصصة؟</h2>
            <p>
              نقوم بتصميم حلول مخصصة تناسب احتياجات عملك الفريدة. 
              تواصل معنا لمناقشة متطلباتك الخاصة.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                تواصل معنا الآن
              </Link>
              <Link to="/portfolio" className="cta-button secondary">
                شاهد أعمالنا السابقة
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
