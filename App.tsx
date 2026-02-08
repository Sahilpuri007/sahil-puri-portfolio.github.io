
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { INITIAL_DATA } from './constants';
import { PortfolioData } from './types';

const App: React.FC = () => {
  const [data] = useState<PortfolioData>(INITIAL_DATA);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    alert('Email copied to clipboard!');
  };

  const awards = [
    "Samsung Excellence Award - Super Tech (Q2 2024)",
    "Samsung Excellence Award - Team Awesome (Q4 2024)",
    "Employee of the Month",
    "Monthly Award",
    "Spot Award"
  ];

  const certs = [
    "AI for Everyone",
    "Android Development",
    "Generative AI for Everyone",
    "Kotlin for Android: Best Practices",
    "Version Control"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-52 md:pb-48 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[160px] animate-blob" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[160px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Lead Engineer @ Samsung R&D</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
            SAHIL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 bg-[length:200%_auto] animate-gradient">
              PURI
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-400 font-medium mb-12 leading-relaxed">
            {data.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#projects" className="group w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all transform hover:-translate-y-1 shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-2">
              See My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <button onClick={copyEmail} className="w-full sm:w-auto px-10 py-5 bg-slate-900 border border-slate-800 font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Sahil
            </button>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-24 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {data.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-blue-500 font-black text-xs uppercase tracking-[0.2em] mb-6">{skillGroup.category}</h3>
                <ul className="space-y-4">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-slate-300 font-medium group">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 bg-slate-950/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-24">
            <h2 className="text-5xl font-black tracking-tighter">EXPERIENCE</h2>
            <div className="h-px flex-1 bg-slate-800" />
          </div>
          <div className="space-y-32">
            {data.experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                    <span className="text-blue-500 font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">{exp.period}</span>
                    <h3 className="text-3xl font-black mb-2 leading-tight">{exp.role}</h3>
                    <p className="text-xl text-slate-500 font-bold">{exp.company}</p>
                  </div>
                  <div className="md:w-2/3 space-y-6">
                    {exp.description.map((item, i) => (
                      <p key={i} className="text-slate-400 text-lg leading-relaxed font-medium">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Selected Work</h2>
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">/ Android & Core Engineering</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.projects.map((project, idx) => (
              <div key={project.id} className={`group relative ${idx === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">{project.title}</h3>
                    <p className="max-w-2xl text-slate-300 mb-8 text-lg font-medium leading-relaxed">
                      {project.description}
                    </p>
                    <a href={project.link} className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all transform active:scale-95">
                      View Details
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certs Section */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase text-blue-500">Honors & Awards</h2>
              <div className="space-y-4">
                {awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
                    </div>
                    <span className="font-bold text-slate-200">{award}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase text-indigo-500">Certifications</h2>
              <div className="space-y-4">
                {certs.map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-bold text-slate-200">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="pt-32 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">LET'S <br /> CONNECT.</h2>
              <div className="flex gap-8">
                <a href={data.socials.linkedin} target="_blank" className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-2 group shadow-xl">
                  <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={data.socials.github} target="_blank" className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center hover:bg-slate-700 transition-all hover:-translate-y-2 group shadow-xl">
                  <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-end">
              <p className="text-2xl text-slate-400 font-medium mb-8">
                Based in Bangalore, India. <br />
                Driving innovation in mobile tech.
              </p>
              <a href={`mailto:${data.socials.email}`} className="text-3xl md:text-5xl font-black text-blue-500 hover:text-blue-400 transition-colors break-words">
                {data.socials.email}
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-900 opacity-50">
            <p className="text-xs font-mono uppercase tracking-widest">&copy; {new Date().getFullYear()} Sahil Puri — All Rights Reserved</p>
            <div className="flex gap-12">
              <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-blue-500 transition-colors">Resume.pdf</a>
              <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Twin Chat Widget */}
      <AIChat portfolioData={data} />
    </div>
  );
};

export default App;
