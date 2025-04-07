'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Fix for default marker icon in Leaflet with Next.js
// This is needed because Leaflet's default marker icons have issues with webpack
const defaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Make sure to place these images in your public/images folder

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  // Restaurant location coordinates (Tel Aviv example)
  const position: [number, number] = [32.0853, 34.7818];
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">צור קשר</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            נשמח לשמוע ממך! השאר פרטים ונחזור אליך בהקדם, או בקר אותנו במסעדה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">כתובת</h4>
                    <p className="text-gray-600">רחוב אלנבי 123, תל אביב</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">טלפון</h4>
                    <p className="text-gray-600 hover:text-primary transition-colors">
                      <a href="tel:+972-3-1234567" aria-label="מספר טלפון">03-1234567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">אימייל</h4>
                    <p className="text-gray-600 hover:text-primary transition-colors">
                      <a href="mailto:info@restaurant.co.il" aria-label="כתובת אימייל">info@restaurant.co.il</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">שעות פעילות</h4>
                    <p className="text-gray-600">ראשון - חמישי: 12:00 - 23:00</p>
                    <p className="text-gray-600">שישי: 12:00 - 16:00</p>
                    <p className="text-gray-600">שבת: סגור</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <MapContainer 
                center={position} 
                zoom={15} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={defaultIcon}>
                  <Popup>
                    מסעדה ביתא <br /> רחוב אלנבי 123, תל אביב
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">שלח הודעה</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="השם המלא שלך"
                  {...register('name', { required: 'שדה חובה' })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="מספר הטלפון שלך"
                  {...register('phone', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[0-9\-\+]{9,15}$/,
                      message: 'מספר טלפון לא תקין'
                    }
                  })}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="כתובת האימייל שלך"
                  {...register('email', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל לא תקינה'
                    }
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="כתוב את הודעתך כאן..."
                  {...register('message', { required: 'שדה חובה' })}
                  aria-invalid={errors.message ? 'true' : 'false'}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 disabled:opacity-70"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </motion.button>
              
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center"
                >
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
