import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Connect from './components/Connect';
import QandA from './components/QandA';
import customCursor from '/cursor.png';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen custom-Cursor"
      style={{
        cursor: `url(${customCursor}), crosshair`,
      }}
      >
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/QandA" element={<QandA />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;