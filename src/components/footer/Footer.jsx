import React from 'react';
import { FaInstagram, FaFacebook, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="text-2xl font-serif font-bold text-slate-900">
              Lice<span className="text-teal-600">Banishers</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Providing premium, non-toxic lice removal services to families across the five boroughs since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"><FaFacebook /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"><FaYelp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">In-Home Treatment</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Clinic Screenings</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Camp Clearances</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">School Screenings</a></li>
            </ul>
          </div>

          {/* NYC Locations */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Our NYC Hubs</h4>
            <ul className="space-y-4 text-slate-500">
              <li>Upper West Side, Manhattan</li>
              <li>Brooklyn Heights, BK</li>
              <li>Tribeca / Soho</li>
              <li>Long Island City, QNS</li>
            </ul>
          </div>

          {/* Trust Badge / Contact */}
          <div className="bg-slate-50 p-8 rounded-[2rem]">
            <h4 className="font-bold text-slate-900 mb-2">Need Help Now?</h4>
            <p className="text-sm text-slate-500 mb-6">Dispatch available 24/7 for emergencies.</p>
            <a href="tel:555" className="block text-center bg-white border border-slate-200 py-3 rounded-xl font-bold text-slate-900 hover:border-teal-500 transition-all">
              (212) 555-0198
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 Lice Banishers NYC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-teal-600">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;