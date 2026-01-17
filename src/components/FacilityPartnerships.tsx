import React from 'react';
import { CheckCircle, Settings, Star, Clock } from 'lucide-react';

const FacilityPartnerships: React.FC = () => {
  return (
    <section id="healthcare-partnerships" className="py-16 md:py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Twin Cities Healthcare Facilities</h2>
          <p className="text-lg text-gray-200">
            Hospitals, dialysis centers, and senior care facilities partner with Mediride to ensure their patients and residents receive reliable, professional transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-4">
            <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Reduce No-Shows</h3>
            <p className="text-sm text-gray-300">
              Our 97%+ on-time rate means patients arrive for appointments, reducing lost revenue from missed visits.
            </p>
          </div>
          
          <div className="text-center p-4">
            <Settings className="w-12 h-12 text-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Streamline Operations</h3>
            <p className="text-sm text-gray-300">
              Dedicated account manager, automated scheduling, real-time tracking, and monthly reporting simplify coordination.
            </p>
          </div>

          <div className="text-center p-4">
            <Star className="w-12 h-12 text-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Improve Satisfaction</h3>
            <p className="text-sm text-gray-300">
              Professional, compassionate service creates positive experiences that reflect well on your facility.
            </p>
          </div>

          <div className="text-center p-4">
            <Clock className="w-12 h-12 text-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
            <p className="text-sm text-gray-300">
              Hospital discharges, urgent transports, and after-hours needs—we're available when you need us.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#partner" className="inline-block bg-teal text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition shadow-lg">
            Request Partnership Information
          </a>
          <p className="mt-8 text-base text-gray-200">
            Proudly serving patients from hospital networks, dialysis centers, senior communities across the Twin Cities + 15 more healthcare partners
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilityPartnerships;