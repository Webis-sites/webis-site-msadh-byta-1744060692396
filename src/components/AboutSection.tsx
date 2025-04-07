'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      dir="rtl" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/restaurant-chef.jpg"
              alt="שף המסעדה מכין אוכל"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-5xl font-bold text-gray-800 border-r-4 border-primary pr-4"
            >
              אודות המסעדה שלנו
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              אנחנו מסעדה מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-secondary bg-opacity-10 p-4 rounded-lg">
                <div className="text-secondary text-3xl font-bold">15+</div>
                <div className="text-gray-700">שנות ניסיון</div>
              </div>
              
              <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
                <div className="text-primary text-3xl font-bold">1000+</div>
                <div className="text-gray-700">לקוחות מרוצים</div>
              </div>
            </motion.div>
            
            <motion.button 
              variants={itemVariants}
              className="mt-8 bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="למד עוד על המסעדה שלנו"
            >
              קרא עוד
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">איכות מעולה</h3>
            <p className="text-gray-600">אנו משתמשים רק בחומרי הגלם הטריים והאיכותיים ביותר</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">שירות מהיר</h3>
            <p className="text-gray-600">אנו מתחייבים לזמני המתנה קצרים ושירות יעיל</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">חוויה נעימה</h3>
            <p className="text-gray-600">אנו מקפידים על אווירה נעימה וחמה לכל הלקוחות שלנו</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;