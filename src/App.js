import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Header import karein
import Footer from './components/Footer'; // Footer import karein
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      {/* 1. Header ko Routes se bahar rakhein taaki ye har page par dikhe */}
      <Header />

      {/* 2. Main tag content ko thora padding deta hai taaki header ke niche na chupe */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* 3. Footer bhi har page ke niche hamesha rahega */}
      <Footer />
    </Router>
  );
}

export default App;