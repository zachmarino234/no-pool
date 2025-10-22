// components/ContactOverlay.tsx
'use client';

import { useEffect, useState } from 'react';
import { Copy, Check, X } from 'lucide-react';

interface ContactOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactOverlay = ({ isOpen, onClose }: ContactOverlayProps) => {
    const [copied, setCopied] = useState(false);
    const email = 'hello@nopoolproductions.com';

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);

            // Reset after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-[100] transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full pointer-events-auto relative border-brand-primary border-2">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer" aria-label="Close">
                        <X className="w-6 h-6"/>
                    </button>

                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'aptly, sans-serif' }}>
                        GET IN TOUCH
                    </h2>

                    <p className="text-lg mb-6">
                        Drop us a line at:
                    </p>
                    <div className='flex gap-3 items-center'>
                        <a href={`mailto:${email}`} className="text-2xl text-[#0396FF] hover:text-[#0277BD] transition-colors font-bold" style={{ fontFamily: 'aptly, sans-serif' }}>
                            {email}
                        </a>
                        <button onClick={handleCopy} className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-75 cursor-pointer" aria-label={copied ? "Copied!" : "Copy email address"}>
                            {copied ? (
                                <Check className="w-6 h-6 text-grey-600" />
                            ) : (
                                <Copy className="w-6 h-6 text-gray-600" />
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ContactOverlay;