'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import VehicleSlider from '@/components/VehicleSlider';

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <main className="min-h-screen bg-luxury-black text-luxury-white font-sans selection:bg-luxury-gold selection:text-black">

            {/* Background gradients for dark ambiance */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] mix-blend-screen"></div>
            </div>

            {/* NAVBAR */}
            <nav className="fixed w-full z-50 top-4 flex justify-center px-4 md:px-8">
                <div className="w-full max-w-6xl bg-luxury-black/70 backdrop-blur-xl border border-luxury-gold/20 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)] px-5 md:px-10 h-[64px] md:h-[95px] flex items-center justify-between transition-all duration-300 hover:border-luxury-gold/40">

                    <a href="#inicio" className="relative h-[42px] w-[130px] sm:w-[150px] md:h-[72px] md:w-[260px] shrink-0 transition-opacity hover:opacity-90 flex items-center">
                        <Image
                            src="/logo_v2.png"
                            alt="Luxury VIP Protection Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </a>

                    <div className="hidden lg:flex flex-1 justify-center space-x-10">
                        <a href="#inicio" className="text-[14px] lg:text-[15px] tracking-[0.2em] font-semibold text-luxury-white hover:text-luxury-gold transition-colors uppercase relative group">
                            Home
                            <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-[15px] group-hover:left-[calc(50%-7.5px)]"></span>
                        </a>
                        <a href="#servicios" className="text-[14px] lg:text-[15px] tracking-[0.2em] font-medium text-luxury-white hover:text-luxury-gold transition-colors uppercase relative group">
                            Services
                            <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-[15px] group-hover:left-[calc(50%-7.5px)]"></span>
                        </a>
                        <a href="#flota" className="text-[14px] lg:text-[15px] tracking-[0.2em] font-medium text-luxury-white hover:text-luxury-gold transition-colors uppercase relative group">
                            Fleet
                            <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-[15px] group-hover:left-[calc(50%-7.5px)]"></span>
                        </a>
                        <a href="#contacto" className="text-[14px] lg:text-[15px] tracking-[0.2em] font-medium text-luxury-white hover:text-luxury-gold transition-colors uppercase relative group">
                            Contact
                            <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-[15px] group-hover:left-[calc(50%-7.5px)]"></span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="text-[13px] lg:text-[14px] tracking-[0.2em] font-semibold text-luxury-white hover:text-luxury-gold transition-all duration-300 uppercase border border-luxury-gold/30 hover:border-luxury-gold/80 rounded-full px-4 py-1.5 flex items-center justify-center">
                            ES
                        </a>
                        <a href="https://wa.me/526623538274?text=Hello,%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-luxury-gold to-[#a88231] hover:from-luxury-gold-soft hover:to-luxury-gold text-black text-[13px] lg:text-[15px] tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(204,167,80,0.3)] hover:shadow-[0_4px_25px_rgba(204,167,80,0.5)]">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            <span>+52 662 353 8274</span>
                        </a>
                    </div>

                    {/* Mobile Right Controls (Language & Hamburger) */}
                    <div className="flex lg:hidden items-center gap-4">
                        <a href="/" className="text-[11px] font-semibold text-luxury-white hover:text-luxury-gold uppercase border border-luxury-gold/30 hover:border-luxury-gold/80 rounded-full px-2.5 py-1 flex items-center justify-center transition-all">
                            ES
                        </a>
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-luxury-white hover:text-luxury-gold transition-colors focus:outline-none p-1"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 top-[85px] bg-luxury-black/95 backdrop-blur-2xl z-40 lg:hidden transition-all duration-300 flex flex-col items-center justify-start pt-12 gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] tracking-[0.2em] font-light text-luxury-white hover:text-luxury-gold uppercase transition-colors">
                        Home
                    </a>
                    <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] tracking-[0.2em] font-light text-luxury-white hover:text-luxury-gold uppercase transition-colors">
                        Services
                    </a>
                    <a href="#flota" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] tracking-[0.2em] font-light text-luxury-white hover:text-luxury-gold uppercase transition-colors">
                        Fleet
                    </a>
                    <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] tracking-[0.2em] font-light text-luxury-white hover:text-luxury-gold uppercase transition-colors">
                        Contact
                    </a>
                    
                    <div className="w-16 h-px bg-luxury-gold/30 my-4"></div>
                    
                    <a href="/" className="text-[14px] tracking-[0.2em] font-semibold text-luxury-gold uppercase border border-luxury-gold/50 rounded-full px-8 py-3 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all shadow-[0_0_15px_rgba(204,167,80,0.15)]">
                        Switch to Spanish (ES)
                    </a>
                </div>
            </nav>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20">

                {/* HERO SECTION */}
                <section id="inicio" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between relative py-20 lg:py-10">

                    {/* Subtle Ambient Background */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-luxury-black/90">
                        {/* Subtle glow behind text */}
                        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-luxury-charcoal/50 rounded-full blur-[140px]"></div>
                    </div>

                    {/* Left Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-20 relative px-4 lg:pr-12 mb-0 lg:mb-0 mt-8 lg:mt-0">
                        <h1 className="font-display uppercase tracking-[0.05em] mb-10 lg:w-[125%] xl:w-[135%]">
                            <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-5">
                                <span className="block text-[#F1F1F1] font-light opacity-90 drop-shadow-sm tracking-normal mb-1">
                                    Excellence in luxury transportation,
                                </span>
                                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-[#a88231] drop-shadow-[0_0_15px_rgba(204,167,80,0.2)] text-[0.6em] sm:text-[0.75em] md:text-[0.85em] lg:text-[0.9em] xl:text-[0.92em] tracking-[0.05em] whitespace-nowrap">
                                    is our priority
                                </span>
                            </span>
                            <span className="block text-white font-light text-lg md:text-xl tracking-[0.1em]">
                                SAFETY AND RELIABILITY
                            </span>
                        </h1>

                        <div className="max-w-2xl lg:max-w-3xl xl:max-w-[120%] mx-auto lg:mx-0 space-y-6 mb-12 text-left relative z-20">
                            <p className="text-[18px] md:text-[20px] text-luxury-gray font-light leading-[1.8em] border-l-2 border-luxury-gold/50 pl-5">
                                State-of-the-art fleet with armored and non-armored units, operated by highly trained drivers to guarantee comfort, discretion, and an impeccable experience on every journey.
                            </p>

                            <p className="text-[16px] md:text-[18px] tracking-[0.05em] text-luxury-gray font-light leading-[1.6em] pl-5">
                                Special events, executive transfers, vacation trips, and exclusive tours with personalized attention and professional protocols.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-14">
                            <a href="https://wa.me/526623538274?text=Hello,%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-gradient-to-r from-luxury-gold to-[#a88231] hover:from-luxury-gold-soft hover:to-luxury-gold text-black px-10 py-4 uppercase tracking-[0.2em] text-[11px] font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(204,167,80,0.3)] rounded-sm">
                                Quote Now
                            </a>
                            <a href="https://wa.me/526623538274?text=Hello,%20I%20would%20like%20to%20schedule%20a%20call." target="_blank" rel="noopener noreferrer" className="inline-block text-center border border-luxury-gold/50 hover:border-luxury-gold hover:bg-luxury-gold/10 text-luxury-white px-10 py-4 uppercase tracking-[0.2em] text-[11px] font-bold transition-all duration-300 backdrop-blur-sm rounded-sm relative z-20 overflow-hidden">
                                Contact
                            </a>
                        </div>

                        <div className="text-center w-full max-w-xl mx-auto lg:mx-0">
                            <p className="text-[14px] md:text-[15px] tracking-[0.25em] uppercase text-luxury-gold font-medium">
                                Your comfort and safety, our commitment.
                            </p>
                        </div>
                    </div>

                    {/* Right Image Container - Logo */}
                    <div className="w-full lg:w-1/2 relative flex justify-center items-center z-10 pointer-events-none mt-2 lg:mt-0 lg:py-0">

                        {/* Soft gradient toward the right side for separation */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[120%] bg-gradient-to-l from-[#1a1a1a]/40 to-transparent blur-[80px] -z-20"></div>

                        {/* Subtle gold halo/glow effect behind the logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] lg:w-[50%] lg:h-[50%] bg-[#a88231]/15 rounded-full blur-[100px] -z-10 lg:translate-x-8"></div>

                        {/* Optional extremely subtle gold particle effect / background texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,167,80,0.03)_0%,transparent_60%)] -z-10 lg:translate-x-8"></div>

                        {/* Logo Wrapper */}
                        <div className="relative w-[65%] sm:w-[60%] lg:w-[115%] lg:h-[75vh] aspect-[2/3] lg:aspect-auto flex justify-center items-center transform lg:translate-x-12">
                            <Image
                                src="/rhino-logo-transp-v2.png"
                                alt="Luxury VIP Protection Hero Presentation"
                                fill
                                className="object-contain drop-shadow-[0_15px_40px_rgba(204,167,80,0.15)]"
                                priority
                            />
                        </div>
                    </div>

                </section>

                {/* STRUCTURED SERVICES SECTION */}
                <section id="servicios" className="py-24 border-t border-luxury-gray/10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-px bg-luxury-gold"></div>
                                <span className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] font-semibold">WHAT WE OFFER</span>
                            </div>
                            <h2 className="text-4xl md:text-[3.5rem] md:leading-tight font-display font-light">
                                EXCLUSIVE <span className="font-bold text-luxury-gold drop-shadow-[0_0_10px_rgba(204,167,80,0.3)]">SERVICES</span>
                            </h2>
                        </div>
                        <p className="text-[16px] md:text-[18px] text-luxury-gray max-w-md lg:max-w-xl lg:mr-10 xl:mr-20 tracking-[0.1em] font-light leading-relaxed">
                            Structured solutions for executives, diplomats, and personalities who require operational control and impeccable logistics.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-stretch gap-6">
                        {[
                            { title: "VEHICLE RENTAL WITH OR WITHOUT CHAUFFEUR", desc: "We provide a fleet of armored and non-armored SUVs, certified under strict safety standards. Choose the option with or without a chauffeur according to your needs.", image: "/service1.png" },
                            { title: "CORPORATE AND INDIVIDUAL CLIENT SUPPORT", desc: "We provide solutions for both corporations requiring constant security and individual clients seeking occasional protection or special event support.", image: "/service2.png" },
                            { title: "PROFESSIONAL CHAUFFEURS", desc: "Our drivers are highly trained in defensive driving, security protocols, and VIP attention, guaranteeing punctuality, discretion, and professionalism on every journey.", image: "/service3.png" },
                            { title: "MOBILITY BY DAY, WEEK, OR MONTH", desc: "We offer flexible private mobility schemes by day, week, or month, ideal for executive agendas, special events, institutional visits, or extended stays, with direct coordination, personalized attention, and 24/7 operational assistance throughout the service.", image: "/service4.png" },
                            { title: "PERSONALIZED ONBOARD EXPERIENCE", desc: "We coordinate personalized experiences during transport, with executive or premium catering options, selected beverages, and comfort amenities, available upon prior request and advanced planning.", image: "/experiencia-personalizada.jpg" }
                        ].map((srv, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group border border-luxury-gray/20 bg-luxury-charcoal/40 hover:bg-black hover:border-luxury-gold/50 transition-all duration-500 rounded-sm flex flex-col relative overflow-hidden backdrop-blur-sm shadow-md">

                                {/* Image Header */}
                                <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-luxury-gray/20 group-hover:border-luxury-gold/30 transition-colors duration-500">
                                    <Image
                                        src={srv.image}
                                        alt={srv.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    {/* Dark gradient overlay matching the luxury black theme */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-charcoal/30 to-black/10 mix-blend-multiply group-hover:from-luxury-black/90 transition-all duration-500"></div>

                                    {/* Accents overlay */}
                                    <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay group-hover:bg-luxury-gold/10 transition-colors"></div>

                                    {/* Floating Number aligned to standard layout */}
                                    <span className="absolute top-4 right-6 text-luxury-gold font-display font-bold text-3xl opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-lg z-10">
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1 relative z-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-2xl group-hover:bg-luxury-gold/20 transition-all duration-500 pointer-events-none"></div>

                                    <h3 className="text-[15px] md:text-base font-bold tracking-[0.14em] mb-4 font-display uppercase leading-relaxed text-luxury-white">
                                        {srv.title}
                                    </h3>
                                    <p className="text-[16px] md:text-[17px] text-luxury-gray tracking-wide leading-[1.8em] flex-1">
                                        {srv.desc}
                                    </p>

                                    <div className="mt-8">
                                        <a
                                            href={`https://wa.me/526623538274?text=${encodeURIComponent('Hello! I want to know more about: ' + srv.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[9px] text-luxury-gold uppercase tracking-[0.2em] font-bold flex items-center gap-2 group-hover:gap-4 transition-all w-max cursor-pointer"
                                        >
                                            Learn More <span className="text-sm">→</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="text-center w-full mt-16 md:mt-20">
                        <p className="text-[14px] md:text-[15px] tracking-[0.25em] uppercase text-luxury-gold font-medium">
                            Your comfort and safety, our commitment.
                        </p>
                    </div>
                </section>

                {/* VEHICLE CATALOG SLIDER SECTION */}
                <section id="flota" className="py-24 border-t border-luxury-gray/10 relative">
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-8 h-px bg-luxury-gold"></div>
                            <span className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] font-semibold">EXCLUSIVE CATALOG</span>
                            <div className="w-8 h-px bg-luxury-gold"></div>
                        </div>
                        <h2 className="text-4xl md:text-[3.5rem] font-display font-light">
                            FLEET
                        </h2>
                    </div>

                    <VehicleSlider />

                    <div className="text-center w-full mt-16 md:mt-24">
                        <p className="text-[14px] md:text-[15px] tracking-[0.25em] uppercase text-luxury-gold font-medium">
                            Your comfort and safety, our commitment.
                        </p>
                    </div>
                </section>

                {/* COBERTURA GEOGRÁFICA SECTION */}
                <section id="cobertura" className="py-24 border-t border-luxury-gray/10 relative">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        {/* Left Side: Text Content */}
                        <div className="w-full lg:w-5/12 relative z-10 space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-px bg-luxury-gold"></div>
                                <span className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] font-semibold">NATIONAL PRESENCE</span>
                            </div>

                            <h2 className="text-4xl md:text-[3.5rem] md:leading-tight font-display font-light mb-8 uppercase">
                                GEOGRAPHIC <span className="font-bold text-luxury-gold drop-shadow-[0_0_10px_rgba(204,167,80,0.3)]">COVERAGE</span>
                            </h2>

                            <p className="text-[20px] md:text-[23px] text-luxury-gray tracking-[0.05em] font-light mb-8 whitespace-nowrap">
                                We operate in your <span className="text-[#a88231] font-medium">key destinations:</span>
                            </p>

                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:gap-x-8 text-[18px] md:text-[20px] text-luxury-white font-light tracking-[0.1em] mb-12">
                                <div className="flex items-center gap-4 whitespace-nowrap"><span className="text-luxury-white text-base md:text-lg">✓</span> Mexico City</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> Los Cabos</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> Monterrey</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> Tijuana</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> Guadalajara</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> Mazatlán</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> Cancún</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> San Diego</div>
                                <div className="flex items-center gap-4 whitespace-nowrap"><span className="text-luxury-white text-base md:text-lg">✓</span> Puerto Vallarta</div>
                                <div className="flex items-center gap-4"><span className="text-luxury-white text-base md:text-lg">✓</span> Los Angeles</div>
                            </div>

                            <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 border-l-[3px] border-l-[#D4AF37] p-6 lg:p-7 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm mt-4">
                                <p className="text-[17px] md:text-[18px] text-white tracking-[0.05em] font-light leading-relaxed">
                                    We move units to any city according to your itinerary; secure logistics and executive punctuality.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Map Image */}
                        <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end z-10 transition-all duration-1000 ease-out">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10"></div>

                            <div className="relative w-full aspect-square md:aspect-[16/9] lg:aspect-auto lg:h-[950px] max-w-none drop-shadow-[0_15px_40px_rgba(212,175,55,0.08)] lg:translate-x-12 lg:scale-[1.25] hover:lg:scale-[1.3] origin-right">
                                <Image
                                    src="/mapa-dorado-vip.png"
                                    alt="Geographic Coverage Map in Mexico"
                                    fill
                                    className="object-contain object-center lg:object-right"
                                    priority
                                />
                            </div>
                        </div>

                    </div>

                    <div className="text-center w-full mt-16 md:mt-24">
                        <p className="text-[14px] md:text-[15px] tracking-[0.25em] uppercase text-luxury-gold font-medium">
                            Your comfort and safety, our commitment.
                        </p>
                    </div>
                </section>

                {/* TRANSPARENCIA Y CONFIANZA SECTION */}
                <section id="transparencia" className="py-24 border-t border-luxury-gray/10 relative">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        {/* Left Side: Text Content */}
                        <div className="w-full lg:w-5/12 relative z-10 space-y-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-px bg-luxury-gold"></div>
                                <span className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] font-semibold">SECURITY AND BACKING</span>
                            </div>

                            <h2 className="text-4xl md:text-[3.5rem] md:leading-tight font-display font-light mb-8 uppercase">
                                TRANSPARENCY AND <span className="font-bold text-luxury-gold drop-shadow-[0_0_10px_rgba(204,167,80,0.3)]">TRUST</span>
                            </h2>

                            <div className="border border-luxury-gold/30 bg-[#1a1a1a]/40 p-6 md:p-8 rounded-sm shadow-[0_5px_25px_rgba(204,167,80,0.05)] backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 blur-2xl group-hover:bg-luxury-gold/20 transition-all duration-500 pointer-events-none"></div>
                                <p className="text-[17px] md:text-[19px] text-luxury-white tracking-[0.05em] font-light leading-relaxed italic border-l-2 border-luxury-gold/70 pl-5">
                                    "References available upon request to maintain our clients' privacy."
                                </p>
                            </div>

                            <div className="space-y-6 text-[16px] md:text-[18px] text-luxury-gray font-light leading-[1.8em] tracking-[0.05em]">
                                <p>
                                    When hiring a service with an operator, the assigned driver's identification is shared in advance, and a 24/7 direct contact is enabled for coordination and tracking.
                                </p>
                                <p>
                                    The operation is backed by clear contracts and internal policies that guarantee confidentiality, professionalism, and correct execution in each service.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end z-10 transition-all duration-1000 ease-out">
                            {/* Subtle gold glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D4AF37]/5 rounded-full blur-[100px] -z-10"></div>

                            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] max-w-none border border-luxury-gray/20 rounded-sm overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] group">
                                <Image
                                    src="/trust_chauffeur.png"
                                    alt="Professional chauffeur opening luxury SUV door"
                                    fill
                                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent mix-blend-multiply group-hover:from-luxury-black/70 transition-all duration-500"></div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center w-full mt-16 md:mt-24">
                        <p className="text-[14px] md:text-[15px] tracking-[0.25em] uppercase text-luxury-gold font-medium">
                            Your comfort and safety, our commitment.
                        </p>
                    </div>
                </section>

                {/* STRUCTURED CONTACT SECTION */}
                <section id="contacto" className="py-24 border-t border-luxury-gray/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-8 md:p-16 border border-luxury-gray/20 bg-luxury-charcoal/30 rounded-sm backdrop-blur-md relative overflow-hidden">

                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-luxury-gold/5 blur-[100px] -z-10 rounded-full"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-px bg-luxury-gold"></div>
                                <span className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] font-semibold">CONTACT</span>
                            </div>
                            <h2 className="text-4xl md:text-[2.75rem] md:leading-tight font-display font-light mb-6">
                                REQUEST A <br />
                                <span className="font-bold text-luxury-gold">PRIVATE VALUATION</span>
                            </h2>
                            <p className="text-[16px] md:text-[18px] tracking-[0.1em] text-luxury-gray font-light leading-[2em] max-w-sm mb-12">
                                Get in touch with our team to coordinate your logistics. We respond with maximum speed.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mb-10">
                                {/* Profile Image */}
                                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-luxury-gold/30 shrink-0 shadow-[0_5px_20px_rgba(204,167,80,0.1)]">
                                    <Image
                                        src="/profile-new.jpg"
                                        alt="Beatriz Mirazo - Public Relations"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay"></div>
                                </div>

                                <div className="space-y-6 text-[10px] tracking-[0.15em] font-bold uppercase w-full">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-luxury-gray/70 text-[18px] md:text-[20px] font-bold tracking-[0.1em] text-luxury-white">
                                            BEATRIZ MIRAZO
                                        </span>

                                        <span className="text-luxury-gray text-[18px] md:text-[19px] tracking-[0.15em] mb-2 normal-case font-medium">
                                            Director of Strategic Alliances and Operations
                                        </span>

                                        <a
                                            href="https://wa.me/526623538274?text=Hello,%20I%20would%20like%20to%20request%20a%20private%20valuation."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-luxury-gold text-sm md:text-base font-light tracking-[0.2em] hover:text-luxury-white transition-colors w-max group mt-2"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(204,167,80,0.5)] transition-all">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                            </svg>
                                            <span>+52 662 353 8274</span>
                                        </a>

                                        <span className="text-luxury-gray text-[13px] md:text-[14px] tracking-[0.05em] mt-2 normal-case font-light italic">
                                            Direct and confidential attention.
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-2">
                                <a href="https://wa.me/526623538274?text=Hello,%20I%20would%20like%20to%20request%20a%20private%20valuation." target="_blank" rel="noopener noreferrer" className="inline-block text-center border border-luxury-gold/50 bg-[#0B0B0B] hover:bg-luxury-gold hover:text-black text-luxury-gold hover:border-luxury-gold px-10 py-4 uppercase tracking-[0.2em] text-[11px] font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(204,167,80,0)] hover:shadow-[0_0_25px_rgba(204,167,80,0.3)] rounded-sm w-full md:w-auto">
                                    CONTACT VIA WHATSAPP
                                </a>
                            </div>
                        </div>

                        {/* Executive Institutional Block */}
                        <div className="relative z-10 w-full max-w-[720px] self-center rounded-sm border border-luxury-gray/10 bg-[#1F1F1F] p-5 shadow-lg sm:p-6 md:p-8 lg:max-w-[95%] lg:justify-self-end lg:p-10">
                            <h3 className="font-display text-[17px] font-light uppercase leading-[1.15] tracking-[0.03em] text-luxury-white sm:text-[19px] md:text-[22px] lg:text-[26px]">
                                ABSOLUTE <br className="sm:hidden" /> CONFIDENTIALITY
                            </h3>

                            <div className="mt-4 h-[1px] w-12 bg-luxury-gold/50"></div>

                            <div className="mt-4 space-y-4">
                                <p className="text-[14px] font-light leading-[1.75] tracking-[0.02em] text-luxury-gray sm:text-[15px] md:text-[16px] lg:text-[17px]">
                                    Every request is handled under strict protocols of discretion and strategic security.
                                </p>

                                <p className="text-[14px] font-light leading-[1.75] tracking-[0.02em] text-luxury-gray sm:text-[15px] md:text-[16px] lg:text-[17px]">
                                    Our team coordinates each transfer with executive precision and absolute confidentiality.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* FULL SCREEN SEPARATOR IMAGE */}
                <section className="relative w-full overflow-hidden bg-black">
                    <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:min-h-screen">
                        <Image
                            src="/fleet-scene.jpg"
                            alt="Luxury VIP Protection Fleet Display"
                            fill
                            className="object-contain object-center lg:object-cover"
                            sizes="100vw"
                            priority={false}
                        />
                    </div>
                </section>
                {/* FOOTER */}
                <footer className="py-12 mt-12 border-t border-luxury-gray/10 text-center flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <a href="https://wa.me/526623538274?text=Hello,%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-luxury-gold text-[11px] tracking-[0.15em] hover:text-luxury-white transition-colors font-bold uppercase">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            +52 662 353 8274
                        </a>
                    </div>
                    <p className="text-[13px] md:text-[14px] tracking-[0.2em] text-luxury-gray/60 uppercase mt-4">
                        © {new Date().getFullYear()} Luxury VIP Protection. All rights reserved.
                    </p>
                </footer>

            </div >
        </main >
    );
}
