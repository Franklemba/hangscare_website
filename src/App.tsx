import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import Vision from './pages/Vision';
import Promise from './pages/Promise';
import GetInvolved from './pages/GetInvolved';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'what-we-do':
        return <WhatWeDo />;
      case 'vision':
        return <Vision />;
      case 'promise':
        return <Promise />;
      case 'get-involved':
        return <GetInvolved />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
