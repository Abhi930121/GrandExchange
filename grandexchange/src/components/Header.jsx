import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="header" role="banner">
        <div className="wrap">
          <div className="brand">
            <div className="logo" aria-hidden="true"></div>
          </div>

          <nav className="nav" role="navigation" aria-label="Main">
            <Link to="/">Home</Link>
            <div className="has-dd">
              <a href="#">Services ▾</a>
              <ul className="dropdown">
                <li><Link to="/cricket">Cricket Betting</Link></li>
                <li><Link to="/casino">Casino Betting</Link></li>
                <li><Link to="/football">Football Betting</Link></li>
                <li><Link to="/card">Card Games</Link></li>
              </ul>
            </div>
            <li><Link to="/gaming-platform">Gaming Platform</Link></li>
            <Link to="/about">About</Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a className="cta-btn" href="https://wa.me/917587914617">Click for ID</a>
            <button 
              className="menu-btn" 
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <style jsx>{`
        .header {
          width: 100%;
          background: #474343;
          color: #111;
          position: sticky;
          top: 0;
          z-index: 60;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.06);
        }
        .wrap {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          gap: 16px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .logo {
          width: 170px;
          height: 56px;
          background: url('/images/grandexchange.png') center/contain no-repeat;
        }
        .nav {
          display: flex;
          gap: 22px;
          align-items: center;
          font-weight: 600;
        }
        .nav a {
          color: #111;
          padding: 8px 6px;
        }
        .nav a:hover {
          color: var(--accent);
        }
        .has-dd {
          position: relative;
        }
        .has-dd .dropdown {
          display: none;
          position: absolute;
          background: #fff;
          padding: 10px 0;
          list-style: none;
          margin: 0;
          min-width: 180px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          z-index: 100;
        }
        .has-dd:hover .dropdown {
          display: block;
        }
        .has-dd .dropdown li a {
          display: block;
          padding: 10px 15px;
          color: #333;
        }
        .has-dd .dropdown li a:hover {
          background: #f5f5f5;
        }
        .cta-btn {
          background: #000;
          color: #fff;
          padding: 12px 20px;
          border-radius: 28px;
          font-weight: 700;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
        }
        .menu-btn {
          display: none;
          background: transparent;
          border: 0;
          font-size: 26px;
          cursor: pointer;
        }
        @media (max-width: 700px) {
          .nav {
            display: none;
          }
          .menu-btn {
            display: block;
          }
          .logo {
            width: 140px;
            height: 48px;
          }
        }
      `}</style>
    </>
  );

}
