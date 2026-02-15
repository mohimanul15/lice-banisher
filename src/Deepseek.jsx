import React, { useEffect } from 'react';
import { 
  FaPhone, 
  FaCalendarCheck, 
  FaShieldAlt, 
  FaHeart, 
  FaStar, 
  FaCheckCircle,
  FaUserMd,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { MdChildCare, MdSecurity } from 'react-icons/md';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Deepseek = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Upper West Side",
      rating: 5,
      text: "Absolute lifesaver! They came to our apartment on a Sunday evening. So gentle with my daughter, and the lice never came back.",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      location: "Brooklyn Heights",
      rating: 5,
      text: "Professional, thorough, and actually made my son feel comfortable. The guarantee gives such peace of mind. Worth every penny.",
      date: "1 month ago"
    },
    {
      name: "Jessica Martinez",
      location: "Astoria",
      rating: 5,
      text: "After trying everything from drugstore treatments, I wish I'd called them first. Quick, effective, and so reassuring.",
      date: "1 week ago"
    }
  ];

  const steps = [
    {
      icon: <FaPhone className="text-3xl text-pink-500" />,
      title: "Call or Book Online",
      desc: "Same-day appointments available. We come to you."
    },
    {
      icon: <FaUserMd className="text-3xl text-pink-500" />,
      title: "Thorough Screening",
      desc: "Certified technicians examine every strand."
    },
    {
      icon: <MdChildCare className="text-3xl text-pink-500" />,
      title: "Gentle Treatment",
      desc: "Safe, non-toxic products that actually work."
    },
    {
      icon: <FaCheckCircle className="text-3xl text-pink-500" />,
      title: "30-Day Guarantee",
      desc: "Free follow-up if needed. We stand by our work."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Top Bar */}
      <div className="bg-teal-700 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <span className="flex items-center gap-1"><FaMapMarkerAlt /> NYC & Surrounding Areas</span>
            <span className="flex items-center gap-1"><FaClock /> Open 7 Days, 8am-8pm</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">⭐⭐⭐⭐⭐ 4.9 (500+ reviews)</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="bg-teal-600 text-white p-2 rounded-lg">
              <MdChildCare className="text-2xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">LiceBanishers</h1>
              <p className="text-xs text-gray-500">NYC's Trusted Lice Removal</p>
            </div>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+1234567890"
              className="hidden md:flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold"
            >
              <FaPhone className="animate-pulse" /> (212) 555-1234
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-teal-700 transition flex items-center gap-2 text-lg"
            >
              <FaCalendarCheck /> Book Now
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              ⚡ Same-Day Appointments Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              NYC's Most Trusted
              <span className="text-teal-600"> Lice Removal</span> Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Gentle, guaranteed treatment your whole family will love. 
              Certified technicians, non-toxic products, and a 30-day guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-teal-700 transition flex items-center justify-center gap-2"
              >
                <FaCalendarCheck className="text-xl" /> Book Your Appointment
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+1234567890"
                className="bg-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-pink-600 transition flex items-center justify-center gap-2"
              >
                <FaPhone className="text-xl animate-pulse" /> Call Now
              </motion.a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white bg-cover bg-center" style={{backgroundImage: `url(https://i.pravatar.cc/40?img=${i})`}} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600">Trusted by 500+ NYC families</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-teal-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <MdSecurity className="text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">30-Day Guarantee</h3>
                  <p>Free follow-up if needed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-pink-300" />
                  <span>FDA-cleared, non-toxic products</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-pink-300" />
                  <span>Certified & background-checked techs</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-pink-300" />
                  <span>100% discreet, in-home service</span>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <FaHeart className="text-pink-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Gentle with kids</p>
                  <p className="text-sm text-gray-600">Zero tears guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaShieldAlt />, text: "FDA-Cleared Products" },
              { icon: <MdChildCare />, text: "Pediatrician Approved" },
              { icon: <FaUserMd />, text: "Certified Techs" },
              { icon: <FaCheckCircle />, text: "30-Day Guarantee" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 justify-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-teal-600 text-2xl">{item.icon}</div>
                <span className="font-semibold text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It <span className="text-teal-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, gentle, and guaranteed - we make lice removal stress-free
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center relative"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div className="bg-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
              <span className="text-2xl font-bold">Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-2xl text-yellow-400 mb-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="text-xl text-gray-600">Average 4.9 from 500+ reviews</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="flex items-center gap-2 text-yellow-400 text-xl mb-3">
                  {'⭐'.repeat(review.rating)}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Read More Google Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to be lice-free today?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Same-day appointments available. We come to you with a 100% guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-xl shadow-xl hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <FaCalendarCheck /> Book Online Now
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+1234567890"
                className="bg-pink-500 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-xl hover:bg-pink-600 transition flex items-center justify-center gap-2"
              >
                <FaPhone className="animate-pulse" /> Call (212) 555-1234
              </motion.a>
            </div>
            <p className="text-teal-100 mt-4">✓ Available 7 days a week, 8am-8pm</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-teal-600 p-2 rounded">
                  <MdChildCare className="text-2xl" />
                </div>
                <span className="text-xl font-bold">LiceBanishers</span>
              </div>
              <p className="text-gray-400">NYC's most trusted lice removal service. Gentle, guaranteed, and family-friendly.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">In-Home Treatment</a></li>
                <li><a href="#" className="hover:text-white transition">School Screening</a></li>
                <li><a href="#" className="hover:text-white transition">Head Check</a></li>
                <li><a href="#" className="hover:text-white transition">Prevention</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><FaPhone /> (212) 555-1234</li>
                <li className="flex items-center gap-2"><FaMapMarkerAlt /> Serving all 5 boroughs</li>
                <li className="flex items-center gap-2"><FaClock /> 7 days, 8am-8pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LiceBanishers. All rights reserved. NYC's trusted lice removal experts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Deepseek;