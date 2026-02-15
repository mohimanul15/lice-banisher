import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendarCheck, FaCheckCircle, FaStar } from 'react-icons/fa';

const Grok = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            LiceBanishers: Your Trusted Lice Removal Experts in NYC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Safe, Effective, and Family-Friendly Lice Treatment. Get Back to Normal Life Today!
          </motion.p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#book"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="btn btn-primary btn-lg text-white flex items-center"
            >
              <FaCalendarCheck className="mr-2" /> Book Now
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="btn btn-secondary btn-lg text-white flex items-center"
            >
              <FaPhone className="mr-2" /> Call Now
            </motion.a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Why Choose LiceBanishers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <FaCheckCircle className="text-4xl text-teal-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Professional & Safe</h3>
                <p className="text-center">Our certified technicians use non-toxic methods for effective lice removal.</p>
              </div>
            </div>
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <FaCheckCircle className="text-4xl text-teal-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Family-Friendly</h3>
                <p className="text-center">We create a comforting environment for kids and parents alike.</p>
              </div>
            </div>
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <FaCheckCircle className="text-4xl text-teal-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Guaranteed Results</h3>
                <p className="text-center">100% satisfaction or your money back.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-gray-100 py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Our Simple 3-Step Process</h2>
          <div className="steps steps-vertical md:steps-horizontal w-full">
            <div className="step step-primary">
              <div className="text-center mt-4 md:mt-0">
                <h3 className="font-semibold">Step 1: Consultation</h3>
                <p>Schedule a free consultation to assess the situation.</p>
              </div>
            </div>
            <div className="step step-primary">
              <div className="text-center mt-4 md:mt-0">
                <h3 className="font-semibold">Step 2: Treatment</h3>
                <p>Gentle, effective removal in our clinic or at home.</p>
              </div>
            </div>
            <div className="step step-primary">
              <div className="text-center mt-4 md:mt-0">
                <h3 className="font-semibold">Step 3: Follow-Up</h3>
                <p>Ensure complete eradication with our guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">What Our Families Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                </div>
                <p>"LiceBanishers saved our family! Quick and caring service."</p>
                <p className="text-right font-semibold">- Sarah M.</p>
              </div>
            </div>
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                </div>
                <p>"Professional and reassuring. Highly recommend!"</p>
                <p className="text-right font-semibold">- John D.</p>
              </div>
            </div>
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                </div>
                <p>"The best in NYC. Kids felt comfortable throughout."</p>
                <p className="text-right font-semibold">- Emily R.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg">Powered by Google Reviews (Mock)</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Banish Lice?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation.</p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#book"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="btn btn-primary btn-lg text-white flex items-center"
            >
              <FaCalendarCheck className="mr-2" /> Book Now
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="btn btn-secondary btn-lg text-white flex items-center"
            >
              <FaPhone className="mr-2" /> Call Now
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 LiceBanishers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Grok;