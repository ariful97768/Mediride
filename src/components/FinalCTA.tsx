import React from "react";

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Experience Premium Medical Transportation
          </h2>
          <p className="text-sm sm:text-base text-dark-blue-gray">
            Whether you need personal transportation for medical appointments or
            a comprehensive solution for your healthcare facility, Mediride
            delivers professional, reliable service you can trust.
          </p>
        </div>
        <div className="bg-navy rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Individual Clients */}
          <div className="md:w-1/2 p-10 md:p-16 bg-navy text-white border-b md:border-b-0 md:border-r border-teal/30">
            <h3 className="text-2xl font-bold mb-4">Individual Clients</h3>
            <h2 className="text-3xl font-extrabold mb-6 text-teal">
              Book Your Personal Ride
            </h2>
            <ul className="space-y-3 mb-8 text-sm sm:text-base">
              <li className="flex items-center">
                <span className="text-teal mr-2">✓</span> Medical appointments
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">✓</span> Therapy & treatments
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">✓</span> Errands & social
                visits
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">✓</span> Same-day service
                available
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-[#3dbdb5] transition">
                Book Online Now
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-navy transition">
                Call (555) 123-4567
              </button>
            </div>
          </div>

          {/* Facilities */}
          <div className="md:w-1/2 p-10 md:p-16 bg-[#164e78] text-white">
            <h3 className="text-2xl font-bold mb-4">Healthcare Facilities</h3>
            <h2 className="text-3xl font-extrabold mb-6 text-gold">
              Partner With Us
            </h2>
            <ul className="space-y-3 mb-8 text-sm sm:text-base">
              <li className="flex items-center">
                <span className="text-gold mr-2">✓</span> Reduce patient
                no-shows
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-2">✓</span> Streamline discharge
                planning
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-2">✓</span> Improve patient
                satisfaction
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-2">✓</span> Dedicated account
                management
              </li>
            </ul>
            <button className="bg-white w-full lg:w-auto text-sm sm:text-base text-navy font-bold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition">
              Request Partnership Info →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
