"use client";
import React from 'react';
import { Award, GraduationCap, MapPin, Phone, Mail, ChevronRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const faqs = [
    {
      q: "Do you teach both JEE and NEET physics?",
      a: "Yes, our Star Batch is specifically tailored to cover advanced Level 3 problems essential for both IIT-JEE Mains/Advanced and NEET physics requirements."
    },
    {
      q: "Can CBSE board students join?",
      a: "Absolutely. Our Normal Batch is perfectly structured around the NCERT curriculum ensuring top marks in CBSE and ICSE board exams."
    },
    {
      q: "Are demo classes available?",
      a: "Yes, we encourage students to attend a demo session after counseling to experience Indu Ma'am's unique concept-driven teaching style."
    },
    {
      q: "How are students evaluated?",
      a: "We conduct regular weekly practice sheets and comprehensive monthly tests. Detailed performance analysis and rank reports are shared directly with parents."
    },
    {
      q: "Are study materials provided?",
      a: "Yes, students in the Star batch receive detailed chapter-wise study modules encompassing theory summaries, solved examples, and triple-level question banks."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact & Admission</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Take the first step towards building a solid foundation in physics.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-[-3rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Admissions */}
          <div className="space-y-12">
            
            {/* Admissions Process */}
            <div id="admission" className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-emerald-500" />
                Admission Process
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {[
                  { step: "1", title: "Submit Inquiry", desc: "Fill out the contact form or message us on WhatsApp." },
                  { step: "2", title: "Counseling Session", desc: "A brief discussion to understand the student's current level and goals." },
                  { step: "3", title: "Batch Assignment", desc: "Recommendation for Normal or Star batch based on assessment." },
                  { step: "4", title: "Enrollment Confirmed", desc: "Complete registration and receive study modules." }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-200 text-slate-600 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:border-emerald-200 transition-colors">
                      <div className="font-bold text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-900/20 text-white relative overflow-hidden group">
               <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-xl"></div>
               <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg"><MapPin className="w-6 h-6 text-emerald-400" /></div>
                      <div>
                        <h4 className="font-semibold text-slate-300">Location</h4>
                        <p className="text-slate-400 mt-1">OJGM Chhavic Classes<br/>Delhi NCR, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg"><Phone className="w-6 h-6 text-emerald-400" /></div>
                      <div>
                        <h4 className="font-semibold text-slate-300">Phone & WhatsApp</h4>
                        <p className="text-slate-400 mt-1">+91 9266597895</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg"><Mail className="w-6 h-6 text-emerald-400" /></div>
                      <div>
                        <h4 className="font-semibold text-slate-300">Email</h4>
                        <p className="text-slate-400 mt-1">ojgmindutyagimaam.com</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

          </div>

          {/* Form & FAQs */}
          <div className="space-y-12">
            
            {/* Inquiry Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Student Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Class/Grade</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700">
                      <option>Class XI</option>
                      <option>Class XII</option>
                      <option>Dropper</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Target Exam (Optional)</label>
                   <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-700">
                      <option>Board Exams Only</option>
                      <option>IIT-JEE Mains & Advanced</option>
                      <option>NEET</option>
                    </select>
                </div>
                <button type="button" className="w-full py-4 mt-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold transition-transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)]">
                  Submit Details
                </button>
              </form>
            </div>

            {/* FAQs */}
            <div id="faq" className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-500" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-bold text-slate-800 text-lg mb-2">{faq.q}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
