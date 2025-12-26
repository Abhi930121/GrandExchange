import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function ContactUs() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-inner">
          <h1>Contact Us</h1>
          <p className="lead">
            Have questions? We'd love to hear from you. Get in touch with our team!
          </p>
        </div>
      </section>

      <div className="content">
        <h2>Get In Touch</h2>
        <p style={{ textAlign: 'center' }}>
          We're here to help and answer any questions you might have. 
          We look forward to hearing from you!
        </p>
      </div>

      <section className="contact-section">
        <div className="contact-inner">
          {/* WhatsApp Card */}
          <div className="contact-card whatsapp-card">
            <div className="icon-circle whatsapp-bg">
              <img src="/images/whatsapp.png" alt="WhatsApp" style={{ width: '32px', height: '32px' }} />
            </div>
            <h3>WhatsApp</h3>
            <p className="contact-value">+91 7587914617</p>
            <p className="contact-desc">Available 24/7 for instant support</p>
            <a href="https://wa.me/917587914617" className="contact-btn whatsapp-btn-style">
              Chat Now
            </a>
          </div>

          {/* Email Card */}
          <div className="contact-card">
            <div className="icon-circle email-bg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p className="contact-value">GrandExchange@gmail.com</p>
            <p className="contact-desc">We'll respond within 24 hours</p>
            <a href="mailto:GrandExchange@gmail.com" className="contact-btn email-btn-style">
              Send Email
            </a>
          </div>

          {/* Website Card */}
          <div className="contact-card">
            <div className="icon-circle website-bg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
            </div>
            <h3>Website</h3>
            <p className="contact-value">grandexchange.co.in</p>
            <p className="contact-desc">Visit our official website</p>
            <a href="https://grandexchange.co.in" className="contact-btn website-btn-style">
              Visit Site
            </a>
          </div>
        </div>
      </section>

      {/* Big WhatsApp CTA */}
      <a className="whatsapp-btn" href="https://wa.me/917587914617">
        <img src="/images/whatsapp.png" alt="" style={{ width: '26px', height: '26px', marginRight: '10px', verticalAlign: 'middle' }} />
        WHATSAPP US NOW
      </a>

      <Footer />
      <WhatsAppFloat />

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 20px 60px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.2), rgba(3,6,15,0.4));
          mix-blend-mode: multiply;
        }
        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }
        .hero-inner {
          max-width: 920px;
          position: relative;
          z-index: 2;
          margin: 0 auto;
          text-align: center;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          color: #8ee07f;
          margin-bottom: 18px;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          font-size: 18px;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }
        .content {
          max-width: 900px;
          margin: 40px auto;
          padding: 28px;
          background: rgba(0,0,0,0.3);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .content h2 {
          color: var(--accent);
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          margin-bottom: 16px;
          text-align: center;
        }
        .content p {
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 16px;
          color: #fff;
        }
        .contact-section {
          padding: 20px 20px 40px;
        }
        .contact-inner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .contact-card {
          background: rgba(0,0,0,0.32);
          padding: 32px 24px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }
        .icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .whatsapp-bg {
          background: linear-gradient(135deg, #25d366, #128c7e);
        }
        .email-bg {
          background: linear-gradient(135deg, var(--accent), #ff8c00);
        }
        .website-bg {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
        .contact-card h3 {
          color: #fff;
          font-size: 22px;
          margin: 0 0 12px;
        }
        .contact-value {
          color: var(--accent);
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 8px;
        }
        .contact-desc {
          color: var(--muted);
          font-size: 14px;
          margin: 0 0 20px;
        }
        .contact-btn {
          display: inline-block;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .whatsapp-btn-style {
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: #fff;
        }
        .whatsapp-btn-style:hover {
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        }
        .email-btn-style {
          background: linear-gradient(135deg, var(--accent), #ff8c00);
          color: #000;
        }
        .email-btn-style:hover {
          box-shadow: 0 4px 20px rgba(255, 180, 0, 0.4);
        }
        .website-btn-style {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
        }
        .website-btn-style:hover {
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto;
          padding: 14px 28px;
          border-radius: 40px;
          width: 90%;
          max-width: 360px;
          text-align: center;
          font-weight: 800;
          background: rgba(255,255,255,0.05);
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        @media (max-width: 900px) {
          .contact-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .contact-inner {
            grid-template-columns: 1fr;
          }
          .hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
}