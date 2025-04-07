'use client';

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import HealthFocusSection from '../components/HealthFocusSection';
import ServicesSection from '../components/ServicesSection';
import SpecialOffersSection from '../components/SpecialOffersSection';
import GallerySection from '../components/GallerySection';
import BookingSection from '../components/BookingSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <Header />
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <HealthFocusSection />
    <ServicesSection />
    <SpecialOffersSection />
    <GallerySection />
    <BookingSection />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מסעדה ביתא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}