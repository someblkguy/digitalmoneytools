import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogIndex from './pages/BlogIndex';
import PillarIndex from './pages/PillarIndex';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/pillars" element={<PillarIndex />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;