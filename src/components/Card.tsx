import Image from "next/image";
import outoforder from "../../public/outoforder_logo.png"
import { MapPin, Clock } from "lucide-react";

interface CardProps {
    showName: string;
    location?: string;
    dateStart?: Date;
    dateEnd?: Date;
    isActive?: boolean;
    ticketUrl?: string;
    backgroundImageUrl?: string;
    description?: string;
}

const Card = ({ showName, location, dateStart, dateEnd, isActive = false, ticketUrl, backgroundImageUrl, description = "description" }: CardProps) => {

    const formatDateRange = (start?: Date, end?: Date) => {
        if (!start) return "";

        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
        const startFormatted = start.toLocaleDateString('en-US', options);

        // Add ordinal suffix (st, nd, rd, th)
        const addOrdinal = (dateStr: string) => {
            const day = parseInt(dateStr.match(/\d+/)?.[0] || '0');
            const suffix = day === 11 || day === 12 || day === 13
                ? 'th'
                : ['th', 'st', 'nd', 'rd'][day % 10 > 3 ? 0 : day % 10];
            return dateStr.replace(/\d+/, `${day}${suffix}`);
        };

        // If no end date, return single date format
        if (!end) {
            const year = start.getFullYear();
            return `${addOrdinal(startFormatted)}, ${year}`;
        }

        // If end date exists, return date range
        const endFormatted = end.toLocaleDateString('en-US', options);
        const year = end.getFullYear();
        return `${addOrdinal(startFormatted)} - ${addOrdinal(endFormatted)}, ${year}`;
    };

    const renderDescription = (text: string) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                {index < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };

    return (
        <div
            className="flex w-[1272px] h-[640px] px-24 items-center gap-2.5 shrink-0 rounded-2xl"
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.10) 100%)${backgroundImageUrl ? `, url('${backgroundImageUrl}')` : ''}`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="flex w-[398px] py-2.5 flex-col items-start gap-10 shrink-0">
                <div className="flex flex-col items-start gap-5 self-stretch">
                    <Image
                        src={outoforder}
                        alt={showName}
                        className="w-auto h-auto"
                        style={{ maxWidth: '300px' }}
                    />
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <div className="flex items-center gap-2.5 self-stretch">
                            <MapPin className="w-5 h-5 text-white" />
                            <p className="text-white text-base">{location || "East Village Basement"}</p>
                        </div>
                        <div className="flex items-center gap-2.5 self-stretch">
                            <Clock className="w-5 h-5 text-white" />
                            <p className="text-white text-base">{formatDateRange(dateStart, dateEnd)}</p>
                        </div>
                    </div>
                    {isActive && ticketUrl && (
                        <a
                            href={ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FF0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#CC0000] transition-colors"
                            style={{ fontFamily: 'Helvetica, sans-serif' }}
                        >
                            Buy Tickets
                        </a>
                    )}
                </div>
                <p className="text-white text-base leading-relaxed">
                    {renderDescription(description)}
                </p>
            </div>
        </div>
    );
};

export default Card;