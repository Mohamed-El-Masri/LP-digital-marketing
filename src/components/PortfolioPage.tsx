import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';
import SharedActions from './SharedActions';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      title: 'حملة نمو التجارة الإلكترونية',
      client: 'متجر الأزياء العصرية',
      description: 'زيادة المبيعات الإلكترونية بنسبة 400% من خلال حملات تسويقية مستهدفة عبر وسائل التواصل',
      metrics: ['400% زيادة المبيعات', '250% نمو الزوار', '60% انخفاض تكلفة العميل'],
      category: 'التجارة الإلكترونية',
      image: '🛍️',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      duration: '6 أشهر',
      budget: '50,000 ريال'
    },
    {
      title: 'تحسين محركات البحث المحلية',
      client: 'سلسلة مطاعم الذواقة',
      description: 'تحسين الظهور في البحث المحلي مما أدى إلى زيادة عدد الزوار بنسبة 300% وافتتاح 15 فرع جديد',
      metrics: ['300% زيادة الزوار', '90% ترتيب محلي', '15 فرع جديد'],
      category: 'تحسين محركات البحث',
      image: '🍽️',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      duration: '8 أشهر',
      budget: '75,000 ريال'
    },
    {
      title: 'توليد العملاء المحتملين للتقنية',
      client: 'شركة البرمجيات المتقدمة',
      description: 'إنتاج أكثر من 2000 عميل محتمل مؤهل من خلال استراتيجية تسويق المحتوى المتكاملة',
      metrics: ['2000+ عميل محتمل', '35% معدل التحويل', '250% عائد الاستثمار'],
      category: 'تسويق B2B',
      image: '💻',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      duration: '4 أشهر',
      budget: '40,000 ريال'
    },
    {
      title: 'بناء الهوية الرقمية',
      client: 'شركة التقنية الناشئة',
      description: 'بناء الحضور الرقمي من الصفر إلى 3 مليون متابع عبر منصات التواصل الاجتماعي',
      metrics: ['3M متابع', '800K تفاعل شهري', '95% تذكر العلامة التجارية'],
      category: 'بناء العلامة التجارية',
      image: '🚀',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      duration: '12 شهر',
      budget: '120,000 ريال'
    },
    {
      title: 'حملة الإعلانات الرقمية المتكاملة',
      client: 'شركة الخدمات المالية',
      description: 'حملة إعلانية شاملة عبر جميع المنصات الرقمية حققت زيادة في العملاء الجدد بنسبة 180%',
      metrics: ['180% عملاء جدد', '45% انخفاض CPA', '320% زيادة الوعي'],
      category: 'الإعلانات المدفوعة',
      image: '💰',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      duration: '6 أشهر',
      budget: '90,000 ريال'
    },
    {
      title: 'تطوير موقع إلكتروني متقدم',
      client: 'مؤسسة التعليم الرقمي',
      description: 'تصميم وتطوير منصة تعليمية متكاملة مع نظام إدارة المحتوى وتطبيق جوال',
      metrics: ['500% زيادة التسجيل', '85% تحسن تجربة المستخدم', '40% زيادة الإيرادات'],
      category: 'تطوير المواقع',
      image: '🎓',
      color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      duration: '10 أشهر',
      budget: '150,000 ريال'
    }
  ];

  const categories = [
    { name: 'الكل', count: projects.length },
    { name: 'التجارة الإلكترونية', count: projects.filter(p => p.category === 'التجارة الإلكترونية').length },
    { name: 'تحسين محركات البحث', count: projects.filter(p => p.category === 'تحسين محركات البحث').length },
    { name: 'تسويق B2B', count: projects.filter(p => p.category === 'تسويق B2B').length },
    { name: 'بناء العلامة التجارية', count: projects.filter(p => p.category === 'بناء العلامة التجارية').length },
    { name: 'الإعلانات المدفوعة', count: projects.filter(p => p.category === 'الإعلانات المدفوعة').length },
    { name: 'تطوير المواقع', count: projects.filter(p => p.category === 'تطوير المواقع').length }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-button">العودة للرئيسية</Link>
        <h1 className="page-title">معرض أعمالنا</h1>
      </header>
      
      <div className="page-content">
        <section className="intro-section animate-fadeInUp">
          <div className="intro-content">
            <h2>قصص نجاحنا</h2>
            <p>
              استكشف معرض أعمالنا من الحملات الناجحة واكتشف كيف ساعدنا الشركات 
              في تحقيق أهدافها في التسويق الرقمي. كل مشروع هو قصة نجاح فريدة 
              تعكس خبرتنا وإبداعنا في هذا المجال.
            </p>
            <div className="portfolio-stats">
              <div className="portfolio-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">مشروع مكتمل</span>
              </div>
              <div className="portfolio-stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">معدل نجاح</span>
              </div>
              <div className="portfolio-stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">قطاع مختلف</span>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div className="portfolio-illustration">
              <div className="portfolio-circle">
                <div className="center-icon">💼</div>
                <div className="floating-project proj-1">📈</div>
                <div className="floating-project proj-2">🎯</div>
                <div className="floating-project proj-3">💡</div>
                <div className="floating-project proj-4">🏆</div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-filter animate-fadeInUp">
          <h3>تصفية المشاريع</h3>
          <div className="filter-tabs">
            {categories.map((category, index) => (
              <button key={index} className={`filter-tab ${index === 0 ? 'active' : ''}`}>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>
        
        <section className="portfolio-showcase">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`portfolio-card animate-fadeInUp`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="portfolio-header"
                  style={{background: project.color}}
                >
                  <div className="project-image">{project.image}</div>
                  <span className="category-tag">{project.category}</span>
                  <div className="project-overlay">
                    <div className="project-meta">
                      <span className="project-duration">المدة: {project.duration}</span>
                      <span className="project-budget">الميزانية: {project.budget}</span>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <h4>{project.client}</h4>
                  <p>{project.description}</p>
                  
                  <div className="project-metrics">
                    <h5>النتائج المحققة:</h5>
                    <div className="metrics-list">
                      {project.metrics.map((metric, idx) => (
                        <span key={idx} className="metric-tag">{metric}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    <button className="action-btn primary">عرض التفاصيل</button>
                    <button className="action-btn secondary">دراسة الحالة</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-testimonials animate-fadeInUp">
          <h2 className="section-title">شهادات العملاء</h2>
          <div className="testimonials-showcase">
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <p>"النتائج تجاوزت توقعاتنا بكثير. فريق محترف ومبدع حقق لنا نموًا هائلاً في مبيعاتنا الإلكترونية."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💼</div>
                <div className="author-info">
                  <h4>خالد الأحمد</h4>
                  <span>مدير التسويق - متجر الأزياء العصرية</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <p>"استراتيجية SEO التي وضعوها لنا كانت نقطة تحول حقيقية. زادت زياراتنا 300% في أقل من 8 أشهر."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍💼</div>
                <div className="author-info">
                  <h4>نورا السعيد</h4>
                  <span>مالكة - سلسلة مطاعم الذواقة</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="case-study-cta animate-fadeInUp">
          <div className="cta-content">
            <h2>هل تريد دراسات حالة مفصلة؟</h2>
            <p>
              احصل على تفاصيل أكثر حول منهجياتنا والنتائج المفصلة لمشاريعنا الناجحة.
              سنوضح لك كيف يمكننا تحقيق نتائج مماثلة لعملك.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                احصل على دراسات الحالة
              </Link>
              <Link to="/services" className="cta-button secondary">
                استكشف خدماتنا
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

export default PortfolioPage;
