import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface BusinessHour {
  days: string;
  hours: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks: NavLink[] = [
    { label: 'דף הבית', href: '/' },
    { label: 'תפריט', href: '/menu' },
    { label: 'אודות', href: '/about' },
    { label: 'אירועים', href: '/events' },
    { label: 'צור קשר', href: '/contact' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'פייסבוק' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'אינסטגרם' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'טוויטר' },
  ];

  const businessHours: BusinessHour[] = [
    { days: 'ראשון - חמישי', hours: '12:00 - 23:00' },
    { days: 'שישי', hours: '12:00 - 15:00' },
    { days: 'שבת', hours: '18:00 - 23:00' },
  ];

  const contactInfo = {
    phone: '03-1234567',
    email: 'info@restaurant.co.il',
    address: 'רחוב הרצל 123, תל אביב',
  };

  return (
    <footer className="bg-secondary text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-primary">מסעדה ביתא</h2>
            <p className="mb-4 text-gray-200">
              מסעדה ביתא מציעה חוויה קולינרית ייחודית עם טעמים מהמטבח הישראלי המסורתי בשילוב נגיעות מודרניות.
            </p>
            <div className="flex space-x-4 space-x-reverse mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">ניווט מהיר</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-200 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">שעות פעילות</h3>
            <ul className="space-y-2">
              {businessHours.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaClock className="mt-1 ml-2 text-primary" />
                  <div>
                    <p className="font-medium">{item.days}</p>
                    <p className="text-gray-200">{item.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 ml-2 text-primary" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-200 hover:text-primary transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 ml-2 text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-200 hover:text-primary transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 ml-2 text-primary" />
                <p className="text-gray-200">{contactInfo.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} מסעדה ביתא. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-6 space-x-reverse">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
              >
                מדיניות פרטיות
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
              >
                תנאי שימוש
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;