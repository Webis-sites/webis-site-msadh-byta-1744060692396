'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaClock, FaUsers, FaPhone, FaEnvelope, FaUser, FaComment } from 'react-icons/fa';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import { toast, ToastContainer } from 'react-toastify';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: string;
  time: string;
  partySize: number;
}

const BookingSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableTimes] = useState([
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', 
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ]);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Booking submitted:', data);
      toast.success('ההזמנה נשלחה בהצלחה!', {
        position: 'top-center',
        rtl: true
      });
      
      reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('אירעה שגיאה בשליחת ההזמנה. אנא נסה שוב.', {
        position: 'top-center',
        rtl: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date as the minimum date for booking
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = format(tomorrow, 'yyyy-MM-dd');

  // Get date 30 days from now as the maximum date for booking
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = format(maxDate, 'yyyy-MM-dd');

  return (
    <section id="booking" className="py-16 bg-white text-right" dir="rtl">
      <ToastContainer />
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">הזמנת שולחן</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מזמינים אתכם להזמין שולחן במסעדה שלנו ולהנות מחוויה קולינרית מיוחדת. מלאו את הטופס ונחזור אליכם בהקדם.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
                  <FaUser className="ml-2 text-primary" />
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'שדה חובה' })}
                  className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="הכנס את שמך המלא"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 flex items-center">
                  <FaPhone className="ml-2 text-primary" />
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^0\d{8,9}$/,
                      message: 'אנא הכנס מספר טלפון תקין'
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="הכנס את מספר הטלפון שלך"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex items-center">
                  <FaEnvelope className="ml-2 text-primary" />
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'אנא הכנס כתובת אימייל תקינה'
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="הכנס את כתובת האימייל שלך"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Party Size Field */}
              <div>
                <label htmlFor="partySize" className="block text-gray-700 font-medium mb-2 flex items-center">
                  <FaUsers className="ml-2 text-primary" />
                  מספר סועדים
                </label>
                <select
                  id="partySize"
                  {...register('partySize', { required: 'שדה חובה' })}
                  className={`w-full px-4 py-3 rounded-md border ${errors.partySize ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <option value="">בחר מספר סועדים</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                  <option value="11">11+</option>
                </select>
                {errors.partySize && <p className="text-red-500 text-sm mt-1">{errors.partySize.message}</p>}
              </div>

              {/* Date Field */}
              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2 flex items-center">
                  <FaCalendarAlt className="ml-2 text-primary" />
                  תאריך
                </label>
                <input
                  type="date"
                  id="date"
                  {...register('date', { required: 'שדה חובה' })}
                  min={minDate}
                  max={maxDateStr}
                  className={`w-full px-4 py-3 rounded-md border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>

              {/* Time Field */}
              <div>
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2 flex items-center">
                  <FaClock className="ml-2 text-primary" />
                  שעה
                </label>
                <select
                  id="time"
                  {...register('time', { required: 'שדה חובה' })}
                  className={`w-full px-4 py-3 rounded-md border ${errors.time ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <option value="">בחר שעה</option>
                  {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2 flex items-center">
                <FaComment className="ml-2 text-primary" />
                הערות מיוחדות
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="הוסף הערות מיוחדות או בקשות (אופציונלי)"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    מעבד...
                  </span>
                ) : 'קבע תור עכשיו'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;