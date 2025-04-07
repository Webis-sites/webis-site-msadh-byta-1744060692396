'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  discount?: string;
  validUntil?: string;
  ctaText: string;
  ctaLink: string;
}

const specialOffers: SpecialOffer[] = [
  {
    id: 'offer1',
    title: 'ארוחת זוגית מיוחדת',
    description: 'ארוחה זוגית הכוללת מנה ראשונה, עיקרית, קינוח ויין ב-20% הנחה',
    imageUrl: '/images/couple-dinner.jpg',
    discount: '20%',
    validUntil: '31.12.2023',
    ctaText: 'הזמינו עכשיו',
    ctaLink: '/reservations'
  },
  {
    id: 'offer2',
    title: 'תפריט עונתי חדש',
    description: 'טעמו את המנות החדשות שלנו עם מרכיבים טריים של העונה',
    imageUrl: '/images/seasonal-menu.jpg',
    ctaText: 'לתפריט המלא',
    ctaLink: '/menu'
  },
  {
    id: 'offer3',
    title: 'ארוחת בוקר מורחבת',
    description: 'בימי שישי בלבד - ארוחת בוקר מורחבת עם שתייה חמה ב-15% הנחה',
    imageUrl: '/images/breakfast-special.jpg',
    discount: '15%',
    validUntil: 'כל יום שישי',
    ctaText: 'פרטים נוספים',
    ctaLink: '/breakfast'
  }
];

export default function SpecialOffersSection() {
  return (
    <section dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">מבצעים מיוחדים</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            הצעות מיוחדות ומבצעים עונתיים שאסור לכם לפספס. הצטרפו אלינו לחוויה קולינרית בלתי נשכחת.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={offer.imageUrl}
                  alt={offer.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                {offer.discount && (
                  <div className="absolute top-4 left-4 bg-primary text-white font-bold py-1 px-3 rounded-full">
                    הנחה {offer.discount}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                {offer.validUntil && (
                  <p className="text-sm text-gray-500 mb-4">
                    בתוקף עד: {offer.validUntil}
                  </p>
                )}
                
                <Link
                  href={offer.ctaLink}
                  className="inline-block w-full text-center py-2 px-4 bg-secondary hover:bg-secondary-dark text-white font-medium rounded-md transition-colors duration-300"
                  aria-label={`${offer.ctaText} - ${offer.title}`}
                >
                  {offer.ctaText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/offers" 
            className="inline-flex items-center py-3 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300"
          >
            <span>לכל המבצעים</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}