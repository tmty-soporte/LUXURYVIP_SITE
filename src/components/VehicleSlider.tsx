'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fleetData = [
    {
        id: 'suburban',
        name: 'SUBURBAN HIGH COUNTRY',
        versions: 'RST, LT, HIGH COUNTRY',
        images: [
            '/suburban-1.jpg',
            '/suburban-2.jpg',
            '/suburban-3.jpg'
        ],
        thumbnail: '/suburban-1.jpg',
    },
    {
        id: 'yukon',
        name: 'GMC YUKON',
        versions: 'XL',
        images: [
            '/yukon-3.jpg',
            '/yukon-1.jpg',
            '/yukon-2.jpg'
        ],
        thumbnail: '/yukon-3.jpg',
    },
    {
        id: 'escalade',
        name: 'CADILLAC ESCALADE',
        versions: 'PREMIUM LUXURY, SPORT PLATINUM',
        images: [
            '/escalade-3.jpg',
            '/escalade-1.jpg',
            '/escalade-2.jpg'
        ],
        thumbnail: '/escalade-3.jpg',
    }
];

export default function VehicleSlider() {
    const [currentVehicleIndex, setCurrentVehicleIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Swipe state
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const activeVehicle = fleetData[currentVehicleIndex];

    const selectVehicle = (index: number) => {
        setCurrentVehicleIndex(index);
        setCurrentImageIndex(0); // Reset inner gallery on vehicle change
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === activeVehicle.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? activeVehicle.images.length - 1 : prev - 1));
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEndEvent = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) {
            nextImage();
        } else if (distance < -minSwipeDistance) {
            prevImage();
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-12">
            {/* Featured Vehicle Area */}
            <div className="relative border border-luxury-gray/20 bg-luxury-charcoal/30 backdrop-blur-sm rounded-sm p-4 md:p-12 mb-8 group h-auto min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center overflow-hidden">

                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-luxury-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-luxury-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

                {/* Vehicle Image Presentation (Animation wrapper) */}
                <div
                    className="relative z-10 w-full flex-1 flex flex-col items-center justify-center mt-4 md:mt-0"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEndEvent}
                >
                    <div className="w-full max-w-[850px] aspect-video relative rounded-lg border border-luxury-gray/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] group/inner bg-black">

                        {/* Images Stack */}
                        {activeVehicle.images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                alt={`${activeVehicle.name} - View ${idx + 1}`}
                                fill
                                className={`object-cover transition-opacity duration-700 ease-in-out ${idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                priority={idx === 0}
                            />
                        ))}

                        {/* Gradients to blend image into the dark luxury aesthetic */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-luxury-black via-luxury-charcoal/40 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-luxury-black/60 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-overlay z-20 pointer-events-none"></div>

                        {/* Inner Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-luxury-white/50 hover:text-luxury-gold transition-all duration-300 border border-transparent hover:border-luxury-gold/30 rounded-full bg-black/40 backdrop-blur-md opacity-100 md:opacity-0 group-hover/inner:opacity-100"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-luxury-white/50 hover:text-luxury-gold transition-all duration-300 border border-transparent hover:border-luxury-gold/30 rounded-full bg-black/40 backdrop-blur-md opacity-100 md:opacity-0 group-hover/inner:opacity-100"
                            aria-label="Siguiente imagen"
                        >
                            <ChevronRight className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                            {activeVehicle.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-luxury-gold w-6' : 'bg-luxury-gray/50 hover:bg-luxury-white'}`}
                                    aria-label={`Ver imagen ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vehicle Details */}
                <div className="relative z-10 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 mt-8">
                    <p className="text-[14px] md:text-[16px] text-luxury-gray uppercase tracking-[0.2em] mb-2 font-semibold">
                        Modelos Recientes
                    </p>
                    <h3 className="text-4xl md:text-5xl font-display font-light text-luxury-white mb-6 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        {activeVehicle.name}
                    </h3>
                    <a
                        href="https://wa.me/526623538274?text=Hola,%20quiero%20informaci%C3%B3n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-black px-8 py-3 uppercase tracking-[0.2em] text-[13px] sm:text-[15px] font-bold transition-all duration-300 rounded-sm hover:shadow-[0_0_20px_rgba(204,167,80,0.4)]"
                    >
                        <span>RESERVAR</span>
                        <span className="font-serif font-light text-lg leading-none transform translate-y-[-1px]">→</span>
                    </a>
                </div>
            </div>

            {/* Fleet Selection Thumbnails */}
            <div className="flex flex-row justify-center gap-4 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbars">
                {fleetData.map((vehicle, index) => {
                    const isActive = index === currentVehicleIndex;
                    return (
                        <button
                            key={vehicle.id}
                            onClick={() => selectVehicle(index)}
                            className={`
                snap-center shrink-0 w-[140px] md:w-[200px] flex flex-col items-center p-4 border rounded-sm transition-all duration-300 group
                ${isActive ? 'border-luxury-gold bg-luxury-black/80 shadow-[0_0_15px_rgba(204,167,80,0.15)]' : 'border-luxury-gray/20 bg-luxury-charcoal/40 hover:border-luxury-gold/50'}
              `}
                        >
                            <div className={`relative w-full h-16 md:h-24 rounded border mb-4 overflow-hidden shadow-inner ${isActive ? 'border-luxury-gold/50 shadow-[0_0_10px_rgba(204,167,80,0.2)]' : 'border-luxury-gray/10'}`}>
                                <Image
                                    src={vehicle.thumbnail}
                                    alt={`${vehicle.name} thumbnail`}
                                    fill
                                    className={`object-cover transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}`}
                                />
                                <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-overlay pointer-events-none"></div>
                            </div>
                            <span className={`text-[13px] md:text-[15px] font-display uppercase tracking-[0.15em] transition-colors ${isActive ? 'text-luxury-gold font-bold' : 'text-luxury-gray group-hover:text-luxury-white'}`}>
                                {vehicle.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
