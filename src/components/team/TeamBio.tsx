import Image, { StaticImageData } from "next/image";
import Alex from "../../public/alex.png"
import { SocialIcon } from "react-social-icons";

interface TeamBioProps {
    name: string;
    title: string;
    children: React.ReactNode;
    imageURL: StaticImageData;
    linkedinURL?: string;
    email?: string;
    portfolio?: string;
}

const TeamBio = ({
    name,
    title,
    children,
    imageURL,
    linkedinURL,
    email,
    portfolio
}: TeamBioProps) => {
    return (
        <div className="flex flex-col sm:flex-row-reverse items-center p-5 gap-8 md:px-12 lg:px-32 xl:px-64 mb-6">
            <Image
                src={imageURL}
                className="w-[300px] h-[300px] object-cover rounded-2xl border-5 border-brand-primary shadow-image"
                alt="Photo" />
            <div className="flex flex-col items-start gap-8 max-sm:self-stretch ">
                <div className="flex flex-col items-start gap-1.5">
                    <div className="flex items-center gap-2.5">
                        <h2>{name}</h2>
                        <div className="w-[1px] h-[28px] bg-neutral-black" />
                        <SocialIcon url={linkedinURL} style={{width: "35px", height: "35px"}} target="_blank"/>
                        <SocialIcon url={email} style={{width: "35px", height: "35px"}} target="_blank"/>
                        <SocialIcon url={portfolio} style={{width: "35px", height: "35px"}} target="_blank"/>
                    </div>
                    <p className="font-black">{title}</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default TeamBio;