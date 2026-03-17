import React from 'react';

type Topper = {
  id: string;
  student_name: string;
  year: number;
  exam_name: string;
  score_or_rank: string;
  quote?: string;
  image_url: string;
};

const TopperGrid = ({ toppers }: { toppers: Topper[] }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Wall of Fame</h2>
          <p className="text-lg text-slate-600">Consistent results delivered year after year.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {toppers.map((topper) => (
            <div key={topper.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={topper.image_url} 
                  alt={topper.student_name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 w-full p-6 text-left">
                <p className="text-emerald-400 font-bold text-sm mb-1">{topper.year} • {topper.exam_name}</p>
                <h3 className="text-xl font-bold text-white mb-1">{topper.student_name}</h3>
                <p className="text-slate-200 font-medium text-base">{topper.score_or_rank}</p>
                
                {topper.quote && (
                  <p className="text-slate-300 text-sm mt-3 italic border-l-2 border-emerald-500 pl-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    "{topper.quote}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopperGrid;
