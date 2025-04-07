'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900 text-right" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/restaurant-hero.jpg"
          alt="מסעדה ביתא - תמונת רקע"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJnAPfCuZGHQAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-end justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            מסעדה מוביל בישראל
          </motion.h1>
          
          <motion.p
            className="mb-8 text-xl text-gray-200 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/reservation">
              <button 
                className="rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="קבע תור עכשיו"
              >
                קבע תור עכשיו
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-secondary to-transparent opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  );
};

export default HeroSection;