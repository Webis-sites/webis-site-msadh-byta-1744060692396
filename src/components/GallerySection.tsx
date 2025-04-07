'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { MdRestaurantMenu, MdOutlineRoomService, MdOutlineLocalDining } from 'react-icons/md';
import { BiDrink } from 'react-icons/bi';

// Define the image type
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'ambiance' | 'dishes' | 'drinks' | 'service';
  width: number;
  height: number;
}

// Sample gallery data - in a real app, this would come from a CMS or API
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/restaurant-interior-1.jpg',
    alt: 'אווירת המסעדה - חלל פנימי מואר',
    category: 'ambiance',
    width: 800,
    height: 600
  },
  {
    id: '2',
    src: '/images/dish-1.jpg',
    alt: 'מנה ראשונה - סלט ירקות טרי',
    category: 'dishes',
    width: 800,
    height: 1000
  },
  {
    id: '3',
    src: '/images/drink-1.jpg',
    alt: 'קוקטייל הבית',
    category: 'drinks',
    width: 800,
    height: 800
  },
  {
    id: '4',
    src: '/images/service-1.jpg',
    alt: 'צוות השירות שלנו',
    category: 'service',
    width: 800,
    height: 600
  },
  {
    id: '5',
    src: '/images/restaurant-interior-2.jpg',
    alt: 'פינת ישיבה חיצונית',
    category: 'ambiance',
    width: 800,
    height: 800
  },
  {
    id: '6',
    src: '/images/dish-2.jpg',
    alt: 'מנה עיקרית - פילה דג טרי',
    category: 'dishes',
    width: 800,
    height: 600
  },
  {
    id: '7',
    src: '/images/drink-2.jpg',
    alt: 'יין אדום מובחר',
    category: 'drinks',
    width: 800,
    height: 1000
  },
  {
    id: '8',
    src: '/images/service-2.jpg',
    alt: 'חוויית האירוח שלנו',
    category: 'service',
    width: 800,
    height: 800
  },
  {
    id: '9',
    src: '/images/dish-3.jpg',
    alt: 'קינוח מיוחד של השף',
    category: 'dishes',
    width: 800,
    height: 800
  }
];

// Filter button component
interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
      active 
        ? 'bg-primary text-white shadow-md' 
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
    aria-pressed={active}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  // Handle lightbox open
  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  // Handle lightbox close
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  // Handle keyboard events for accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  }, [closeLightbox]);

  return (
    <section 
      className="py-16 px-4 md:px-8 bg-gray-50 dir-rtl" 
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="gallery-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            הגלריה שלנו
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            צפו בתמונות ממסעדת ביתא - האווירה, המנות המיוחדות והחוויה הקולינרית שאנו מציעים
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 rtl">
          <FilterButton
            active={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
            icon={<span className="text-lg">הכל</span>}
            label="הכל"
          />
          <FilterButton
            active={selectedCategory === 'ambiance'}
            onClick={() => setSelectedCategory('ambiance')}
            icon={<MdOutlineLocalDining className="text-lg" />}
            label="אווירה"
          />
          <FilterButton
            active={selectedCategory === 'dishes'}
            onClick={() => setSelectedCategory('dishes')}
            icon={<MdRestaurantMenu className="text-lg" />}
            label="מנות"
          />
          <FilterButton
            active={selectedCategory === 'drinks'}
            onClick={() => setSelectedCategory('drinks')}
            icon={<BiDrink className="text-lg" />}
            label="משקאות"
          />
          <FilterButton
            active={selectedCategory === 'service'}
            onClick={() => setSelectedCategory('service')}
            icon={<MdOutlineRoomService className="text-lg" />}
            label="שירות"
          />
        </div>

        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg shadow-md aspect-auto h-[300px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(image)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(image);
                  }
                }}
                aria-label={`פתח תמונה גדולה: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPYe5+KtAAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">לא נמצאו תמונות בקטגוריה זו</p>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="dialog"
              aria-modal="true"
              aria-label="תצוגת תמונה מוגדלת"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={closeLightbox}
                  aria-label="סגור תצוגה מוגדלת"
                >
                  <FaTimes size={20} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                  <p>{selectedImage.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;