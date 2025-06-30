import React, { useState, useRef, useEffect } from 'react';

// Custom SVG Icons
const SendIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

const BotIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 17.5C10.1 17.5 8.5 15.9 8.5 14S10.1 10.5 12 10.5S15.5 12.1 15.5 14S13.9 17.5 12 17.5ZM12 23C7.03 23 3 18.97 3 14H5C5 17.86 8.14 21 12 21S19 17.86 19 14H21C21 18.97 16.97 23 12 23Z"/>
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const cleanMarkdown = (text) => {
    return text
      // Remove markdown headers (# ## ###)
      .replace(/^#{1,6}\s+/gm, '')
      // Remove bold/italic markers (* ** _)
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/_(.+?)_/g, '$1')
      // Remove bullet points and convert to simple list
      .replace(/^\s*[-*+]\s+/gm, '• ')
      // Remove numbered list formatting
      .replace(/^\s*\d+\.\s+/gm, '• ')
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, '[code block]')
      .replace(/`(.+?)`/g, '$1')
      // Clean up extra whitespace
      .replace(/\n\s*\n/g, '\n')
      .trim();
  };

  const formatResponse = (text) => {
    const cleanedText = cleanMarkdown(text);
    const lines = cleanedText
      .split('\n')
      .filter(line => line.trim() !== '');
    
    return lines.map((line, idx) => (
      <div key={idx} className="mb-2 text-gray-100">
        {line.trim()}
      </div>
    ));
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/ai/getAiChatResponse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: data.response || 'No response',
          },
        ]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: '❌ AI could not generate a response.',
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: '❌ Error connecting to AI server.',
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 bg-gradient-to-r from-black via-gray-900 to-black border-b border-yellow-500/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full">
              <BotIcon />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              ChatMate
            </h1>
          </div>
          <p className="text-center text-gray-400 mt-2 text-sm">Your intelligent AI companion</p>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="relative z-10 flex-1 overflow-auto p-6 space-y-6">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="p-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BotIcon />
              </div>
              <h2 className="text-xl font-semibold text-gray-300 mb-2">Welcome to ChatMate!</h2>
              <p className="text-gray-500">Ask me anything about coding, development, or technology.</p>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 ${
                msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                  : 'bg-gradient-to-r from-yellow-400 to-amber-500'
              }`}>
                {msg.role === 'user' ? (
                  <UserIcon />
                ) : (
                  <BotIcon />
                )}
              </div>

              {/* Message */}
              <div className={`flex-1 max-w-3xl ${msg.role === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-4 rounded-2xl shadow-lg backdrop-blur-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500/30'
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 border border-yellow-500/20'
                }`}>
                  {msg.role === 'assistant' ? (
                    <div className="space-y-1">{formatResponse(msg.content)}</div>
                  ) : (
                    <div className="whitespace-pre-line">{msg.content}</div>
                  )}
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.role === 'user' ? 'You' : 'ChatMate AI'}
                </div>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center">
                <BotIcon />
              </div>
              <div className="flex-1">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-yellow-500/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-gray-300 text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Bar */}
      <div className="relative z-10 p-6 bg-gradient-to-r from-black via-gray-900 to-black border-t border-yellow-500/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-4">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask me anything about coding..."
                className="w-full resize-none p-4 pr-12 bg-gradient-to-r from-gray-800 to-gray-900 border border-yellow-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 backdrop-blur-sm"
                style={{ minHeight: '56px' }}
              />
              <div className="absolute right-3 bottom-3 text-gray-500 text-xs">
                Press Enter to send
              </div>
            </div>
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="flex-shrink-0 p-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 rounded-2xl text-black font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;