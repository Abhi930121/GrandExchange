import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function About() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-inner">
          <h1>About GrandExchange</h1>
          <p className="lead">
            Learn about India's most trusted betting platform, offering safe, secure, and enjoyable gaming experiences.
          </p>
        </div>
      </section>

      <div className="content">
        <h2>Our Mission</h2>
        <p>
          GrandExchange aims to provide a safe and reliable online betting experience for users across India. 
          We prioritize transparency, security, and fairness in all our games.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become the leading platform for online betting by combining advanced technology, excellent customer 
          support, and innovative gaming options.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Licensed & Secure Platform</li>
          <li>Live Betting & Real-Time Odds</li>
          <li>24/7 Customer Support</li>
          <li>Multiple Game Options: Cricket, Football, Casino, Card Games</li>
          <li>Fast Deposits & Withdrawals</li>
          <li>Exclusive Promotions & Rewards</li>
        </ul>
      </div>

      <section className="about-section">
        <div className="about-inner">
          <div className="feature">
            <h3>Security</h3>
            <p>We use advanced encryption to ensure all your transactions and data are fully protected.</p>
          </div>
          <div className="feature">
            <h3>Fair Play</h3>
            <p>All games are monitored and audited to maintain fairness and transparency.</p>
          </div>
          <div className="feature">
            <h3>Support</h3>
            <p>Our customer service team is available 24/7 to assist you with any queries.</p>
          </div>
        </div>
      </section>

      <a className="whatsapp-btn" href="https://wa.me/917587914617">
        <img src="/images/whatsapp.png" alt="" style={{ width: '26px', height: '26px', marginRight: '10px', verticalAlign: 'middle' }} />
        WHATS APP US NOW
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
        .content ul {
          margin-left: 24px;
          margin-bottom: 24px;
        }
        .content li {
          margin-bottom: 10px;
        }
        .about-section {
          padding: 40px 20px;
        }
        .about-inner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px;
        }
        .feature {
          background: rgba(0,0,0,0.32);
          padding: 26px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .feature h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }
        .feature p {
          color: var(--muted);
          margin: 0;
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
        @media (max-width: 1100px) {
          .about-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 700px) {
          .about-inner {
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