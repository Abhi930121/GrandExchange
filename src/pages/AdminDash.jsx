import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { signOut } from 'firebase/auth';

export default function AdminDash() {
  const [instaCount, setInstaCount] = useState(0);
  const [proofCount, setProofCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      } else {
        fetchCounts();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchCounts = async () => {
    try {
      const feedsSnapshot = await getDocs(collection(db, 'instafeeds'));
      setInstaCount(feedsSnapshot.size);

      const proofsSnapshot = await getDocs(collection(db, 'paymentproofs'));
      setProofCount(proofsSnapshot.size);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <button className="sidebar-toggle" id="toggleSidebarMobile">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
            <a href="/admindash" className="logo-text">
              <img src="https://themewagon.github.io/windster/images/logo.svg" alt="Logo" />
              <span>Admin</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="admin-layout">
        <aside className="sidebar">
          <div className="sidebar-content">
            <ul className="nav-list">
              <li>
                <a href="/admindash" className="nav-link active">
                  <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/addinstafeeds" className="nav-link">
                  <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                  </svg>
                  <span>Instagram Feeds</span>
                </a>
              </li>
              <li>
                <a href="/addpaymentproof" className="nav-link">
                  <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7h5l-5-5v5zm-8 4h10v2H7v-2zm0 4h10v2H7v-2z"/>
                  </svg>
                  <span>Add Payment Proof</span>
                </a>
              </li>
              <li>
                <a onClick={handleLogout} className="nav-link" style={{ cursor: 'pointer' }}>
                  <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h6a1 1 0 110 2H5v10h5a1 1 0 110 2H4a1 1 0 01-1-1V4zm10.293 2.293a1 1 0 011.414 1.414L13.414 10l1.293 1.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2z" clipRule="evenodd"/>
                  </svg>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                </svg>
              </div>
              <div className="stat-content">
                <p>Total Instagram Feeds</p>
                <h2>{instaCount}</h2>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v2H4zm0 7h16v2H4zm0 7h16v2H4z" />
                </svg>
              </div>
              <div className="stat-content">
                <p>Total Payment Proofs</p>
                <h2>{proofCount}</h2>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .navbar {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 30;
          padding: 12px 20px;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sidebar-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .logo-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 700;
          color: #111;
        }
        .logo-text img {
          height: 24px;
        }
        .admin-layout {
          display: flex;
          padding-top: 64px;
          min-height: 100vh;
          background: #f9fafb;
        }
        .sidebar {
          width: 256px;
          background: #fff;
          border-right: 1px solid #e5e7eb;
          position: fixed;
          left: 0;
          top: 64px;
          bottom: 0;
          overflow-y: auto;
        }
        .sidebar-content {
          padding: 20px 12px;
        }
        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          color: #374151;
          border-radius: 8px;
          transition: 0.2s;
          text-decoration: none;
          margin-bottom: 4px;
        }
        .nav-link:hover, .nav-link.active {
          background: #f3f4f6;
          color: #111827;
        }
        .icon {
          width: 24px;
          height: 24px;
          color: #6b7280;
        }
        .nav-link:hover .icon, .nav-link.active .icon {
          color: #111827;
        }
        .main-content {
          margin-left: 256px;
          flex: 1;
          padding: 24px;
        }
        .dashboard-header h1 {
          font-size: 28px;
          color: #111827;
          margin-bottom: 24px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .stat-card {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .stat-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-icon.blue {
          background: #dbeafe;
          color: #2563eb;
        }
        .stat-icon.green {
          background: #d1fae5;
          color: #059669;
        }
        .stat-icon svg {
          width: 32px;
          height: 32px;
        }
        .stat-content p {
          color: #6b7280;
          font-size: 14px;
          margin: 0 0 8px;
        }
        .stat-content h2 {
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
          .main-content {
            margin-left: 0;
          }
          .sidebar-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}