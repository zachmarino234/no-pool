'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Pause, Play } from 'lucide-react';
import BlueWordmark from "./BlueWordmark";
import OutOfOrder from "../../public/outoforder.jpg";
import TrishaPhone from "../../public/trishaphone.jpg";

const Hero = () => {

    // Image cycle array
    const images = [
        OutOfOrder,
        TrishaPhone
        // More images go here...
    ];

    // useState to track the image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useState to track when the image is transitioning
    const [isTransitioning, setIsTransitioning] = useState(false);

    // useState to track when paused
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        // Only set up interval if there's more than one image and not paused
        if (images.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);

            // After fade out, change image
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % images.length
                );
                setIsTransitioning(false);
            }, 500); // Half of transition time for crossfade effect

        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length, isPaused]);

    return (
        <div>
            {/* Image layers for crossfade */}
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    priority={index === 0}
                />
            ))}

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center px-10 z-20">
                <BlueWordmark />
            </div>

            {/* Pause/Play Button */}
            <button
                onClick={() => setIsPaused(!isPaused)}
                className="absolute bottom-6 right-6 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group cursor-pointer"
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
                {isPaused ? (
                    <Play className="w-5 h-5 text-white" fill="white" />
                ) : (
                    <Pause className="w-5 h-5 text-white" fill="white" />
                )}
            </button>
        </div>
    );
};

export default Hero;