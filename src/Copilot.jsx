// LandingPage.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaStar,
  FaChevronRight,
  FaShieldAlt,
} from "react-icons/fa";

/**
 * Drop this file into your React app. Assumes:
 * - TailwindCSS + DaisyUI configured
 * - framer-motion installed
 * - aos installed
 * - react-icons installed
 *
 * This is a single-file mock landing page with:
 * - prominent hero with strong CTAs
 * - clear 3-step process
 * - mock Google-style reviews
 * - trust / guarantee block
 * - subtle depth, shadows, and hierarchy
 */

const reviews = [
  {
    id: 1,
    name: "Samantha R.",
    location: "Brooklyn, NY",
    rating: 5,
    text:
      "They were kind, professional, and the kids felt comfortable. Lice gone after one visit — highly recommend!",
    date: "Mar 2024",
  },
  {
    id: 2,
    name: "Daniel P.",
    location: "Queens, NY",
    rating: 5,
    text:
      "Fast booking, clear process, and excellent follow-up. Great for busy parents.",
    date: "Jan 2024",
  },
  {
    id: 3,
    name: "Maya L.",
    location: "Manhattan, NY",
    rating: 5,
    text:
      "Professional team, non-toxic treatment, and they explained everything. So relieved!",
    date: "Feb 2024",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="mr-1" />
      ))}
    </div>
  );
}

