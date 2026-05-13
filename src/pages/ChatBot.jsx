import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatBot = ({ theme, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm David. Feel free to ask me anything about my projects, skills, or professional experience!", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const isDark = theme === 'dark';
  const mainBg = isDark ? '#2A2B3B' : '#f8f9fa';
  const cardBg = isDark ? '#2A2B3B' : '#ffffff';
  const textColor = isDark ? '#f1f1f1' : '#333';
  const aiBubbleBg = isDark ? '#3D3E51' : '#ffffff';
  const footerBg = isDark ? '#2A2B3B' : '#ffffff';
  const borderColor = isDark ? '#444661' : '#eee';

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    /*
    // --- TEMPORARY DEMO MODE ---
    setTimeout(() => {
      const demoResponse = { 
        text: "Thanks for your interest! 🚀 My AI backend is currently in 'Demo Mode' on GitHub Pages. To see me in full action with real-time RAG responses, please check out the source code or the screenshots in my GitHub repository!", 
        sender: 'ai' 
      };
      setMessages(prev => [...prev, demoResponse]);
      setLoading(false);
    }, 1000);
    */ 
    
    try {
      const response = await axios.post('https://rag-ai-assistant-b789.onrender.com/chat', { message: input });
      setMessages(prev => [...prev, { text: response.data.response, sender: 'ai' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Error: I couldn't connect to the server.", sender: 'ai' }]);
    } finally {
      setLoading(false);
    } 
  };

  return (
    <div className="card shadow-lg border-0" 
         style={{ 
           width: '100%', 
           borderRadius: '15px', 
           overflow: 'hidden',
           backgroundColor: cardBg,
           display: 'flex',
           flexDirection: 'column',
           maxHeight: '60vh',
         }}>
      
      {/* Header + inner X button */}
      <div style={{ background: '#63BCD3', color: 'white', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h6 className="m-0">Chat with David's AI</h6>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
      </div>
      
      <div className="card-body" style={{ height: '350px', overflowY: 'auto', background: mainBg, padding: '15px' }}>
        {messages.map((msg, index) => (
          <div key={index} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-2`}>
            <div style={{ 
              padding: '8px 12px', 
              borderRadius: '12px', 
              background: msg.sender === 'user' ? '#63BCD3' : aiBubbleBg,
              color: msg.sender === 'user' ? 'white' : textColor,
              maxWidth: '85%',
              fontSize: '0.9rem',
              wordBreak: 'break-word',
              border: isDark && msg.sender !== 'user' ? `1px solid ${borderColor}` : 'none'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ 
            color: '#878e93',
            fontSize: '0.8rem', 
            fontStyle: 'italic', 
            padding: '10px' 
          }}>
            Thinking...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={sendMessage} className="d-flex p-2" style={{ background: footerBg, borderTop: `1px solid ${borderColor}` }}>
        <input 
          className={`form-control form-control-sm me-2 shadow-none ${isDark ? 'bg-dark text-white border-secondary' : ''}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me..."
          style={{ borderRadius: '15px' }}
        />
        <button type="submit" className="btn btn-sm text-white" style={{ background: '#63BCD3', borderRadius: '50%', width: '35px', height: '35px' }}>
          <i className="bi bi-send-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default ChatBot;