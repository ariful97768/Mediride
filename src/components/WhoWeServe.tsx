import React from 'react';
import { User, Building2, Home } from 'lucide-react';

const WhoWeServe: React.FC = () => {
  return (
    <section id="who-we-serve" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">Who We Serve in the Twin Cities</h2>
          <p className="text-sm sm:text-base md:text-lg text-dark-blue-gray">
            Mediride provides premium medical transportation for individuals, families, and healthcare organizations throughout Minneapolis-St. Paul. Whether you need personal transportation or facility-wide solutions, we deliver exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-light-gray rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 text-teal">
              <User className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Individual & Family Clients</h3>
            <p className="text-dark-blue-gray mb-6 grow">
              Seniors, individuals with disabilities, and families who value reliable, dignified transportation for medical appointments, therapy, errands, and social visits.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-dark-blue-gray">
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Medical appointments</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Dialysis & chemotherapy</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Physical therapy & rehab</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Grocery shopping & errands</li>
            </ul>
            <a href="#services" className="text-navy font-bold hover:text-teal flex items-center mt-auto">
              Book Personal Ride <span className="ml-1">→</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-light-gray rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 text-navy">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Healthcare Facilities</h3>
            <p className="text-dark-blue-gray mb-6 grow">
              Hospitals, clinics, dialysis centers, and rehabilitation facilities that need reliable patient transportation to reduce no-shows and improve outcomes.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-dark-blue-gray">
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Discharge planning partnerships</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Recurring appointment coordination</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Real-time tracking & reporting</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Dedicated account management</li>
            </ul>
            <a href="#healthcare-partnerships" className="text-navy font-bold hover:text-teal flex items-center mt-auto">
              Partner With Us <span className="ml-1">→</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-light-gray rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 text-gold">
              <Home className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Senior Living Communities</h3>
            <p className="text-dark-blue-gray mb-6 grow">
              Assisted living facilities, nursing homes, and independent living communities seeking safe, comfortable transportation for residents.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-dark-blue-gray">
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Resident medical appointments</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Social outings & activities</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Preferred provider agreements</li>
              <li className="flex items-start"><span className="text-teal mr-2">•</span> Consistent drivers</li>
            </ul>
            <a href="#healthcare-partnerships" className="text-navy font-bold hover:text-teal flex items-center mt-auto">
              Facility Partnerships <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;