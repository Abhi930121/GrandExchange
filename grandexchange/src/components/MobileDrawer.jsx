import { Link } from 'react-router-dom';

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      <div 
        className={`drawer ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.target.classList.contains('drawer') && onClose()}
      >
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/casino" onClick={onClose}>Casino</Link>
        <Link to="/cricket" onClick={onClose}>Cricket</Link>
        <Link to="/football" onClick={onClose}>Football</Link>
        <Link to="/card" onClick={onClose}>Card Games</Link>
        <Link to="/about" onClick={onClose}>About</Link>
        
        <div style={{ marginTop: '12px' }}>
          <a 
            className="cta-btn" 
            href="https://wa.me/917587914617"
            style={{ display: 'inline-block', padding: '10px 16px' }}
          >
            Click for ID
          </a>
        </div>
      </div>

      <style jsx>{`
        .drawer {
          position: fixed;
          top: 0;
          left: -280px;
          width: 280px;
          height: 100%;
          background: #0b0b0b;
          padding: 22px;
          transition: all 0.28s ease;
          z-index: 90;
        }
        .drawer.open {
          left: 0;
        }
        .drawer a {
          display: block;
          color: var(--muted);
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </>
  );
}