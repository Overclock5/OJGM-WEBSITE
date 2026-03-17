import React from 'react';
import { Clock, Users, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Courses() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Physics Batches</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Structured programs designed to cater to different learning speeds and competitive goals.</p>
      </section>

      {/* Batches Comparison */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-[-3rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Normal Batch */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col h-full">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider mb-4">FOUNDATION BUILDER</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Normal Batch</h2>
              <p className="text-slate-600 mb-8">Perfect for students looking to strengthen their core concepts and secure top grades in board exams with foundational competitive prep.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-slate-700 font-medium">1 Hour / Day</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-slate-700 font-medium">25-30 Students</span>
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-10">
              <h3 className="font-bold text-slate-900 text-lg">Key Focus Areas:</h3>
              <ul className="space-y-3">
                {['Concept learning and mastery', 'NCERT textbook numerical practice', 'Step-by-step doubt resolution', 'Weekly practice sheets'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link href="/contact" className="w-full block text-center py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold transition-colors">
              Inquire About Normal Batch
            </Link>
          </div>

          {/* Star Batch */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-emerald-900/20 border border-slate-800 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="mb-6 relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wider mb-4 border border-emerald-500/30">JEE & NEET ADVANCED</span>
              <h2 className="text-3xl font-bold text-white mb-4">Star Batch</h2>
              <p className="text-slate-300 mb-8">Intensive program designed specifically for highly motivated students aiming for top ranks in IIT-JEE and NEET.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">1.5 Hours / Day</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">15-20 Students</span>
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-10 relative z-10">
              <h3 className="font-bold text-white text-lg">Exclusive Star Modules:</h3>
              <ul className="space-y-3">
                 {[
                  'Advanced conceptual deep-dives', 
                  'Level 1: Foundation Questions', 
                  'Level 2: Target JEE/NEET Level',
                  'Level 3: Advanced Rank-defining Problems',
                  'Extensive Previous Year Questions (PYQs)'
                 ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link href="/contact" className="w-full block text-center py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold transition-transform hover:-translate-y-1 relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Apply For Star Batch
            </Link>
          </div>

        </div>
      </section>

      {/* Classroom Environment */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Learning Environment</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that discipline is just as important as intelligence. Our classrooms are designed to foster extreme focus, mutual respect, and a hunger for learning.
              </p>
              
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Focused Atmosphere</h4>
                      <p className="text-slate-600">Zero distractions. 100% physics.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Structured Support</h4>
                      <p className="text-slate-600">Dedicated after-class doubt clearing times and individual guidance for weaker topics.</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img src="/images/gallery/classroom.jpg" alt="OJGM Chhavic Classes Classroom Environment" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
