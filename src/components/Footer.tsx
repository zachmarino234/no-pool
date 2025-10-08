import Image from "next/image";
import wordmark from "../../public/wordmark_white.svg"
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="flex flex-col lg:flex-row-reverse px-5 lg:px-32 lg:max-3xl:justify-between 3xl:justify-center 3xl:gap-32 py-10 items-center self-stretch gap-5 bg-neutral-black text-neutral-white">
            <Image
                src={wordmark}
                width={200}
                height={300}
                alt="No Pool Productions"
            />
            <div className="flex justify-center items-end gap-5">
                <SocialIcon url="https://www.instagram.com/nopoolproductions/" target="_blank" />
                <SocialIcon url="https://tiktok.com" target="_blank" hidden/>
                <SocialIcon url="https://www.linkedin.com/company/no-pool-prods/" target="_blank" />
            </div>
            <div className="flex flex-col items-start gap-5">
                <div className="flex justify-between items-start self-stretch pt-2.5">
                    <div className="flex flex-col items-start gap-2.5">
                        <h6>Links</h6>
                        <Link href="/">Home</Link>
                        <Link href="/work" hidden>Work</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                        <h6>Company</h6>
                        <Link href="/brand">Brand</Link>
                        <Link href="/jobs" hidden>Jobs</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
                <div>
                    Website Designed by <a href="https://zmarino.com" target="_blank" className="font-bold">Zach Marino</a> <br />
                    Copyright © 2025 No Pool Productions
                </div>
            </div>
        </footer>
    );
};

export default Footer;