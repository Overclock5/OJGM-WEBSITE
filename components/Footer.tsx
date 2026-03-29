import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-extrabold text-white tracking-tight block mb-4">
              OJGM <span className="text-emerald-400">CHHAVIC</span>
            </span>
            <p className="text-sm mb-4">
              Premier physics coaching institute in Delhi NCR providing preparation for IIT-JEE Mains, NEET, and Boards since 2003.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-emerald-400 transition-colors">Courses & Batches</Link></li>
              <li><Link href="/results" className="hover:text-emerald-400 transition-colors">Results & Toppers</Link></li>
              <li><Link href="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/contact#faq" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
              <li><Link href="/contact#admission" className="hover:text-emerald-400 transition-colors">Admission Process</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Delhi NCR, India</li>
              <li>📞 +91 9266597895</li>
              <li>✉️ ojgmindutyagimaam.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} OJGM CHHAVIC CLASSES. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Designed for Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
