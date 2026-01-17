import React from "react";
import { Smartphone, Car, Shield } from "lucide-react";
import Link from "next/link";

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-16">
          Simple, Reliable, Professional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Visual connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative text-center">
            <div className="w-24 h-24 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-6 text-navy border-4 border-white">
              <Smartphone className="w-10 h-10" />
            </div>
            <div className="absolute top-0 rounded-tr-lg right-0 bg-gold text-white font-bold rounded-bl-lg px-3 py-1">
              1
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Book Your Ride</h3>
            <p className="text-dark-blue-gray text-sm mb-4">
              Schedule online in minutes, call 24/7, or set up recurring
              appointments. Tell us your pickup location, destination, and any
              assistance needed.
            </p>
            <div className="text-xs text-navy font-semibold bg-light-gray p-2 rounded">
              <ul className="space-y-2.5 mb-6 grow text-start">
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span>Online:
                  <Link
                    className="text-navy hover:text-navy/80 transition duration-300"
                    href="https://gomediride.com/book"
                  >
                    &nbsp;gomediride.com/book
                  </Link>
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Phone
                  (24/7):
                  <Link
                    className="text-navy hover:text-navy/80 transition duration-300"
                    href="tel:5551234567"
                  >
                    &nbsp;(555) 123-4567
                  </Link>
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Email:
                  <Link
                    className="text-navy hover:text-navy/80 transition duration-300"
                    href="mailto:rides@gomediride.com"
                  >
                    &nbsp;rides@gomediride.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative text-center">
            <div className="w-24 h-24 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-6 text-navy border-4 border-white">
              <Car className="w-10 h-10" />
            </div>
            <div className="absolute top-0 rounded-tr-lg right-0 bg-gold text-white font-bold rounded-bl-lg px-3 py-1">
              2
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">
              Professional Service
            </h3>
            <p className="text-dark-blue-gray text-sm mb-4">
              Your caregiver-trained driver arrives on time in a clean hybrid
              vehicle. We provide true door-through-door service—from your home
              to check-in, and safely back home.
            </p>
            <div className="text-xs text-navy font-semibold bg-light-gray p-2 rounded">
              <ul className="space-y-2.5 mb-6 grow text-start">
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Driver
                  comes to your door
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Assistance
                  to vehicle
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span>{" "}
                  Comfortable, safe transport
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Help at
                  destination
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Wait or
                  scheduled return pickup
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative text-center">
            <div className="w-24 h-24 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-6 text-navy border-4 border-white">
              <Shield className="w-10 h-10" />
            </div>
            <div className="absolute top-0 rounded-tr-lg right-0 bg-gold text-white font-bold rounded-bl-lg px-3 py-1">
              3
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">
              Enjoy Peace of Mind
            </h3>
            <p className="text-dark-blue-gray text-sm mb-4">
              Relax knowing you're in professional hands. Real-time tracking,
              courteous drivers, and our on-time guarantee mean you can focus on
              your health.
            </p>
            <div className="text-xs text-navy font-semibold bg-light-gray p-2 rounded">
              <ul className="space-y-2.5 mb-6 grow text-start">
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> On-time
                  guarantee
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Real-time
                  tracking
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span> Automated
                  reminders
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span>{" "}
                  Professional assistance
                </li>
                <li className="flex items-start text-sm text-dark-blue-gray">
                  <span className="text-teal mr-2 font-bold">•</span>{" "}
                  Comfortable hybrid vehicles
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#book"
            className="bg-navy text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition"
          >
            Book Your First Ride
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
