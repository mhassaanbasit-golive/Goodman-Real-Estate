import React, { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello. I am the AI Concierge for Goodman Real Estate Solutions. I can assist you with information about our Principal, Herb Goodman, our commercial services, contacts (214-537-1441), or details on our case studies. How may I assist you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    if (!textToSend) {
      setInputValue('');
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Build messages body format exactly as requested: { messages: [{ role: 'user', content: '...' }] }
      const messagesPayload = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: messagesPayload }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from chat API');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || "I apologize, but I did not receive a response from the service. Please try again."
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I am experiencing connectivity issues. Please try again or reach Herb directly at 214-537-1441."
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const quickQuestions = [
    { label: "Herb Goodman", query: "Tell me about Herb Goodman" },
    { label: "Zoning / Services", query: "What development and zoning services do you provide?" },
    { label: "Rustic Expansion", query: "Can you detail The Rustic Expansion case study?" },
    { label: "Phone & Contact", query: "What is your primary contact phone number and address?" }
  ];

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-[24px] right-[20px] md:bottom-6 md:right-6 z-[999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#C41200] text-white flex items-center gap-2 px-5 py-3.5 rounded-[50px] shadow-2xl transition-all duration-300 hover:bg-[#A30F00] hover:scale-105 group font-sans text-sm font-bold tracking-wide cursor-pointer"
          aria-label="Open chat assistant"
        >
          {isOpen ? (
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
          <span>{isOpen ? 'Close Concierge' : 'Ask me'}</span>
        </button>
      </div>

      {/* Chat Overlay Modal */}
      {isOpen && (
        <div className="fixed bottom-[88px] right-[20px] md:bottom-24 md:right-6 z-[999] w-[calc(100%-40px)] sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col h-[520px] animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="bg-[#1A1D20] text-white p-5 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#C41200] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-serif text-base font-bold tracking-wide">AI Concierge</h4>
                <p className="font-sans text-[10px] text-gray-400 font-medium tracking-tight">Goodman Real Estate Solutions</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Scroller */}
          <div className="flex-1 overflow-y-auto p-5 bg-[#F9FAFB] flex flex-col gap-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl text-sm font-sans leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#C41200] text-white rounded-tr-none'
                      : 'bg-white text-brand-dark border border-gray-100 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
                <span className="text-[10px] text-gray-400 font-medium mt-1 font-sans px-1">
                  {msg.role === 'user' ? 'You' : 'Advisory Concierge'}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex flex-col items-start max-w-[85%]">
                <div className="p-3.5 rounded-2xl text-sm font-sans bg-white border border-gray-100 rounded-tl-none shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#C41200] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#C41200] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#C41200] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium mt-1 font-sans px-1">
                  Typing...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions wrapper */}
          <div className="px-4 py-2 bg-gray-50 border-t border-b border-gray-100 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(q.query)}
                className="bg-white hover:border-[#C41200] text-[#1A1D20] hover:text-[#C41200] text-[11px] font-sans font-semibold px-3 py-1.5 rounded-[30px] border border-gray-200 shadow-xs transition-all shrink-0 cursor-pointer"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Form Input Bar */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Herb, services, or case studies..."
              className="flex-1 bg-gray-50 border border-gray-200 text-brand-dark text-sm p-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C41200] focus:bg-white transition-all font-sans"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              className="bg-[#C41200] hover:bg-[#A30F00] text-white p-3.5 rounded-xl transition-all cursor-pointer shadow-md shrink-0 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22,2 15,22 11,13 2,9 22,2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
