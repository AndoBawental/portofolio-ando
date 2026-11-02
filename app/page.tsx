'use client'; // Wajib ditambahkan di baris pertama untuk komponen interaktif Three.js / Canvas

import Lanyard from './component/Lanyard';

export default function Home() {
  // Ganti username "GITHUB_KAMU" dengan username asli GitHub Anda
  const GITHUB_URL = "https://github.com/AndoBawental"; 

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-white relative">
      
      {/* Navbar Minimalis */}
      <nav className="w-full absolute top-0 left-0 p-6 sm:px-12 flex justify-between items-center z-50">
        <div className="text-xl font-bold tracking-tighter text-white">
          Porto<span className="text-cyan-400">folio.</span>
        </div>
        <ul className="hidden sm:flex space-x-8 text-sm font-medium text-slate-400 items-center">
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">About</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Projects</li>
          
          {/* Ikon GitHub Kecil di Navbar */}
          <li>
            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center"
              title="GitHub Profil"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <main className="max-w-7xl mx-auto px-6 sm:px-12 relative">
        {/* Grid Layout - 12 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen pt-24 lg:pt-0">
          
          {/* Kolom Kiri (Teks / Konten Interaktif) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-start z-10 space-y-8 pb-10 lg:pb-0">
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium">
              <span className="flex w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse mr-3"></span>
              Available for Freelance Work
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Creative <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Fullstack Developer
                </span>
              </h1>
              <p className="max-w-lg text-lg sm:text-xl text-slate-400 leading-relaxed">
                Saya membangun antarmuka web interaktif yang modern, responsif, dan memberikan pengalaman pengguna terbaik.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'TailwindCSS', 'Three.js', 'TypeScript'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 text-sm bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/50 hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interaktif CTA Buttons & GitHub */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              
              {/* Tombol Utama menuju GitHub */}
              <a 
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Lihat GitHub
              </a>

              {/* Tombol Sekunder */}
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 text-center">
                Hubungi Saya
              </button>
            </div>
          </div>

          {/* Kolom Kanan (Lanyard 3D) */}
          <div className="col-span-1 lg:col-span-5 relative w-full h-[550px] lg:h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <Lanyard 
              frontImage="/assets/lanyard/card-front.webp" 
              backImage="/assets/lanyard/card-back.webp" 
              strapImage="/assets/lanyard/lanyard.png"  
              imageFit="cover"  
              cardColor="#ffffff"  
              orientation="portrait"  
              finish="glossy"  
              cornerRadius={0.3}  
              size={0.6}  
              anchor="center"  
              strapLength={0.5}  
              strapColor="#111111"  
              strapWidth={0.65}  
              metal="silver"  
              gravity={1}  
              damping={0.5}  
              elasticity={0.5}  
              breeze={0.5}  
              interactive  
              intro
            />
          </div>

        </div>
      </main>
    </div>
  );
}