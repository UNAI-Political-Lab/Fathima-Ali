import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PDFPressKitModal from './components/PDFPressKitModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Journey from './pages/Journey';
import Roles from './pages/Roles';
import WorkPillars from './pages/WorkPillars';
import Namo from './pages/Namo';
import Gallery from './pages/Gallery';
import Press from './pages/Press';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentLang, setLang] = useState('en');
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home currentLang={currentLang} setActiveTab={setActiveTab} onOpenPdf={() => setIsPdfOpen(true)} />;
      case 'about':
        return <About currentLang={currentLang} onOpenPdf={() => setIsPdfOpen(true)} />;
      case 'vision':
        return <VisionMission currentLang={currentLang} setActiveTab={setActiveTab} />;
      case 'journey':
        return <Journey />;
      case 'roles':
        return <Roles />;
      case 'work':
        return <WorkPillars currentLang={currentLang} setActiveTab={setActiveTab} />;
      case 'namo':
        return <Namo currentLang={currentLang} />;
      case 'gallery':
        return <Gallery />;
      case 'press':
        return <Press onOpenPdf={() => setIsPdfOpen(true)} />;
      case 'involved':
        return <GetInvolved currentLang={currentLang} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home currentLang={currentLang} setActiveTab={setActiveTab} onOpenPdf={() => setIsPdfOpen(true)} />;
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Header */}
      <Navbar 
        currentLang={currentLang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPdf={() => setIsPdfOpen(true)}
      />

      {/* Main Page View */}
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer 
        currentLang={currentLang}
        setActiveTab={setActiveTab}
        onOpenPdf={() => setIsPdfOpen(true)}
      />

      {/* Profile Press Kit PDF Modal */}
      <PDFPressKitModal 
        isOpen={isPdfOpen} 
        onClose={() => setIsPdfOpen(false)} 
      />

    </div>
  );
}
