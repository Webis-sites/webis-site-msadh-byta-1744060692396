'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils, FaPizzaSlice, FaIceCream, FaWineGlassAlt, FaLeaf } from 'react-icons/fa';

// Define types for menu items
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// Define props for the component
interface MenuSectionProps {
  title?: string;
  subtitle?: string;
}

const categories = [
  { id: 'all', name: 'הכל', icon: <FaUtensils /> },
  { id: 'appetizers', name: 'מנות ראשונות', icon: <FaLeaf /> },
  { id: 'main', name: 'מנות עיקריות', icon: <FaPizzaSlice /> },
  { id: 'desserts', name: 'קינוחים', icon: <FaIceCream /> },
  { id: 'drinks', name: 'משקאות', icon: <FaWineGlassAlt /> },
];

// Sample menu items
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'סלט ירקות ישראלי',
    description: 'עגבניות, מלפפונים, פלפלים, בצל סגול וזיתים ברוטב שמן זית ולימון',
    price: 42,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    category: 'appetizers',
  },
  {
    id: '2',
    name: 'חומוס ביתי',
    description: 'חומוס קרמי מוגש עם טחינה, שמן זית, פפריקה ופיתות חמות',
    price: 38,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36',
    category: 'appetizers',
  },
  {
    id: '3',
    name: 'שקשוקה מסורתית',
    description: 'ביצים ברוטב עגבניות עשיר עם פלפלים, בצל ותבלינים מוגש עם טחינה ולחם',
    price: 58,
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa',
    category: 'main',
  },
  {
    id: '4',
    name: 'פילה דניס',
    description: 'פילה דג טרי צלוי בתנור עם שום, לימון ועשבי תיבול מוגש עם ירקות עונתיים',
    price: 98,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
    category: 'main',
  },
  {
    id: '5',
    name: 'קנאפה',
    description: 'קינוח מסורתי של אטריות קדאיף במילוי גבינה מתוקה ומי ורדים',
    price: 42,
    image: 'https://images.unsplash.com/photo-1588165171080-c89acfa5ee83',
    category: 'desserts',
  },
  {
    id: '6',
    name: 'מלבי',
    description: 'קינוח חלב מסורתי מבושם במי ורדים ומוגש עם אגוזים וסירופ',
    price: 36,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
    category: 'desserts',
  },
  {
    id: '7',
    name: 'לימונדה ביתית',
    description: 'לימונדה טרייה עם נענע ולימונים סחוטים במקום',
    price: 18,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc',
    category: 'drinks',
  },
  {
    id: '8',
    name: 'יין אדום מקומי',
    description: 'יין אדום משובח מהגליל העליון, כוס',
    price: 32,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    category: 'drinks',
  },
];

const MenuSection: React.FC<MenuSectionProps> = ({ 
  title = "התפריט שלנו", 
  subtitle = "מבחר מהמנות האהובות במסעדה" 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const [isClient, setIsClient] = useState(false);

  // Handle hydration issues with Next.js
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  return (
    <section className="py-16 px-4 bg-white" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={`${item.image}?w=600&h=400&fit=crop&crop=entropy`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={parseInt(item.id) <= 4}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">₪{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                    הזמן עכשיו
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;