function Copilot() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
              <FaShieldAlt />
            </div>
            <div>
              <h1 className="text-lg font-bold">LiceBanishers NYC</h1>
              <p className="text-xs text-slate-500 -mt-1">Safe • Effective • Family-first</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="btn btn-ghost btn-sm gap-2 hidden md:inline-flex"
            >
              <FaPhoneAlt /> Call Now
            </a>
            <a
              href="#book"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <FaCalendarAlt /> Book Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900"
              >
                Fast, gentle lice removal for NYC families
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-4 text-lg text-slate-600 max-w-xl"
              >
                Clinically informed treatments, non-toxic options, and compassionate technicians who make kids feel safe. Book same-week visits across New York City.
              </motion.p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  className="btn btn-primary btn-lg flex items-center gap-3 shadow-lg"
                  href="#book"
                >
                  <FaCalendarAlt /> Book Now
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  className="btn btn-outline btn-lg flex items-center gap-3"
                  href="tel:+1234567890"
                >
                  <FaPhoneAlt /> Call Now
                </motion.a>
              </div>

              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-lg shadow">
                    <Stars />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Average rating</div>
                    <div className="font-semibold text-slate-800">5.0 / 5 (120+ reviews)</div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-3 text-sm text-slate-500">
                  <div className="px-3 py-2 bg-white rounded-lg shadow">Non-toxic options</div>
                  <div className="px-3 py-2 bg-white rounded-lg shadow">Same-week visits</div>
                </div>
              </div>
            </div>

            {/* Visual card with depth */}
            <div data-aos="fade-left" className="relative">
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-2xl p-6 md:p-8"
              >
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">In-home visit</div>
                      <div className="text-xl font-semibold text-slate-900">30–60 min</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">Starting at</div>
                      <div className="text-xl font-bold text-blue-700">$129</div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 shadow">
                      <div className="text-xs text-slate-500">Treatment</div>
                      <div className="font-medium">Non-toxic option</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow">
                      <div className="text-xs text-slate-500">Guarantee</div>
                      <div className="font-medium">14-day follow-up</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a href="#book" className="btn btn-sm btn-accent flex-1">
                      Book this visit
                    </a>
                    <a href="#learn" className="btn btn-ghost btn-sm">
                      Learn more <FaChevronRight className="ml-2" />
                    </a>
                  </div>
                </div>

                {/* subtle decorative overlapping badge */}
                <div className="absolute -top-6 -right-6">
                  <div className="bg-white/90 border border-slate-100 rounded-full px-4 py-2 shadow">
                    <div className="text-xs text-slate-500">Trusted in NYC</div>
                    <div className="font-semibold text-slate-800">Serving all boroughs</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* soft SVG wave for depth */}
          <div className="pointer-events-none">
            <svg
              className="w-full"
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0h1440v40c-120 40-360 40-720 0C360 0 120 0 0 40V0z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* PROCESS */}
        <section id="learn" className="container mx-auto px-6 py-16" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Our simple 3-step process</h3>
            <p className="mt-3 text-slate-600">
              Clear, transparent steps so you know exactly what to expect — from booking to follow-up.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-6 shadow"
              data-aos="zoom-in"
            >
              <div className="text-2xl font-bold text-blue-700">1</div>
              <h4 className="mt-3 font-semibold">Book a visit</h4>
              <p className="mt-2 text-slate-600">Quick online booking or call us — same-week availability.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-6 shadow"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-2xl font-bold text-blue-700">2</div>
              <h4 className="mt-3 font-semibold">Gentle treatment</h4>
              <p className="mt-2 text-slate-600">Non-toxic options and experienced technicians who put kids first.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-6 shadow"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-2xl font-bold text-blue-700">3</div>
              <h4 className="mt-3 font-semibold">Follow-up & support</h4>
              <p className="mt-2 text-slate-600">Aftercare guidance and a 14-day follow-up guarantee for peace of mind.</p>
            </motion.div>
          </div>
        </section>

        {/* TRUST / GUARANTEE */}
        <section className="bg-gradient-to-r from-slate-50 to-white py-12" data-aos="fade-up">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900">Clinically informed • Family-first</h4>
              <p className="mt-2 text-slate-600 max-w-xl">
                Our protocols are informed by pediatric-safe practices. We prioritize comfort, transparency, and results.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-sm text-slate-500">Guarantee</div>
                <div className="font-semibold">14-day follow-up</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-sm text-slate-500">Safety</div>
                <div className="font-semibold">Non-toxic options</div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS / MOCK GOOGLE REVIEWS */}
        <section className="container mx-auto px-6 py-16" data-aos="fade-up">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold">What parents in NYC say</h3>
              <p className="text-slate-600">Real feedback from families we’ve helped.</p>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="text-sm text-slate-500">Average</div>
              <div className="flex items-center gap-2">
                <Stars />
                <div className="font-semibold">5.0</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article
                key={r.id}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={r.id * 80}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                    {r.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{r.name}</div>
                        <div className="text-xs text-slate-500">{r.location} • {r.date}</div>
                      </div>
                      <div className="text-sm">
                        <Stars count={r.rating} />
                      </div>
                    </div>

                    <p className="mt-3 text-slate-600">{r.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 bg-blue-700 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-lg">Ready to book a visit?</div>
              <div className="text-sm opacity-90">Same-week availability across NYC — secure your spot now.</div>
            </div>

            <div className="flex gap-3">
              <a href="#book" className="btn btn-accent">
                Book Now
              </a>
              <a href="tel:+1234567890" className="btn btn-ghost text-white">
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-200 py-10">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-bold">LiceBanishers NYC</h5>
              <p className="text-sm mt-2 text-slate-400">Safe, effective lice removal for NYC families.</p>
            </div>

            <div>
              <h6 className="font-semibold">Contact</h6>
              <p className="text-sm mt-2 text-slate-400">Phone: <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a></p>
              <p className="text-sm mt-1 text-slate-400">Email: <a href="mailto:info@licebanishers.nyc" className="underline">info@licebanishers.nyc</a></p>
            </div>

            <div>
              <h6 className="font-semibold">Quick links</h6>
              <ul className="mt-2 text-sm text-slate-400 space-y-1">
                <li><a href="#learn" className="underline">How it works</a></li>
                <li><a href="#book" className="underline">Book now</a></li>
                <li><a href="#reviews" className="underline">Reviews</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} LiceBanishers NYC. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Copilot;