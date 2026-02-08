
import React, { useState, useRef, useEffect } from 'react';
import { Message, PortfolioData } from '../types';
import { geminiService } from '../services/geminiService';

interface AIChatProps {
  portfolioData: PortfolioData;
}

const AIChat: React.FC<AIChatProps> = ({ portfolioData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm Sahil's AI twin. Ask me anything about my experience at Meta, my projects, or my technical stack!` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const { text, sources } = await geminiService.getChatResponse(input, portfolioData, messages);
    
    setMessages(prev => [...prev, { role: 'model', text, sources }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group relative"
      >
        <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        {isOpen ? (
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-[400px] bg-[#0f172a] border border-slate-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border-t-blue-500/30">
          <div className="p-5 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-black">SP</div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100">Sahil's AI Agent</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Online</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 h-[400px] overflow-y-auto p-5 space-y-6 bg-[#020617]/50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none shadow-lg' 
                  : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                }`}>
                  {m.text}
                </div>
                {m.sources && m.sources.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    <p className="text-[10px] text-slate-500 w-full mb-1">Sources:</p>
                    {m.sources.map((s, idx) => (
                      <a 
                        key={idx} 
                        href={s.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-slate-900 border border-slate-700 text-blue-400 px-2 py-1 rounded hover:bg-slate-800 transition-colors truncate max-w-[150px]"
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 p-4 rounded-2xl rounded-bl-none border border-slate-700">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-slate-800 bg-slate-900/30">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-3">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my tech stack..."
                className="flex-1 bg-slate-950 border border-slate-800 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 p-3 rounded-xl transition-all shadow-lg shadow-blue-500/20"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
