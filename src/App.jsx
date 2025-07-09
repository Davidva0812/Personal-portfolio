import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Eldoria from "./pages/Eldoria";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="p-3 text-center">
        <button onClick={toggleTheme} className="btn btn-outline-secondary">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <Router>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/eldoria" element={<Eldoria />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  </>  
  );
}

export default App;
