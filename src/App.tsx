import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Star, 
  Music, 
  Clock, 
  Camera, 
  DoorOpen, 
  Sparkles 
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Types ---
type ViewState = 'home' | 'venue';

const LOGO_URL = "https://cdn.discordapp.com/attachments/971888402540666900/1474042587860959272/New233.png?ex=699d05e3&is=699bb463&hm=bc67f9e3229a68cb194c4d74c3391154a22906afa8d82bee584a3cdf63525f8c";
const BOOKING_URL = "https://www.fatsoma.com/p/dejavu-nightclub";
const INSTAGRAM_URL = "https://www.instagram.com/dejavunightclub_?igsh=MXBwOXVkcmR6anphdA==";

// --- Navbar Component ---
const Navbar: React.FC<{ 
  isOpen: boolean; 
  setIsOpen: (val: boolean) => void;
  setView: (view: ViewState) => void;
  currentView: ViewState;
  onNavClick: (e: React.MouseEvent, id: string) => void;
}> = ({ isOpen, setIsOpen, setView, currentView, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${
        scrolled || currentView !== 'home' ? 'py-4 backdrop-blur-xl bg-neutral-950/90 shadow-2xl shadow-black/60' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-[1500px] mx-auto px-8 md:px-16 flex items-center justify-between">
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="z-[110] block w-24 md:w-32 cursor-pointer hover:opacity-70 transition-all duration-500 shrink-0"
          >
            <img 
              src={LOGO_URL} 
              alt="Dejavu" 
              className="w-full h-auto block brightness-0 invert"
              style={{ minHeight: '18px', maxWidth: '120px' }}
            />
          </a>
          
          <div className="hidden lg:flex text-[9px] font-bold text-neutral-400 tracking-[0.3em] gap-x-12 uppercase items-center ml-auto">
            <button onClick={() => setView('home')} className="hover:text-white transition-colors">HOME</button>
            <button onClick={() => setView('venue')} className="hover:text-white transition-colors">THE VENUE</button>
            <a href="#experience" onClick={(e) => onNavClick(e, 'experience')} className="hover:text-white transition-colors">EXPERIENCE</a>
            <a href="#booths" onClick={(e) => onNavClick(e, 'booths')} className="hover:text-white transition-colors">BOOTHS</a>
            <a href="#contact" onClick={(e) => onNavClick(e, 'contact')} className="text-white px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-500 uppercase">ENQUIRE NOW</a>
          </div>

          <button 
            className="lg:hidden text-white z-[110] p-3 focus:outline-none bg-neutral-900/60 rounded-full backdrop-blur-md border border-white/5 hover:bg-neutral-800 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-neutral-950 z-[150] flex flex-col items-center justify-center gap-10 text-xl font-serif transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-full invisible pointer-events-none'
      }`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white p-3 bg-neutral-900 rounded-full border border-white/10 hover:bg-neutral-800 transition-all"><X size={20} /></button>
        <button onClick={() => { setView('home'); setIsOpen(false); }} className="hover:text-white transition-all italic hover:tracking-widest uppercase text-sm font-bold tracking-[0.3em]">HOME</button>
        <button onClick={() => { setView('venue'); setIsOpen(false); }} className="hover:text-white transition-all italic hover:tracking-widest uppercase text-sm font-bold tracking-[0.3em]">THE VENUE</button>
        <a href="#experience" onClick={(e) => { onNavClick(e, 'experience'); setIsOpen(false); }} className="hover:text-white transition-all italic hover:tracking-widest uppercase text-sm font-bold tracking-[0.3em]">EXPERIENCE</a>
        <a href="#booths" onClick={(e) => { onNavClick(e, 'booths'); setIsOpen(false); }} className="hover:text-white transition-all italic hover:tracking-widest uppercase text-sm font-bold tracking-[0.3em]">BOOTHS</a>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="hover:text-white transition-all italic hover:tracking-widest px-8 py-3.5 hover:bg-white hover:text-black transition-all uppercase text-sm font-bold tracking-[0.3em]">BOOK NOW</a>
      </div>
    </>
  );
};

// --- Home Hero ---
const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <header className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 scale-110"
        >
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2f61e32-f7d9-46ee-9655-df126da6fdd8_original.gif" 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125" 
            alt="" 
          />
        </motion.div>
        <div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20 absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 gap-8 md:gap-10">
        <div className="space-y-6 md:space-y-8 animate-fade-in-up w-full flex flex-col items-center">
          <h2 className="text-[9px] md:text-[10px] text-neutral-400 tracking-[0.6em] font-medium uppercase opacity-60">
            Aberdeen’s Immersive R&B & House Destination
          </h2>
          
          <div className="w-44 md:w-[360px] transform hover:scale-[1.02] transition-transform duration-700">
            <img 
              src={LOGO_URL} 
              alt="Dejavu" 
              className="w-full h-auto brightness-0 invert opacity-95"
              style={{ minHeight: '30px', maxWidth: '100%' }}
            />
          </div>
        </div>

        <p className="md:text-[15px] text-[12px] text-neutral-400 max-w-2xl font-light leading-[1.8] animate-fade-in delay-300 px-4 tracking-wide text-center">
          Dejavu Lounge & Nightclub is Aberdeen’s cinematic late night escape where every night feels strangely familiar and unforgettable. Expect curated R&B and House rhythms, time loop visuals, and signature Dejavu moments.
        </p>

        <div className="flex flex-col items-center animate-fade-in delay-500 w-full justify-center mt-6 md:mt-12">
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 justify-center items-center">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-white text-[9px] font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 uppercase">Book A Booth</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-white text-[9px] font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 uppercase">Join Guestlist</a>
          </div>
        </div>

        <p className="text-sm md:text-lg text-white tracking-[0.4em] uppercase font-black text-center mt-12 md:mt-24 animate-blink">
          dont miss the dejavu drop at midnight
        </p>
      </div>
    </header>
  );
};

// --- Experience Section ---
const Experience: React.FC = () => (
  <section className="py-40 px-6 md:px-12 bg-neutral-950 relative z-10" id="experience">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-[10px] tracking-[0.4em] text-neutral-500 mb-6 font-bold uppercase">The Dejavu Experience</h2>
          <h3 className="serif text-4xl md:text-5xl text-white mb-10 leading-tight uppercase tracking-tight">
            Not just a club<br/><span className="italic text-neutral-400">A designed night out</span>
          </h3>
          <p className="text-neutral-400 leading-loose mb-12 font-light text-lg">
            From the moment you step through the Arrival Portal to the midnight Dejavu Drop, every detail is built to turn your night into a story. If you’re not inside at midnight, you haven’t experienced Dejavu properly.
          </p>
          <div className="space-y-10">
            {[
              { icon: <DoorOpen className="text-neutral-500" size={24} />, title: "Arrival Portal", desc: "Step into the time loop and leave the outside world behind." },
              { icon: <Clock className="text-neutral-500" size={24} />, title: "The Dejavu Drop", desc: "Our iconic midnight reset. The moment the energy peaks." },
              { icon: <Camera className="text-neutral-500" size={24} />, title: "Exit Memory", desc: "Photos, reels and moments you take home. Your story, preserved." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="shrink-0 pt-1 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <div>
                  <h4 className="text-white font-medium text-xl">{item.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900 shadow-2xl group/img">
             <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcdaf5cb-c756-4491-ae10-3ee16fe225f7_original.gif" className="w-full h-full object-cover grayscale opacity-70 group-hover/img:scale-105 group-hover/img:opacity-100 group-hover/img:grayscale-0 transition-all duration-[1s]" alt="Experience Vibe" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Music & Vibe ---
const MusicVibe: React.FC = () => (
  <section className="py-32 px-6 md:px-12 bg-neutral-900/10 border-y border-neutral-900/50">
    <div className="max-w-4xl mx-auto text-center">
      <Music className="mx-auto text-neutral-700 mb-10" size={40} />
      <h3 className="serif text-3xl md:text-5xl text-white mb-8 uppercase tracking-tight">Curated sound. Real atmosphere</h3>
      <p className="text-neutral-400 font-light leading-[1.8] text-sm md:text-base mb-16 max-w-2xl mx-auto">
        Expect R&B and hip-hop anthems, melodic and vocal house, plus Afrobeats and Amapiano woven through the night. No random playlists. Just a soundtrack designed for the room, the moment, and the crowd.
      </p>
      <div className="flex flex-wrap justify-center gap-12">
        {['R&B', 'HIP-HOP', 'HOUSE', 'AFROBEATS', 'AMAPIANO'].map(genre => (
          <span key={genre} className="text-[9px] tracking-[0.4em] text-neutral-600 font-bold hover:text-white transition-all duration-500 cursor-default uppercase">{genre}</span>
        ))}
      </div>
    </div>
  </section>
);

// --- Booths & VIP ---
const BoothsSection: React.FC = () => (
  <section className="py-40 px-6 md:px-12 bg-neutral-950" id="booths">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <h2 className="text-[10px] tracking-[0.4em] text-neutral-500 mb-6 font-bold uppercase">Booths & VIP</h2>
          <h3 className="serif text-4xl md:text-5xl text-white uppercase tracking-tight">MOMENTS, NOT JUST BOTTLES</h3>
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-[9px] text-white tracking-[0.3em] py-3 px-6 hover:bg-white hover:text-black transition-all duration-500 uppercase">View Booth Packages</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { title: "Golden Hour", time: "Arrival - 11:30pm", desc: "The perfect start for groups seeking a smooth entry into the time loop." },
          { title: "Midnight Loop", time: "The Dejavu Drop", desc: "Be at the center of the iconic midnight reset with prime floor access." },
          { title: "Eternal Night", time: "All Night Access", desc: "For the legends who live inside the loop until the very last beat." }
        ].map((pkg, i) => (
          <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group p-10 bg-neutral-900/30 border border-neutral-900 hover:border-neutral-700 transition-all duration-700 rounded-sm flex flex-col justify-between h-[340px] hover:-translate-y-2">
            <div>
              <span className="text-[9px] tracking-[0.3em] text-neutral-600 mb-6 block uppercase font-bold">{pkg.time}</span>
              <h4 className="text-2xl serif text-white mb-6 group-hover:italic transition-all duration-500">{pkg.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">{pkg.desc}</p>
            </div>
            <div className="flex items-center gap-3 text-neutral-600 group-hover:text-white transition-all duration-500">
              <span className="text-[8px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Enquire Now</span>
              <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" size={24} />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// --- Groups Section ---
const Groups: React.FC = () => (
  <section className="py-32 px-6 md:px-12 bg-neutral-900/20 border-t border-neutral-900">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
       <div className="w-full aspect-video bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 shadow-2xl mb-16 group/img">
         <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d01d289-804d-47d7-913f-52bc6ab2d930_1600w.png" className="w-full h-full object-cover opacity-50 grayscale group-hover/img:scale-105 group-hover/img:opacity-100 group-hover/img:grayscale-0 transition-all duration-[1s]" alt="Groups" />
       </div>
       <div className="max-w-2xl">
         <h3 className="serif text-3xl md:text-4xl text-white mb-8 uppercase tracking-tight">Birthdays, Societies & Groups</h3>
         <p className="text-neutral-400 font-light leading-loose mb-10 text-sm">
           Make it a main event. Birthdays, societies, and group nights get more than entry — expect shout-outs during the Drop, custom visuals, and optional recap reels.
         </p>
         <div className="flex flex-wrap justify-center gap-8">
           <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4.5 text-white text-[9px] font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 uppercase">Plan Your Night</a>
           <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4.5 text-white text-[9px] font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 uppercase">Talk to the team</a>
         </div>
       </div>
    </div>
  </section>
);

// --- Venue Page Component ---
const VenuePage: React.FC = () => (
  <div className="pt-40 pb-32 px-6 md:px-12 bg-neutral-950 animate-fade-in">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-16">
          <div>
            <h2 className="text-[10px] tracking-[0.5em] text-neutral-500 mb-6 font-bold uppercase">The Venue</h2>
            <h3 className="serif text-5xl md:text-6xl text-white mb-10 leading-tight uppercase tracking-tight">DESIGNED FOR THE STORY</h3>
            <p className="text-neutral-400 font-light leading-[1.8] text-xl">
              Dejavu isn't just a space; it's a cinematic backdrop. Every corner, light fixture, and acoustic element has been calibrated for Aberdeen's most sophisticated late-night crowd.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Sparkles className="text-neutral-700" size={32} />
              <h4 className="text-white font-medium text-xl">Arrival Portal</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">The transition from reality to the loop starts here at the threshold.</p>
            </div>
            <div className="space-y-6">
              <Star className="text-neutral-700" size={32} />
              <h4 className="text-white font-medium text-xl">VIP Lounges</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">Elevated platforms for an unobstructed view of the Dejavu Drop.</p>
            </div>
          </div>

          <div className="p-10 bg-neutral-900/30 border border-neutral-900 rounded-sm">
             <div className="flex items-center gap-6 mb-6">
               <MapPin className="text-neutral-600" size={24} />
               <span className="text-[11px] text-white tracking-[0.4em] font-bold uppercase">Aberdeen, Scotland</span>
             </div>
             <p className="text-lg text-neutral-400 font-light">Friday–Saturday | 10:30pm – 3:00am</p>
             <p className="text-[10px] text-neutral-600 mt-6 tracking-[0.3em] font-bold uppercase border-t border-neutral-800 pt-6">Strictly 18+ | Smart, stylish dress code</p>
          </div>
        </div>

        <div className="h-[650px] w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 shadow-3xl relative lg:sticky lg:top-32">
          <iframe 
            src="https://www.google.com/maps?q=1%20Diamond%20St%2C%20Aberdeen%20AB10%201QX%2C%20UK&output=embed" 
            className="w-full h-full grayscale invert opacity-60 filter contrast-125 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-700"
            style={{ border: 0 }} 
            loading="lazy" 
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

// --- Footer ---
const Footer: React.FC<{ onEnquiryClick: (e: React.MouseEvent) => void }> = ({ onEnquiryClick }) => (
  <footer className="bg-neutral-950 border-t border-neutral-900 py-32 px-6">
    <div className="max-w-7xl mx-auto text-center space-y-20">
      <div className="space-y-10">
        <div className="w-28 md:w-36 mx-auto transform hover:scale-110 transition-transform duration-700">
          <img 
            src={LOGO_URL} 
            alt="Dejavu" 
            className="w-full h-auto brightness-0 invert opacity-80"
          />
        </div>
        <p className="serif italic text-2xl text-neutral-500">You’ve been here before</p>
      </div>
      
      <div className="flex flex-col items-center gap-12">
        <div className="flex gap-16 text-[10px] text-neutral-500 tracking-[0.4em] font-bold uppercase">
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all duration-500"
          >
            Instagram
          </a>
          <a 
            href="https://www.facebook.com/share/18NG5R6ZWu/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all duration-500"
          >
            Facebook
          </a>
          <a href="#contact" onClick={onEnquiryClick} className="hover:text-white transition-all duration-500">Enquiries</a>
        </div>
        <div className="text-[10px] text-neutral-600 tracking-[0.3em] max-sm:mx-auto leading-loose uppercase font-bold">
          Friday–Saturday | 10:30pm – 3:00am<br/>
          Smart, stylish dress code
        </div>
      </div>

      <div className="pt-16 text-[8px] text-neutral-800 tracking-[0.5em] font-bold uppercase">
        © {new Date().getFullYear()} Dejavu Lounge & Nightclub. Aberdeen, Scotland.
      </div>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [view, isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-neutral-950 min-h-screen selection:bg-white selection:text-black text-neutral-300">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} setView={setView} currentView={view} onNavClick={handleNavClick} />
      
      {view === 'home' ? (
        <>
          <Hero />
          <Experience />
          <MusicVibe />
          <BoothsSection />
          <Groups />
          
          {/* CTA Section */}
          <section className="py-48 px-6 bg-neutral-950 text-center relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full -translate-y-1/2"></div>
            <div className="relative z-10 space-y-12">
              <h3 className="serif text-2xl md:text-4xl text-white uppercase tracking-tight">"Book your moment and step into the time loop"</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-10 pt-8">
                 <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-5 text-white text-[9px] font-black tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 uppercase">Join Guestlist</a>
                 <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-5 text-white text-[9px] font-black tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 uppercase">Book Booth</a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <VenuePage />
      )}

      <Footer onEnquiryClick={(e) => handleNavClick(e, 'contact')} />
    </div>
  );
}