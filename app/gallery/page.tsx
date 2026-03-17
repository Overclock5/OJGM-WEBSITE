"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: '/images/gallery/classroom.jpg', alt: 'Classroom setup and whiteboard', category: 'Classroom' },
    { src: '/images/gallery/boys1.jpg', alt: 'Students studying physics', category: 'Students' },
    { src: '/images/gallery/boys2.jpg', alt: 'Group discussion', category: 'Students' },
    { src: '/images/gallery/girls1.jpg', alt: 'Doubt clearing session', category: 'Students' },
    { src: '/images/gallery/girls2.jpg', alt: 'Test preparation', category: 'Students' },
    { src: '/images/toppers/topper6.jpg', alt: 'Topper felicitation', category: 'Celebrations' },
    { src: '/images/toppers/topper7.jpg', alt: 'Award ceremony', category: 'Celebrations' },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Life at OJGM Chhavic Classes</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Glimpses of our focused classroom environment and student celebrations.</p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-lg drop-shadow-md transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </div>
  );
}
