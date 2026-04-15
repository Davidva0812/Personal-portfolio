import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Eldoria from "./pages/Eldoria";
import ChatBot from "./pages/ChatBot";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/*<header className="p-2 text-center">
        <button onClick={toggleTheme} className="btn btn-outline-secondary">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>*/}
      <Router basename="/Personal-portfolio">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/eldoria" element={<Eldoria theme={theme} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="scroll-progress"></div>
        </main>

      {/* --- AI CHATBOT INTEGRATION --- */}
      <div style={{ 
        position: 'fixed', 
        bottom: '25px', 
        right: '25px', 
        zIndex: 1000,
        width: isChatOpen ? 'calc(100% - 50px)' : '60px', 
        maxWidth: isChatOpen ? '380px' : '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
  
      {isChatOpen && (
        <div className="mb-3 shadow-lg fade-in" style={{ width: '100%' }}>
          <ChatBot theme={theme} onClose={() => setIsChatOpen(false)} />
        </div>
      )}
        
      {!isChatOpen && (
      <button 
        onClick={() => setIsChatOpen(true)}
        className="btn shadow-lg d-flex align-items-center justify-content-center"
        style={{ 
          width: '65px', 
          height: '65px', 
          borderRadius: '50%', 
          background: '#63BCD3', 
          color: 'white',
          fontSize: '28px',
          border: 'none',
          transition: 'transform 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        🤖
      </button>
      )}
      </div>

      <Footer theme={theme} />
      </Router>
    </>
  );
}

export default App;
