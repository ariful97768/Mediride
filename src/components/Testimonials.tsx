import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-16">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-light-gray p-8 rounded-xl relative">
            <div className="flex text-gold mb-4">
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
            </div>
            <p className="text-dark-blue-gray italic mb-6">
              "After my hip surgery, I needed transportation to physical therapy three times a week. Mediride was professional, punctual, and the drivers were genuinely caring. Worth every penny for the peace of mind."
            </p>
            <div>
              <p className="font-bold text-navy">Margaret L.</p>
              <p className="text-xs text-gray-500 uppercase">Edina</p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-light-gray p-8 rounded-xl relative">
            <div className="flex text-gold mb-4">
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
            </div>
            <p className="text-dark-blue-gray italic mb-6">
              "My elderly mother no longer drives, and we needed reliable transportation for her medical appointments. Mediride's drivers are patient, respectful, and treat her with such dignity. I highly recommend to any family."
            </p>
            <div>
              <p className="font-bold text-navy">Jennifer K.</p>
              <p className="text-xs text-gray-500 uppercase">Minneapolis</p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-light-gray p-8 rounded-xl relative">
            <div className="flex text-gold mb-4">
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
            </div>
            <p className="text-dark-blue-gray italic mb-6">
              "Our dialysis center partnered with Mediride to reduce patient no-shows. Their reliability has been exceptional—97% on-time rate over six months. Our patients appreciate the professional service."
            </p>
            <div>
              <p className="font-bold text-navy">Dr. Sarah M.</p>
              <p className="text-xs text-gray-500 uppercase">Nephrology Clinic Director</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#reviews" className="text-navy font-semibold hover:text-teal underline">Read More Reviews →</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;