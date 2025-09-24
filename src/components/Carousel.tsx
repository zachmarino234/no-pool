'use client';

import { useEffect, useRef } from 'react';
import ShowCard from './ShowCard';

const Carousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Center the middle card on mount
    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = 1272; // Your card width
            const gap = 48; // gap-12 = 3rem = 48px
            const spacerWidth = (window.innerWidth - cardWidth) / 2;
            
            // Calculate scroll position to center the second card
            const scrollPosition = spacerWidth + cardWidth + gap;
            
            // Set horizontal scroll without affecting vertical scroll
            container.scrollLeft = scrollPosition;
        }
    }, []);

    return (
        <div className="w-full bg-[#7CCCF8] pb-15">
            <div
                ref={scrollContainerRef}
                className="flex gap-12 w-full overflow-x-auto scrollbar-hide"
                style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {/* Spacer to allow first card to center */}
                <div className="flex-shrink-0 w-[calc(50vw-636px)]" />

                <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center' }}>
                    <ShowCard
                        showName="Trisha Paytas"
                        location="St. James Theater"
                        dateStart={new Date('2025-02-04')}
                        isActive={true}
                        ticketUrl="https://example.com"
                        backgroundImageUrl="/outoforder.png"
                    />
                </div>
                <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center' }}>
                    <ShowCard
                        showName="Out of Order"
                        location="East Village Basement"
                        dateStart={new Date('2025-06-27')}
                        dateEnd={new Date('2025-07-30')}
                        isActive={true}
                        ticketUrl="https://example.com"
                        backgroundImageUrl="/outoforder.png"
                        description={`Carl turned 40 and something strange happened... He couldn't write a play anymore. So he made this instead.

It's a game. A challenge. A bowl of index cards, pulled at random, now controls his fate. Each card holds a task designed to test his grit, his ingenuity, and his willingness to be humiliated.

If he fails to compete every challenge, he'll quit theatre forever. We're not joking.`}
                    />
                </div>
                <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center' }}>
                    <ShowCard
                        showName="Trisha Paytas"
                        location="St. James Theater"
                        dateStart={new Date('2025-06-27')}
                        dateEnd={new Date('2025-07-30')}
                        isActive={true}
                        ticketUrl="https://example.com"
                        backgroundImageUrl="/outoforder.png"
                    />
                </div>

                {/* Spacer to allow last card to center */}
                <div className="flex-shrink-0 w-[calc(50vw-636px)]" />
            </div>
        </div>
    );
};

export default Carousel;