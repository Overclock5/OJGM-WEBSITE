import React from 'react';
import Link from 'next/link';
import TopperGrid from '@/components/TopperGrid';
import toppersData from '@/data/toppers.json';
import testersData from '@/data/testimonials.json';
import { Award, BookOpen, Users, Trophy, ChevronRight, Star } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-emerald-500" />,
      title: "Gold Medalist Faculty",
      description: "Learn directly from Indu Tyagi, an expert educator with decades of experience."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      title: "Concept-First Approach",
      description: "Deep conceptual clarity before jumping into formulas and solving numericals."
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      title: "Limited Batch Sizes",
      description: "25-30 students in Normal Batch, 15-20 in Star Batch for personal attention."
    },
    {
      icon: <Trophy className="w-8 h-8 text-emerald-500" />,
      title: "Consistent Results",
      description: "Producing top rankers in IIT-JEE, NEET, and Board exams since 2003."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-slate-900 text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-800/50 text-emerald-400 text-sm font-semibold tracking-wider mb-8 border border-slate-700/50 backdrop-blur-sm">
            EST. 2003 • DELHI NCR
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-emerald-300 leading-tight">
            Where Concepts <br className="hidden md:block" /> Become Rank
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed font-light">
            Building Strong Foundations in Physics. Join college topper, University ranker Indu Tyagi Ma'am to master IIT-JEE Mains, NEET, and Board Exams CBSE/ICSE (all state boards).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link 
              href="/courses" 
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center"
            >
              Explore Batches
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-xl bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-bold text-lg transition-all flex items-center justify-center"
            >
              Book Counseling
            </Link>
          </div>
        </div>
      </section>

      {/* About Teacher Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition duration-500"></div>
              <img 
                src="/images/gallery/indu_mam.jpg" 
                alt="Indu Tyagi - Gold Medalist Physics Educator" 
                className="relative rounded-2xl shadow-2xl w-full object-contain aspect-square md:aspect-[4/3] lg:aspect-square"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Meet Your Mentor, <br /> <span className="text-emerald-500">Indu Tyagi Ma'am</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                As a College Topper, Indu Ma'am brings over two decades of transformative teaching experience. Her philosophy is simple: master the concepts first, and the ranks will follow.
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <strong>Concept-first teaching methodology</strong>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <strong>Strong numerical problem solving focus</strong>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <strong>Clear step-by-step explanations of difficult concepts</strong>
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Read full profile <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Trust Us */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Parents & Students Trust Us</h2>
            <p className="text-lg text-slate-600">A disciplined academic culture designed to maximize student potential.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="mb-6 inline-block p-4 rounded-xl bg-emerald-50 text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Section */}
      <TopperGrid toppers={toppersData} />

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Student & Parent Reviews</h2>
            <p className="text-lg text-slate-600">Hear from those who experienced the difference.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testersData.map(testimonial => (
              <div key={testimonial.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(testimonial.star_rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed">"{testimonial.review_text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0 bg-slate-200">
                    <img src={testimonial.image_url} alt={testimonial.student_name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.student_name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.batch_year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Build a Strong Foundation?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Enrollments are open for the upcoming session. Secure your seat in the Normal or Star batch today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex px-10 py-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-xl transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Start Your Journey With Us
          </Link>
        </div>
      </section>
    </>
  );
}
