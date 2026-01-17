import React from 'react';
import { Calendar, Repeat, ShoppingBag, Handshake } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Comprehensive Medical Transportation Services</h2>
          <p className="text-dark-blue-gray max-w-3xl mx-auto">
            From wheelchair-accessible medical transport to non-medical errands, Mediride delivers premium service for all your transportation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <Calendar className="w-10 h-10 text-teal mb-4" />
            <h3 className="text-lg font-bold text-navy mb-2">Medical Appointments</h3>
            <p className="text-sm text-dark-blue-gray mb-4">
              Door-through-door service to doctors, specialists, hospitals, and clinics. Wheelchair accessible with professional assistance every step of the way.
            </p>
            <a href="#learn-more" className="text-teal font-semibold text-sm hover:underline">Learn More →</a>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <Repeat className="w-10 h-10 text-teal mb-4" />
            <h3 className="text-lg font-bold text-navy mb-2">Recurring Treatments</h3>
            <p className="text-sm text-dark-blue-gray mb-4">
              Reliable transportation for dialysis, chemotherapy, physical therapy, and other recurring appointments. Same driver when possible, never late.
            </p>
            <a href="#learn-more" className="text-teal font-semibold text-sm hover:underline">Learn More →</a>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <ShoppingBag className="w-10 h-10 text-teal mb-4" />
            <h3 className="text-lg font-bold text-navy mb-2">Personal Errands</h3>
            <p className="text-sm text-dark-blue-gray mb-4">
              Not just medical appointments. We help you maintain independence with transportation for groceries, pharmacy runs, social visits, and community activities.
            </p>
            <a href="#learn-more" className="text-teal font-semibold text-sm hover:underline">Learn More →</a>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <Handshake className="w-10 h-10 text-teal mb-4" />
            <h3 className="text-lg font-bold text-navy mb-2">Healthcare Facility Solutions</h3>
            <p className="text-sm text-dark-blue-gray mb-4">
              Comprehensive transportation programs for hospitals, dialysis centers, assisted living facilities, and rehabilitation centers.
            </p>
            <a href="#facilities" className="text-teal font-semibold text-sm hover:underline">For Facilities →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;