import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Cricket() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-inner">
          <h1>Cricket Betting</h1>
          <p className="lead">
            GrandExchange brings you India's most trusted cricket betting experience with live odds, 
            instant deposits, fast withdrawals, and verified betting IDs.
          </p>
        </div>
      </section>

      <div className="content">
        <h2>Why Choose GrandExchange?</h2>
        <ul>
          <li>Live Cricket Odds Updates</li>
          <li>Instant Account Creation & Support</li>
          <li>Safe, Secured & Licensed Platform</li>
          <li>Real-Time Betting and Fast Withdrawals</li>
          <li>24/7 Customer Assistance</li>
        </ul>
      </div>

      <a className="whatsapp-btn" href="https://wa.me/917587914617">
        <img src="/images/whatsapp.png" alt="" style={{ width: '26px', height: '26px', verticalAlign: 'middle', marginRight: '10px' }} />
        WHATS APP US NOW
      </a>

      <Footer />
      <WhatsAppFloat />

      <style jsx>{`
        .hero {
          background-image: url('/images/b340566eb510527692129043eedd3985.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 20px 60px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.35), rgba(3,6,15,0.6));
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
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          margin: 0 0 18px;
          color: #8ee07f;
          line-height: 1.05;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          line-height: 1.7;
          font-size: 18px;
          margin: 0 0 26px;
        }
        .content {
          max-width: 900px;
          margin: 32px auto;
          background: rgba(0,0,0,0.3);
          padding: 28px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .content h2 {
          color: var(--accent);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .content ul {
          margin: 12px 0 18px 20px;
        }
        .content li {
          margin-bottom: 8px;
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto 38px;
          padding: 14px 28px;
          border-radius: 40px;
          border: 3px solid rgba(0,0,0,0.6);
          width: 360px;
          max-width: 92%;
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
        }
      `}</style>
    </>
  );
}