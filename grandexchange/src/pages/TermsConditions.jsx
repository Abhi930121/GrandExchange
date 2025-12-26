import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function TermsConditions() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-inner">
          <h1>Terms & Conditions</h1>
          <p className="lead">
            Please read these terms carefully before using our platform.
          </p>
        </div>
      </section>

      <div className="warning-banner">
        <span>⚠️</span> Please read these Terms & Conditions carefully before using grandexchange.co.in
      </div>

      <div className="content">
        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">1</span>
            <h2>Acceptance of Terms</h2>
          </div>
          <p>By accessing or using this website, you agree to be bound by these Terms & Conditions.</p>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">2</span>
            <h2>Nature of Services</h2>
          </div>
          <ul>
            <li>Grandexchange.co.in is a service and information-based platform.</li>
            <li>We do not provide financial, investment, or legal advice.</li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">3</span>
            <h2>User Responsibility</h2>
          </div>
          <p>By using this website, you agree that:</p>
          <ul>
            <li>All information you provide is accurate and truthful</li>
            <li>You use the services at your own risk</li>
            <li>You comply with all applicable local laws and regulations</li>
          </ul>
        </div>

        <div className="policy-section warning-section">
          <div className="section-header">
            <span className="section-number warning">4</span>
            <h2>No Investment or Profit Guarantee</h2>
          </div>
          <ul>
            <li>Any information provided on this website is for general purposes only</li>
            <li>We do not guarantee profits, returns, or financial success of any kind</li>
            <li>Users should conduct their own research before making decisions</li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">5</span>
            <h2>Limitation of Liability</h2>
          </div>
          <p>Grandexchange.co.in shall not be held liable for:</p>
          <ul>
            <li>Any direct or indirect losses</li>
            <li>Technical errors, service interruptions, or third-party failures</li>
            <li>Decisions made based on information available on the website</li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">6</span>
            <h2>Prohibited Activities</h2>
          </div>
          <p>Users must not:</p>
          <ul>
            <li>Engage in illegal or fraudulent activities</li>
            <li>Attempt to hack, misuse, or disrupt the website</li>
            <li>Use website content without authorization</li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">7</span>
            <h2>Intellectual Property</h2>
          </div>
          <ul>
            <li>All content, logos, text, and design on this website are the property of Grandexchange.</li>
            <li>Unauthorized use is strictly prohibited.</li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">8</span>
            <h2>Termination</h2>
          </div>
          <p>We reserve the right to suspend or terminate user access if these terms are violated.</p>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">9</span>
            <h2>Changes to Terms</h2>
          </div>
          <ul>
            <li>These Terms & Conditions may be updated at any time without prior notice.</li>
            <li>Continued use of the website implies acceptance of updated terms.</li>
          </ul>
        </div>

        <div className="policy-section">
          <div className="section-header">
            <span className="section-number">10</span>
            <h2>Contact Information</h2>
          </div>
          <div className="contact-box">
            <p>📧 <strong>Email:</strong> <a href="mailto:GrandExchange@gmail.com">GrandExchange@gmail.com</a></p>
            <p>📱 <strong>WhatsApp:</strong> <a href="https://wa.me/917587914617">+91 7587914617</a></p>
            <p>🌐 <strong>Website:</strong> <a href="https://grandexchange.co.in">https://grandexchange.co.in</a></p>
          </div>
        </div>
      </div>

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
        .warning-banner {
          max-width: 900px;
          margin: 24px auto 0;
          padding: 16px 24px;
          background: rgba(255, 180, 0, 0.1);
          border: 1px solid var(--accent);
          border-radius: 8px;
          text-align: center;
          color: var(--accent);
          font-weight: 600;
        }
        .warning-banner span {
          margin-right: 8px;
        }
        .content {
          max-width: 900px;
          margin: 24px auto 40px;
          padding: 28px;
          background: rgba(0,0,0,0.3);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .policy-section {
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .policy-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }
        .section-number {
          width: 32px;
          height: 32px;
          background: var(--accent);
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }
        .section-number.warning {
          background: #ff4757;
          color: #fff;
        }
        .section-header h2 {
          color: var(--accent);
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          margin: 0;
        }
        .warning-section .section-header h2 {
          color: #ff4757;
        }
        .warning-section {
          background: rgba(255, 71, 87, 0.1);
          border: 1px solid rgba(255, 71, 87, 0.3);
          padding: 20px;
          border-radius: 8px;
        }
        .content p {
          font-size: 16px;
          line-height: 1.8;
          color: #fff;
          margin-bottom: 12px;
        }
        .content ul {
          margin-left: 24px;
          margin-bottom: 0;
        }
        .content li {
          margin-bottom: 10px;
          color: var(--muted);
          line-height: 1.7;
        }
        .contact-box {
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 8px;
          margin-top: 16px;
        }
        .contact-box p {
          margin-bottom: 10px;
        }
        .contact-box p:last-child {
          margin-bottom: 0;
        }
        .contact-box a {
          color: var(--accent);
          transition: color 0.2s;
        }
        .contact-box a:hover {
          color: var(--accent-2);
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
        @media (max-width: 700px) {
          .hero h1 {
            font-size: 32px;
          }
          .section-header h2 {
            font-size: 18px;
          }
          .warning-banner {
            margin: 24px 16px 0;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}