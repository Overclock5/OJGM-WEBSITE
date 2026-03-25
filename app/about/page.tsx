import React from 'react';
import { Award, BookOpen, UserCheck, Flame } from 'lucide-react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About Indu Tyagi Ma'am</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Gold Medalist Physics Educator dedicated to turning complex concepts into top academic ranks.</p>
      </section>

      {/* Main Profile Sector */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 md:mt-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          <div className="lg:w-5/12 lg:sticky lg:top-28">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-6">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/images/gallery/indu_mam.jpg" 
                  alt="Indu Tyagi - Founder of OJGM Chhavic Classes" 
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 origin-bottom"
                />
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
               <h3 className="font-bold text-xl text-slate-900 mb-2">Indu Tyagi</h3>
               <p className="text-emerald-600 font-medium mb-4">Founder & Lead Educator</p>
               <div className="flex items-center gap-2 text-slate-600"><Award className="w-5 h-5 text-yellow-500"/> Gold Medalist in Physics</div>
            </div>
          </div>

          <div className="lg:w-7/12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Driven by a passion for physics and a commitment to student excellence.</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  Since founding OJGM CHHAVIC CLASSES in 2003, Indu Ma'am has maintained a singular focus: to demystify physics for Class XI and XII students. Physics is often feared for its heavy reliance on mathematics and abstract thinking. Her approach actively breaks down these barriers.
                </p>
                <p className="mb-4">
                  As a Gold Medalist, she brings a profound mastery of the subject, but her real strength lies in her pedagogy. She believes that formulas are secondary; understanding the 'why' behind a phenomenon is what builds true problem-solving capabilities required for exams like IIT-JEE and NEET.
                </p>
              </div>
            </div>

            {/* Methodology Grid */}
            <div className="mt-12 pt-12 border-t border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Pedagogy & Classroom Philosophy</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                  <BookOpen className="w-8 h-8 text-emerald-500 mb-4" />
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Concept Before Formula</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Derivations and logic take precedence. Students are taught to derive solutions from first principles rather than memorizing shortcuts.</p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                  <Flame className="w-8 h-8 text-emerald-500 mb-4" />
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Progressive Numerical Training</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Transitioning students smoothly from Level 1 foundational problems to Level 3 advanced rank-defining JEE/NEET questions.</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                  <UserCheck className="w-8 h-8 text-emerald-500 mb-4" />
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Relentless Doubt Support</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Every student has a different weak point. Post-class dedicated doubt sessions ensure no child is left behind due to hesitation.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/courses" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors group">
                Review Our Teaching Modules
                <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>

        </div>
      </section>
    </div>
  );
}
