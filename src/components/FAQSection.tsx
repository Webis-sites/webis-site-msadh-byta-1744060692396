'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "האם נדרשת הזמנה מראש?",
      answer: "כן, אנו ממליצים להזמין מקום מראש, במיוחד בסופי שבוע ובערבים. ניתן להזמין דרך האתר או בטלפון 03-1234567."
    },
    {
      id: 2,
      question: "האם יש אפשרויות לתזונה צמחונית/טבעונית?",
      answer: "בהחלט! התפריט שלנו כולל מגוון רחב של מנות צמחוניות וטבעוניות. אנא ציינו את העדפותיכם בעת ההזמנה ונשמח להתאים את המנות לצרכים שלכם."
    },
    {
      id: 3,
      question: "מהן שעות הפעילות?",
      answer: "אנו פתוחים בימים א'-ה' בין השעות 12:00-23:00, בימי שישי בין 12:00-15:00, ובמוצאי שבת מצאת השבת ועד 23:00. בשבת המסעדה סגורה."
    },
    {
      id: 4,
      question: "האם המסעדה נגישה לבעלי מוגבלויות?",
      answer: "כן, המסעדה שלנו מותאמת באופן מלא לבעלי מוגבלויות, כולל גישה לכיסאות גלגלים ושירותים מותאמים."
    },
    {
      id: 5,
      question: "האם יש חנייה בקרבת מקום?",
      answer: "כן, ישנו חניון ציבורי במרחק של 50 מטר מהמסעדה. לקוחות המסעדה זכאים להנחה בחנייה עם הצגת חשבונית."
    },
    {
      id: 6,
      question: "האם ניתן להזמין אירועים פרטיים?",
      answer: "בהחלט! אנו מציעים אפשרות לאירועים פרטיים עד 50 איש. לפרטים נוספים ותיאום, אנא צרו קשר עם מנהל האירועים שלנו."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-white text-right" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">שאלות נפוצות</h2>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-5 bg-white text-right focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={activeIndex === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-800">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-secondary"
                >
                  <FaChevronDown aria-hidden="true" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;