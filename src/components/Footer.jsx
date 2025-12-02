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
            <a href="#" style={{ color: 'var(--muted)' }}>Home</a> ·{' '}
            <a href="#" style={{ color: 'var(--muted)' }}>Services</a>
          </p>
          <p>
            <a href="#" style={{ color: 'var(--muted)' }}>Platform</a> ·{' '}
            <a href="#" style={{ color: 'var(--muted)' }}>Support</a>
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
        .foot-bottom {
          max-width: var(--max-width);
          margin: 18px auto 0;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          text-align: center;
        }
      `}</style>
    </footer>
  );
}