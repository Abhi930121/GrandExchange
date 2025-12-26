import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="foot-inner">
        <div className="foot-col">
          <h4>GrandExchange</h4>
          <p style={{ color: 'var(--muted)', maxWidth: '320px' }}>
            India's largest exchange platform. Trusted cricket demo ID platform & instant withdrawals.
          </p>
        </div>

        <div className="foot-col">
          <h4>Quick Links</h4>
          <p>
            <Link to="/" style={{ color: 'var(--muted)' }}>Home</Link> ·{' '}
            <Link to="/about" style={{ color: 'var(--muted)' }}>About</Link>
          </p>
          <p>
            <Link to="/contact" style={{ color: 'var(--muted)' }}>Contact Us</Link>
          </p>
        </div>

        <div className="foot-col">
          <h4>Legal</h4>
          <p>
            <Link to="/privacy-policy" style={{ color: 'var(--muted)' }}>Privacy Policy</Link>
          </p>
          <p>
            <Link to="/terms-conditions" style={{ color: 'var(--muted)' }}>Terms & Conditions</Link>
          </p>
        </div>

        <div className="foot-col">
          <h4>Contact</h4>
          <p style={{ color: 'var(--muted)' }}>
            WhatsApp: <strong style={{ color: '#fff' }}>+91 7587914617</strong>
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Email: <strong style={{ color: '#fff' }}>GrandExchange@gmail.com</strong>
          </p>
        </div>
      </div>

      <div className="foot-bottom">
        © {currentYear} GrandExchange.Live — All rights reserved.
      </div>

      <style jsx>{`
        .footer {
          background: #0b0b0b;
          padding: 36px 20px 18px;
          color: var(--muted);
        }
        .foot-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .foot-col {
          min-width: 180px;
          flex: 1;
        }
        .foot-col h4 {
          color: #fff;
          margin: 0 0 12px;
        }
        .foot-col p {
          margin-bottom: 6px;
        }
        .foot-col a:hover {
          color: var(--accent) !important;
        }
        .foot-bottom {
          max-width: var(--max-width);
          margin: 18px auto 0;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          text-align: center;
        }
        @media (max-width: 600px) {
          .foot-inner {
            flex-direction: column;
            gap: 20px;
          }
          .foot-col {
            min-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
