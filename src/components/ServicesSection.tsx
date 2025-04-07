'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaShoppingBag, FaUsers, FaCalendarAlt, FaLeaf, FaAppleAlt } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-primary text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaUtensils />,
      title: "ארוחה במסעדה",
      description: "חוויה קולינרית בריאה באווירה נעימה עם תפריט עשיר בחומרים טבעיים ואורגניים"
    },
    {
      icon: <FaShoppingBag />,
      title: "משלוח הביתה",
      description: "קחו את הטעמים הבריאים שלנו הביתה עם אפשרות לאיסוף עצמי מהמסעדה"
    },
    {
      icon: <MdDeliveryDining />,
      title: "משלוחים",
      description: "שירות משלוחים מהיר עד הבית, האוכל מגיע טרי וחם בכלים ידידותיים לסביבה"
    },
    {
      icon: <FaUsers />,
      title: "אירועים פרטיים",
      description: "אירוח אירועים פרטיים עם תפריט מותאם אישית לצרכים התזונתיים של האורחים"
    },
    {
      icon: <FaCalendarAlt />,
      title: "קייטרינג",
      description: "שירותי קייטרינג לאירועים ומפגשים עסקיים עם דגש על תזונה מאוזנת ובריאה"
    },
    {
      icon: <FaLeaf />,
      title: "תפריט צמחוני וטבעוני",
      description: "מגוון רחב של מנות צמחוניות וטבעוניות עשירות בחלבון וערכים תזונתיים"
    },
    {
      icon: <FaAppleAlt />,
      title: "ייעוץ תזונתי",
      description: "ייעוץ תזונתי אישי על ידי תזונאים מוסמכים לבניית תפריט מותאם אישית"
    }
  ];

  return (
    <section id="services" className="py-16 bg-light-green" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            במסעדת ביתא אנו מציעים מגוון שירותים המותאמים לאורח חיים בריא ומאוזן, עם דגש על מזון איכותי ותזונה נכונה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;