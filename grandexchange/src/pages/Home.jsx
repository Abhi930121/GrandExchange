import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
  const [feeds, setFeeds] = useState([]);
  const [proofs, setProofs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedIndex, setFeedIndex] = useState(0);
  const [proofIndex, setProofIndex] = useState(0);

  const feedsPerPage = 3;
  const proofsPerPage = 3;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch Instagram Feeds
      const feedsQuery = query(collection(db, 'instafeeds'), orderBy('created_at', 'desc'));
      const feedsSnapshot = await getDocs(feedsQuery);
      const feedsData = feedsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFeeds(feedsData);

      // Fetch Payment Proofs
      const proofsQuery = query(collection(db, 'paymentproofs'), orderBy('uploaded_at', 'desc'));
      const proofsSnapshot = await getDocs(proofsQuery);
      const proofsData = proofsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProofs(proofsData);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const openWhatsApp = (caption) => {
    const msg = encodeURIComponent(`Hello! I'm interested in: ${caption}`);
    window.open(`https://wa.me/917587914617?text=${msg}`, '_blank');
  };

  const handleFeedPrev = () => {
    setFeedIndex((prev) => Math.max(0, prev - feedsPerPage));
  };

  const handleFeedNext = () => {
    setFeedIndex((prev) => Math.min(feeds.length - feedsPerPage, prev + feedsPerPage));
  };

  const handleProofPrev = () => {
    setProofIndex((prev) => Math.max(0, prev - proofsPerPage));
  };

  const handleProofNext = () => {
    setProofIndex((prev) => Math.min(proofs.length - proofsPerPage, prev + proofsPerPage));
  };

  const visibleFeeds = feeds.slice(feedIndex, feedIndex + feedsPerPage);
  const visibleProofs = proofs.slice(proofIndex, proofIndex + proofsPerPage);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <h1>Experience India's Most Trusted & Fastest Growing Online Sports Betting Platform</h1>
            <p className="lead">
              At GrandExchange, we bring you a premium and secure sports betting experience with verified 
              Cricket ID creation, real-time odds, instant deposits, and lightning-fast withdrawals.
            </p>
            <a className="cta-btn" href="https://wa.me/917587914617" 
               style={{ background: 'var(--accent)', color: '#000', marginTop: '6px', display: 'inline-block' }}>
              Contact Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feeds */}
      <section className="section" id="instagram">
        <div className="container">
          <div className="title">Instagram Feeds</div>
          <div className="feed-wrap">
            {loading ? (
              <p style={{ textAlign: 'center' }}>Loading feeds...</p>
            ) : feeds.length === 0 ? (
              <p style={{ textAlign: 'center' }}>No Instagram feeds uploaded yet.</p>
            ) : (
              <>
                <div className="grid-carousel">
                  {visibleFeeds.map(feed => (
                    <div 
                      key={feed.id} 
                      className="card-feed"
                      onClick={() => openWhatsApp(feed.caption)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-thumb" style={{ backgroundImage: `url(${feed.image})` }}></div>
                      <div className="card-meta">
                        <h4>{feed.caption}</h4>
                        <small>{new Date(feed.created_at?.toDate()).toLocaleString()}</small>
                      </div>
                    </div>
                  ))}
                </div>
                {feeds.length > feedsPerPage && (
                  <div className="nav-buttons">
                    <button 
                      className="nav-btn" 
                      onClick={handleFeedPrev}
                      disabled={feedIndex === 0}
                    >
                      ← Previous
                    </button>
                    <span className="nav-info">
                      {feedIndex + 1} - {Math.min(feedIndex + feedsPerPage, feeds.length)} of {feeds.length}
                    </span>
                    <button 
                      className="nav-btn" 
                      onClick={handleFeedNext}
                      disabled={feedIndex + feedsPerPage >= feeds.length}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Payment Proofs */}
      <section className="section" id="proofs" style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        <div className="container">
          <div className="title" style={{ fontSize: '34px' }}>Payment Proofs</div>
          {proofs.length > 0 && (
            <>
              <div className="slider">
                {visibleProofs.map(proof => (
                  <div key={proof.id} className="slide">
                    <div className="proof" style={{ backgroundImage: `url(${proof.image})` }}></div>
                  </div>
                ))}
              </div>
              {proofs.length > proofsPerPage && (
                <div className="nav-buttons">
                  <button 
                    className="nav-btn" 
                    onClick={handleProofPrev}
                    disabled={proofIndex === 0}
                  >
                    ← Previous
                  </button>
                  <span className="nav-info">
                    {proofIndex + 1} - {Math.min(proofIndex + proofsPerPage, proofs.length)} of {proofs.length}
                  </span>
                  <button 
                    className="nav-btn" 
                    onClick={handleProofNext}
                    disabled={proofIndex + proofsPerPage >= proofs.length}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Bumper Offer */}
      <section className="section" style={{ background: 'linear-gradient(180deg,#0b1220,#0f1724)', padding: '60px 20px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '40px', color: 'var(--accent)', marginBottom: '16px' }}>
              BUMPER OFFER
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '24px' }}>
              🎮✨ Step into the ultimate betting experience! ✨🎮<br /><br />
              For a limited time only, <strong>GrandExchange</strong> is offering an exclusive Bumper Offer with a <strong>10% bonus</strong>.
            </p>
            <a className="cta-btn" href="https://wa.me/917587914617" 
               style={{ background: 'var(--accent)', color: '#000', padding: '14px 28px', borderRadius: '40px', fontWeight: 700 }}>
              WHATS APP US NOW
            </a>
          </div>
          <div style={{ flex: 1, minWidth: '280px', textAlign: 'center' }}>
            <img src="/images/bumper.jpg" alt="Bumper Offer" 
                 style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="about">
        <div className="overlay"></div>
        <div className="about-inner">
          <div className="feature">
            <h3>Choose Your Game</h3>
            <p>Pick from a wide range of thrilling gambling options.</p>
          </div>
          <div className="feature">
            <h3>Place Your Bet</h3>
            <p>Watch as magic unfolds with every spin or card flip.</p>
          </div>
          <div className="feature">
            <h3>Claim Your Prize</h3>
            <p>Win big and unlock rewards as you level up.</p>
          </div>
        </div>
        <a className="whatsapp-btn" href="https://wa.me/917587914617">
          <img src="/images/whatsapp.png" alt="" style={{ width: '26px', height: '26px', verticalAlign: 'middle', marginRight: '10px' }} />
          WHATS APP US NOW
        </a>
      </section>

      <Footer />
      <WhatsAppFloat />

      <style jsx>{`
        .hero {
          background-image: url('/images/home.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 20px 60px;
          position: relative;
          height: 665px;
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
        .section {
          padding: 48px 20px;
        }
        .title {
          font-family: 'Playfair Display', serif;
          text-align: center;
          font-size: 48px;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .grid-carousel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1100px;
          margin: 18px auto;
        }
        .card-feed {
          background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35));
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.28s ease;
        }
        .card-feed:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.5);
        }
        .card-thumb {
          height: 360px;
          background-size: cover;
          background-position: center;
        }
        .card-meta {
          padding: 12px 14px;
        }
        .card-meta h4 {
          margin: 0;
          font-size: 14px;
          color: #fff;
        }
        .card-meta small {
          color: var(--muted);
          display: block;
          margin-top: 6px;
          font-size: 13px;
        }
        .slider {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 24px 0;
          max-width: 1100px;
          margin: 0 auto;
        }
        .slide {
          background: linear-gradient(180deg,#09312a,#074437);
          border-radius: 12px;
          padding: 14px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .proof {
          height: 420px;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
        }
        .nav-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 30px;
        }
        .nav-btn {
          background: var(--accent);
          color: #000;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-btn:hover:not(:disabled) {
          background: #9ef590;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(142, 224, 127, 0.4);
        }
        .nav-btn:disabled {
          background: rgba(142, 224, 127, 0.3);
          cursor: not-allowed;
          opacity: 0.5;
        }
        .nav-info {
          color: var(--muted);
          font-size: 14px;
          font-weight: 600;
        }
        .about {
          background-size: cover;
          background-position: center;
          padding: 54px 20px 80px;
          position: relative;
          margin-top: 8px;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.6), rgba(3,6,15,0.72));
        }
        .about-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
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
          margin: 32px auto 0;
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
          position: relative;
          z-index: 2;
        }
        @media (max-width: 1100px) {
          .grid-carousel {
            grid-template-columns: repeat(2, 1fr);
          }
          .slider {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 700px) {
          .grid-carousel {
            grid-template-columns: 1fr;
          }
          .slider {
            grid-template-columns: 1fr;
          }
          .about-inner {
            grid-template-columns: 1fr;
          }
          .hero h1 {
            font-size: 32px;
          }
          .nav-buttons {
            flex-direction: column;
            gap: 12px;
          }
          .nav-btn {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </>
  );
}
