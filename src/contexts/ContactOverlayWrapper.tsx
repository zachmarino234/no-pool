'use client';

import ContactOverlay from '../components/ContactOverlay';
import { useContact } from '@/contexts/ContactContext';

export default function ContactOverlayWrapper() {
  const { isContactOpen, closeContact } = useContact();
  return <ContactOverlay isOpen={isContactOpen} onClose={closeContact} />;
}