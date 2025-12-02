import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Football from './pages/Football';
import Cricket from './pages/Cricket';
import Casino from './pages/Casino';
import Card from './pages/Card';
import Login from './pages/Login';
import AdminDash from './pages/AdminDash';
import AddInstaFeeds from './pages/AddInstaFeeds';
import AddPaymentProof from './pages/AddPaymentProof';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/football" element={<Football />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/addinstafeeds" element={<AddInstaFeeds />} />
        <Route path="/addpaymentproof" element={<AddPaymentProof />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
