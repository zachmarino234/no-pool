'use client';

import Puddle from './Puddle';

interface Show {
    showName: string;
    role: string;
    imageUrl: string;
}

const PuddleSection = () => {
    const shows: Show[] = [
        {
            showName: "Out of Order",
            role: "Producer",
            imageUrl: "/outoforder.jpg"
        },
        {
            showName: "Trisha Paytas' Big Broadway Dream",
            role: "Lead Producer",
            imageUrl: "/trishaphone.jpg"
        },
        {
            showName: "Coming Soon!",
            role: "Producer",
            imageUrl: "/outoforder.jpg"
        },
        // Add more shows as needed
    ];

    return (
        <div className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 3xl:px-64">

            <h1 className='relative'>
                SEE WHAT WE&apos;VE BEEN UP TO...
            </h1>

            {/* Organic puddle layout - responsive positioning */}
            <div className="relative w-full min-h-[800px] sm:min-h-[900px] md:min-h-[700px]">

                {/* Large puddle - top left area */}
                <div className="absolute top-[20px] left-[5%] sm:top-[40px] sm:left-[8%] md:top-0 md:left-[10%]">
                    <Puddle
                        showName={shows[0].showName}
                        role={shows[0].role}
                        imageUrl={shows[0].imageUrl}
                        size="large"
                        shapeVariant={1}
                    />
                </div>

                {/* Medium puddle - top right area */}
                <div className="absolute top-[200px] right-[8%] sm:top-[220px] sm:right-[10%] md:top-[60px] md:right-[15%]">
                    <Puddle
                        showName={shows[1].showName}
                        role={shows[1].role}
                        imageUrl={shows[1].imageUrl}
                        size="medium"
                        shapeVariant={2}
                    />
                </div>

                {/* Medium puddle - middle left area */}
                <div className="absolute top-[400px] left-[18%] sm:top-[450px] sm:left-[24%] md:top-[280px] md:left-[38%]">
                    <Puddle
                        showName={shows[2].showName}
                        role={shows[2].role}
                        imageUrl={shows[2].imageUrl}
                        size="medium"
                        shapeVariant={3}
                    />
                </div>

                {/* Small puddle - lower right area */}
                {shows[3] && (
                    <div className="absolute top-[580px] right-[15%] sm:top-[620px] sm:right-[18%] md:top-[360px] md:right-[18%]">
                        <Puddle
                            showName={shows[3].showName}
                            role={shows[3].role}
                            imageUrl={shows[3].imageUrl}
                            size="small"
                            shapeVariant={4}
                        />
                    </div>
                )}

                {/* Small puddle - bottom left (if you have a 5th show) */}
                {shows[4] && (
                    <div className="absolute bottom-[40px] left-[20%] sm:bottom-[60px] sm:left-[22%] md:bottom-[20px] md:left-[18%]">
                        <Puddle
                            showName={shows[4].showName}
                            role={shows[4].role}
                            imageUrl={shows[4].imageUrl}
                            size="small"
                            shapeVariant={5}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PuddleSection;