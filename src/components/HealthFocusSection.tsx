'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaAppleAlt, FaCarrot, FaSeedling } from 'react-icons/fa';
import Image from 'next/image';

interface HealthBenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HealthBenefit: React.FC<HealthBenefitProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-primary text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

const HealthFocusSection: React.FC = () => {
  const healthBenefits = [
    {
      icon: <FaLeaf />,
      title: "רכיבים אורגניים",
      description: "אנו משתמשים רק ברכיבים אורגניים וטריים מספקים מקומיים"
    },
    {
      icon: <FaHeartbeat />,
      title: "תזונה מאוזנת",
      description: "התפריט שלנו מתוכנן לספק ארוחות מאוזנות עשירות בחומרים מזינים"
    },
    {
      icon: <FaAppleAlt />,
      title: "אפשרויות צמחוניות",
      description: "מגוון רחב של מנות צמחוניות וטבעוניות טעימות ומזינות"
    },
    {
      icon: <FaCarrot />,
      title: "ללא גלוטן",
      description: "אפשרויות רבות ללא גלוטן המתאימות לבעלי רגישויות תזונתיות"
    },
    {
      icon: <FaSeedling />,
      title: "מזון מלא",
      description: "אנו מתמקדים במזונות מלאים ולא מעובדים לבריאות מיטבית"
    }
  ];

  return (
    <section className="py-16 bg-secondary/10 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">הגישה הבריאה שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            במסעדה ביתא אנו מחויבים להכנת מזון טעים ובריא שמזין את הגוף והנפש. הגישה שלנו מבוססת על עקרונות של תזונה מאוזנת ואיכותית.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {healthBenefits.map((benefit, index) => (
            <HealthBenefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/images/healthy-food-preparation.jpg"
                alt="הכנת מזון בריא במסעדה ביתא"
                fill
                className="object-cover"
              />
            </div>
            <motion.div 
              className="md:w-1/2 p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">המטבח שלנו</h3>
              <p className="text-gray-600 mb-4">
                השפים שלנו משתמשים בטכניקות בישול המשמרות את הערכים התזונתיים של המזון. אנו מבשלים בטמפרטורות נמוכות, משתמשים בשמנים בריאים ומוסיפים מינימום מלח וסוכר.
              </p>
              <p className="text-gray-600 mb-6">
                כל מנה מתוכננת בקפידה כדי לספק איזון מושלם של טעם, מרקם וערך תזונתי. אנו גאים להציע תפריט המתאים למגוון רחב של העדפות תזונתיות וצרכים בריאותיים.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                לתפריט המלא
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">הצטרפו אלינו לחוויה קולינרית בריאה</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            אנו מזמינים אתכם לגלות את הטעמים העשירים והמזינים של המטבח שלנו. בין אם אתם מחפשים ארוחה מזינה, אפשרויות ללא גלוטן, או פשוט מזון טעים ובריא, יש לנו משהו עבורכם.
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50">
              הזמינו מקום
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              למידע נוסף
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthFocusSection;