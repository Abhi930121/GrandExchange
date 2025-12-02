import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { uploadImage } from '../services/cloudinary';
import Swal from 'sweetalert2';

export default function AddInstaFeeds() {
  const [feeds, setFeeds] = useState([]);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      } else {
        fetchFeeds();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchFeeds = async () => {
    try {
      const feedsQuery = query(collection(db, 'instafeeds'), orderBy('created_at', 'desc'));
      const snapshot = await getDocs(feedsQuery);
      const feedsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFeeds(feedsData);
    } catch (error) {
      console.error('Error fetching feeds:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      Swal.fire({ icon: 'error', title: 'Please select an image' });
      return;
    }

    setUploading(true);
    try {
      // Upload image to Cloudinary
      const imageUrl = await uploadImage(image);

      // Save to Firestore (only URL, not the file)
      await addDoc(collection(db, 'instafeeds'), {
        caption,
        image: imageUrl,
        created_at: new Date()
      });

      Swal.fire({ icon: 'success', title: 'Feed added successfully!' });
      setCaption('');
      setImage(null);
      document.getElementById('fileInput').value = '';
      fetchFeeds();
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Error uploading feed' });
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This feed will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        // Delete from Firestore
        await deleteDoc(doc(db, 'instafeeds', id));

        Swal.fire('Deleted!', 'Feed deleted successfully.', 'success');
        fetchFeeds();
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete feed.', 'error');
        console.error(error);
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
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
                <a href="/admindash" className="nav-link">
                  <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  </svg>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/addinstafeeds" className="nav-link active">
                  <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7z"/>
                  </svg>
                  <span>Instagram Feeds</span>
                </a>
              </li>
              <li>
                <a href="/addpaymentproof" className="nav-link">
                  <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                  </svg>
                  <span>Add Payment Proof</span>
                </a>
              </li>
              <li>
                <a onClick={handleLogout} className="nav-link" style={{ cursor: 'pointer' }}>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <div className="content-grid">
            {/* Add Feed Form */}
            <div className="card">
              <h3>Add Instagram Feed</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Feed Name / Caption</label>
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Enter caption..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Upload Image</label>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                  {image && (
                    <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                      Selected: {image.name}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn-submit" disabled={uploading}>
                  {uploading ? 'Uploading to Cloudinary...' : 'Add Feed'}
                </button>
              </form>
            </div>

            {/* Feeds Preview */}
            <div className="card">
              <h3>Uploaded Feeds Preview</h3>
              {feeds.length === 0 ? (
                <p>No feeds uploaded yet.</p>
              ) : (
                <div className="feeds-grid">
                  {feeds.map(feed => (
                    <div key={feed.id} className="feed-item">
                      <img src={feed.image} alt={feed.caption} />
                      <p>{feed.caption}</p>
                      <button onClick={() => handleDelete(feed.id)} className="btn-delete">
                        🗑️ Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
        }
        .logo-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
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
        }
        .main-content {
          margin-left: 256px;
          flex: 1;
          padding: 24px;
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .card {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .card h3 {
          margin: 0 0 20px;
          font-size: 20px;
          color: #111827;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
        }
        .form-group input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
        }
        .btn-submit {
          width: 100%;
          background: #2563eb;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
        }
        .btn-submit:hover {
          background: #1d4ed8;
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .feeds-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .feed-item {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 12px;
          background: #f9fafb;
        }
        .feed-item img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .feed-item p {
          margin: 0 0 12px;
          font-size: 14px;
          color: #374151;
        }
        .btn-delete {
          width: 100%;
          background: #ef4444;
          color: #fff;
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }
        .btn-delete:hover {
          background: #dc2626;
        }
        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
          .main-content {
            margin-left: 0;
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}