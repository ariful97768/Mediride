import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-gray pt-16 pb-8 border-t border-gray-200 text-dark-blue-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-navy mb-4 tracking-wider text-sm">WHO WE SERVE</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal transition">Individual Clients</a></li>
              <li><a href="#" className="hover:text-teal transition">Seniors & Elderly</a></li>
              <li><a href="#" className="hover:text-teal transition">People with Disabilities</a></li>
              <li><a href="#" className="hover:text-teal transition">Healthcare Facilities</a></li>
              <li><a href="#" className="hover:text-teal transition">Assisted Living Communities</a></li>
              <li><a href="#" className="hover:text-teal transition">Dialysis Centers</a></li>
              <li><a href="#" className="hover:text-teal transition">Rehabilitation Centers</a></li>
              <li><a href="#" className="hover:text-teal transition">Home Health Agencies</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-navy mb-4 tracking-wider text-sm">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal transition">Medical Appointments</a></li>
              <li><a href="#" className="hover:text-teal transition">Dialysis Transportation</a></li>
              <li><a href="#" className="hover:text-teal transition">Physical Therapy Rides</a></li>
              <li><a href="#" className="hover:text-teal transition">Wheelchair Transportation</a></li>
              <li><a href="#" className="hover:text-teal transition">Personal Errands & Shopping</a></li>
              <li><a href="#" className="hover:text-teal transition">Social Visits</a></li>
              <li><a href="#" className="hover:text-teal transition">Healthcare Partnerships</a></li>
              <li><a href="#" className="text-teal font-semibold hover:underline">View All Services →</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-navy mb-4 tracking-wider text-sm">SERVICE AREAS</h4>
            <ul className="space-y-2 text-sm">
              <li>Minneapolis</li>
              <li>St. Paul</li>
              <li>Bloomington & Eden Prairie</li>
              <li>Twin Cities Metro</li>
              <li>7-County Coverage</li>
              <li><a href="#" className="text-teal font-semibold hover:underline">View Full Service Area →</a></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
               <a href="#" className="text-xs text-gray-500 hover:text-navy">For Medicaid Information →</a>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold text-navy mb-4 tracking-wider text-sm">CONTACT US</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li className="font-bold text-lg text-navy">(555) 123-4567 <span className="text-xs font-normal text-gray-500 ml-1">(24/7)</span></li>
              <li><a href="mailto:info@gomediride.com" className="hover:text-teal">info@gomediride.com</a></li>
              <li><a href="mailto:partnerships@gomediride.com" className="hover:text-teal">partnerships@gomediride.com</a></li>
            </ul>
            
            <div className="space-y-3">
              <a href="#book" className="block w-full text-center bg-teal text-white py-2 rounded font-bold hover:bg-opacity-90">Book Online</a>
              <a href="#partner" className="block w-full text-center border border-navy text-navy py-2 rounded font-bold hover:bg-navy hover:text-white transition">Facility Partnerships</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm text-gray-500">© 2025 Mediride LLC. All Rights Reserved.</p>
            <p className="text-xs text-gray-400 mt-1">Licensed NEMT Provider | Minnesota DOT Certified | Insured & Bonded</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0 text-sm text-gray-500">
            <a href="#" className="hover:text-navy">Privacy Policy</a>
            <a href="#" className="hover:text-navy">Terms of Service</a>
            <a href="#" className="hover:text-navy">Accessibility Statement</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-navy"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-navy"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-navy"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="text-center mt-6">
          <span className="text-navy font-serif italic">"Care in Every Mile" ®</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;