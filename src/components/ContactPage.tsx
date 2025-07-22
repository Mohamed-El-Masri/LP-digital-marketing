
import { Link } from 'react-router-dom';
import './PageLayout.css';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-button">العودة للرئيسية</Link>
        <h1 className="page-title">تواصل معنا</h1>
      </header>
      
      <div className="page-content">
        <section className="intro-section animate-fadeInUp">
          <div className="intro-content">
            <h2>ابدأ رحلتك الرقمية معنا</h2>
            <p>
              هل أنت مستعد لبدء رحلة التسويق الرقمي؟ نحن متحمسون للاستماع إليك! 
              تواصل معنا اليوم وسنساعدك في تحقيق أهدافك الرقمية.
            </p>
            <div className="contact-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <span>استشارة مجانية</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🕐</span>
                <span>رد سريع خلال 24 ساعة</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span>حلول مخصصة</span>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div className="contact-illustration">
              <div className="contact-circle">
                <div className="contact-icon">📞</div>
                <div className="floating-contact-element">💬</div>
                <div className="floating-contact-element">✉️</div>
                <div className="floating-contact-element">📍</div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="contact-grid">
          <div className="contact-info animate-fadeInUp">
            <h3>معلومات التواصل</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-content">
                  <strong>الهاتف</strong>
                  <p>+966 55 123 4567</p>
                  <p>+966 11 234 5678</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-content">
                  <strong>البريد الإلكتروني</strong>
                  <p>info@digitalmarketing-sa.com</p>
                  <p>sales@digitalmarketing-sa.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-content">
                  <strong>العنوان</strong>
                  <p>شارع التقنية 123<br/>
                     الرياض، المملكة العربية السعودية<br/>
                     الرمز البريدي: 12345</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">⏰</div>
                <div className="method-content">
                  <strong>ساعات العمل</strong>
                  <p>الأحد - الخميس: 9:00 ص - 6:00 م<br/>
                     السبت: 10:00 ص - 4:00 م<br/>
                     الجمعة: مغلق</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>تابعنا على</h4>
              <div className="social-icons">
                <a href="#" className="social-icon twitter">🐦</a>
                <a href="#" className="social-icon linkedin">💼</a>
                <a href="#" className="social-icon instagram">📸</a>
                <a href="#" className="social-icon youtube">📹</a>
                <a href="#" className="social-icon whatsapp">💬</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form animate-fadeInUp">
            <h3>أرسل لنا رسالة</h3>
            <form className="form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">الاسم الأول</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">الاسم الأخير</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="company">اسم الشركة</label>
                <input type="text" id="company" name="company" />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">الخدمة المطلوبة</label>
                <select id="service" name="service" required>
                  <option value="">اختر الخدمة</option>
                  <option value="seo">تحسين محركات البحث</option>
                  <option value="social">التسويق عبر وسائل التواصل</option>
                  <option value="ppc">الإعلانات المدفوعة</option>
                  <option value="content">تسويق المحتوى</option>
                  <option value="web">تصميم وتطوير المواقع</option>
                  <option value="analytics">التحليلات والتقارير</option>
                  <option value="custom">خدمة مخصصة</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="budget">الميزانية المتوقعة</label>
                <select id="budget" name="budget">
                  <option value="">اختر الميزانية</option>
                  <option value="small">أقل من 10,000 ريال</option>
                  <option value="medium">10,000 - 50,000 ريال</option>
                  <option value="large">50,000 - 100,000 ريال</option>
                  <option value="enterprise">أكثر من 100,000 ريال</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea id="message" name="message" rows={5} placeholder="أخبرنا عن مشروعك وأهدافك..." required></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <span>إرسال الرسالة</span>
                <span className="button-icon">🚀</span>
              </button>
            </form>
          </div>
        </div>

        <section className="contact-cta animate-fadeInUp">
          <div className="cta-card">
            <h3>هل تحتاج لاستشارة فورية؟</h3>
            <p>احجز مكالمة مجانية مع أحد خبرائنا لمناقشة احتياجاتك</p>
            <div className="cta-actions">
              <a href="tel:+966551234567" className="cta-action call">
                <span className="action-icon">📞</span>
                <span>اتصل الآن</span>
              </a>
              <a href="https://wa.me/966551234567" className="cta-action whatsapp">
                <span className="action-icon">💬</span>
                <span>واتساب</span>
              </a>
              <a href="#" className="cta-action meeting">
                <span className="action-icon">📅</span>
                <span>احجز اجتماع</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
