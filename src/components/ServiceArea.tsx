import React from 'react';
import { MapPin } from 'lucide-react';
import countryImg from '@/assets/country.webp';
import Image from 'next/image';

const ServiceArea: React.FC = () => {
  return (
    <section id="service-area" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">Serving the Entire Twin Cities Metro Area</h2>
        <p className="text-dark-blue-gray mb-12 max-w-3xl">
          Mediride provides premium medical transportation throughout Minneapolis, St. Paul, and all seven counties of the Twin Cities metro. From urban neighborhoods to suburban communities, we're here to serve you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mock Map */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-96 relative flex items-center justify-center border border-gray-200">
             <Image 
               src={countryImg} 
               alt="Map of Twin Cities Service Area" 
               className="absolute inset-0 w-full h-full object-cover opacity-80"
               fill
             />
             <div className="relative z-10 bg-navy/90 text-white p-4 rounded-lg flex items-center shadow-lg">
                <MapPin className="mr-2 h-6 w-6 text-teal" />
                <span className="font-bold">7-County Metro Coverage</span>
             </div>
          </div>

          {/* List */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-navy mb-4 border-b-2 border-teal inline-block pb-1">Primary Cities</h3>
                <ul className="space-y-2 text-dark-blue-gray">
                  <li>• Minneapolis & All Neighborhoods</li>
                  <li>• St. Paul & Surrounding Areas</li>
                  <li>• Bloomington</li>
                  <li>• Eden Prairie</li>
                  <li>• Minnetonka</li>
                  <li>• Edina</li>
                  <li>• Burnsville</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-4 border-b-2 border-teal inline-block pb-1">Counties Served</h3>
                <ul className="space-y-2 text-dark-blue-gray">
                  <li>• Hennepin County</li>
                  <li>• Ramsey County</li>
                  <li>• Dakota County</li>
                  <li>• Anoka County</li>
                  <li>• Washington County</li>
                  <li>• Scott County</li>
                  <li>• Carver County</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a href="#areas" className="text-teal font-bold hover:text-navy transition">See Full Service Area Details →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;