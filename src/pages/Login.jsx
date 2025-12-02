import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use email directly
      await signInWithEmailAndPassword(auth, email, password);
      
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        confirmButtonColor: '#ffb400'
      });
      navigate('/admindash');
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password',
        confirmButtonColor: '#ffb400'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="info">
            Need help? <a href="https://wa.me/917587914617" target="_blank" rel="noopener noreferrer">Contact Support</a>
          </p>
        </div>

        <a className="whats-float" href="https://wa.me/917587914617" target="_blank" rel="noopener noreferrer">
          <img src="/images/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(180deg, #071022, var(--bg));
        }
        .login-card {
          background: var(--card);
          padding: 36px 28px;
          border-radius: 12px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
          text-align: center;
        }
        .login-card h1 {
          font-family: 'Playfair Display', serif;
          color: var(--accent);
          margin-bottom: 24px;
          font-size: 28px;
        }
        .login-card form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .login-card input[type='email'],
        .login-card input[type='password'] {
          padding: 12px 14px;
          border-radius: 8px;
          border: none;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
        .login-card input::placeholder {
          color: var(--muted);
        }
        .login-card button {
          background: var(--accent);
          color: #000;
          padding: 12px 18px;
          border: none;
          border-radius: 28px;
          font-weight: 700;
          cursor: pointer;
          font-size: 16px;
          transition: 0.2s;
        }
        .login-card button:hover {
          background: var(--green);
        }
        .login-card button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .info {
          font-size: 14px;
          color: var(--muted);
          margin-top: 16px;
        }
        .info a {
          color: var(--accent);
          text-decoration: underline;
        }
        .whats-float {
          position: fixed;
          right: 18px;
          bottom: 18px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #14a76c, #0e8b59);
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4);
        }
        .whats-float img {
          width: 38px;
          height: 38px;
        }
      `}</style>
    </>
  );
}