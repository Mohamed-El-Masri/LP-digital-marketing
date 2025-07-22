import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-button">العودة للرئيسية</Link>
        <h1 className="page-title">من نحن</h1>
      </header>
      
      <div className="page-content">
        <section className="intro-section animate-fadeInUp">
          <div className="intro-content">
            <h2>قصتنا</h2>
            <p>
              نحن شركة رائدة في مجال التسويق الرقمي، مكرسة لمساعدة الشركات على الازدهار 
              في المشهد الرقمي. بسنوات من الخبرة وشغف بالابتكار، نقوم بإنشاء حلول متطورة 
              تحقق نتائج فعلية وملموسة.
            </p>
            <div className="intro-stats">
              <div className="intro-stat">
                <span className="stat-number">+5</span>
                <span className="stat-text">سنوات خبرة</span>
              </div>
              <div className="intro-stat">
                <span className="stat-number">500+</span>
                <span className="stat-text">مشروع ناجح</span>
              </div>
              <div className="intro-stat">
                <span className="stat-number">50+</span>
                <span className="stat-text">خبير متخصص</span>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div className="image-placeholder">
              <div className="floating-elements">
                <div className="element element-1">📈</div>
                <div className="element element-2">💡</div>
                <div className="element element-3">🎯</div>
                <div className="element element-4">🚀</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="values-section animate-fadeInUp">
          <h2 className="section-title">قيمنا الأساسية</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>الابتكار</h3>
              <p>نبقى في المقدمة من خلال اتباع أحدث الاتجاهات والتقنيات الرقمية</p>
            </div>
            <div className="value-card">
              <h3>النتائج</h3>
              <div className="value-icon">📊</div>
              <p>نركز على تقديم نتائج قابلة للقياس وتحقيق عائد استثمار حقيقي</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>الشراكة</h3>
              <p>نعمل بشكل وثيق مع عملائنا كشركاء موثوقين في رحلة النجاح</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>التميز</h3>
              <p>نسعى للتميز في كل ما نقوم به ونلتزم بأعلى معايير الجودة</p>
            </div>
          </div>
        </section>
        
        <section className="team-section animate-fadeInUp">
          <div className="team-content">
            <h2>فريقنا المتميز</h2>
            <p>
              يجمع فريقنا المتنوع من خبراء التسويق الرقمي بين الإبداع والخبرة التقنية 
              والتفكير الاستراتيجي لتقديم نتائج استثنائية لعملائنا. نحن نؤمن بقوة التعاون 
              والعمل الجماعي لتحقيق أهداف عملائنا.
            </p>
            <div className="team-highlights">
              <div className="highlight">
                <h4>خبرة متنوعة</h4>
                <p>فريق من المتخصصين في مختلف مجالات التسويق الرقمي</p>
              </div>
              <div className="highlight">
                <h4>تطوير مستمر</h4>
                <p>نستثمر في تطوير مهارات فريقنا باستمرار</p>
              </div>
              <div className="highlight">
                <h4>روح الفريق</h4>
                <p>بيئة عمل تعاونية تشجع على الابتكار والإبداع</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-section animate-fadeInUp">
          <div className="mission-container">
            <div className="mission-card">
              <h3>رؤيتنا</h3>
              <p>
                أن نكون الشريك الأول للشركات في رحلتها نحو التحول الرقمي وتحقيق 
                النجاح في العالم الرقمي المتطور.
              </p>
            </div>
            <div className="mission-card">
              <h3>رسالتنا</h3>
              <p>
                تمكين الشركات من تحقيق أقصى استفادة من الفرص الرقمية من خلال 
                استراتيجيات مبتكرة وحلول مخصصة.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
