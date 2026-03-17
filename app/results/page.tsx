import React from 'react';
import TopperGrid from '@/components/TopperGrid';
import toppersData from '@/data/toppers.json';
import { Trophy, TrendingUp, Award } from 'lucide-react';

export default function Results() {
  const historicalResults = [
    { year: '2025', name: 'Aarav Sharma', exam: 'IIT-JEE Mains', score: 'AIR 452' },
    { year: '2024', name: 'Riya Singh', exam: 'NEET', score: '175 / 180 (Physics)' },
    { year: '2024', name: 'Karan Verma', exam: 'CBSE Boards', score: '99 / 100' },
    { year: '2023', name: 'Neha Gupta', exam: 'NEET', score: '170 / 180 (Physics)' },
    { year: '2023', name: 'Rahul Joshi', exam: 'IIT-JEE Mains', score: '99.8%ile (Physics)' },
    { year: '2022', name: 'Priya Mehta', exam: 'ICSE Boards', score: '98 / 100' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Legacy of Excellence</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Results that speak louder than words. Consistently producing top ranks since 2003.</p>
      </section>

      {/* Stats row */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-[-3rem] relative z-10 mb-20">
         <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col md:flex-row justify-around items-center gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="text-center w-full py-4">
              <div className="flex justify-center mb-3"><Trophy className="w-8 h-8 text-emerald-500" /></div>
              <p className="text-4xl font-extrabold text-slate-900 mb-1">500+</p>
              <p className="text-slate-500 font-medium">JEE & NEET Selections</p>
            </div>
            <div className="text-center w-full py-4">
              <div className="flex justify-center mb-3"><TrendingUp className="w-8 h-8 text-emerald-500" /></div>
              <p className="text-4xl font-extrabold text-slate-900 mb-1">95%+</p>
              <p className="text-slate-500 font-medium">Board Exam Top Scorers</p>
            </div>
            <div className="text-center w-full py-4">
              <div className="flex justify-center mb-3"><Award className="w-8 h-8 text-emerald-500" /></div>
              <p className="text-4xl font-extrabold text-slate-900 mb-1">20+</p>
              <p className="text-slate-500 font-medium">Years of Trust</p>
            </div>
         </div>
      </section>

      {/* Topper Grid Component */}
      <TopperGrid toppers={toppersData} />

      {/* Results Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Historical Hall of Fame</h2>
            <p className="text-lg text-slate-600">A snapshot of our consistent track record over the past academic years.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 font-semibold text-slate-900 whitespace-nowrap">Year</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 whitespace-nowrap">Student Name</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 whitespace-nowrap">Exam</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 whitespace-nowrap">Score / Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {historicalResults.map((result, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-slate-600 font-medium">{result.year}</td>
                    <td className="py-4 px-6 text-slate-900 font-bold">{result.name}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold
                        ${result.exam.includes('JEE') ? 'bg-blue-100 text-blue-700' : 
                          result.exam.includes('NEET') ? 'bg-emerald-100 text-emerald-700' : 
                          'bg-purple-100 text-purple-700'}`
                      }>
                        {result.exam}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-emerald-600 font-bold">{result.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
