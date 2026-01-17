import React from "react";
import { Check } from "lucide-react";

const Pricing: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Transparent, Competitive Pricing
          </h2>
          <p className="text-dark-blue-gray">
            Quality medical transportation shouldn't break the bank. Our
            transparent pricing ensures you know exactly what to expect—no
            hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Tier 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white flex flex-col">
            <h3 className="text-xl font-bold text-navy mb-2">Pay-Per-Ride</h3>
            <p className="text-sm text-gray-500 mb-6">
              Perfect for occasional appointments
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-teal">$45-$65</span>
              <span className="text-gray-500 text-sm"> / base rate</span>
            </div>
            <ul className="space-y-3 mb-8 grow">
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> First 5 miles
                included
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> 30 min service
                included
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Per Mile:
                $2.50-$3.00
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Wait Time: $15
                per 30 min
              </li>
            </ul>
            <a
              href="#quote"
              className="block duration-300 text-center border-2 border-navy text-navy font-bold py-2 rounded-lg hover:bg-navy hover:text-white transition"
            >
              Get Quote
            </a>
          </div>

          {/* Tier 2 */}
          <div className="border-2 border-teal rounded-2xl p-8 hover:shadow-xl bg-white relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
              Best Value
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Recurring</h3>
            <p className="text-sm text-gray-500 mb-6">
              Best value for regular treatments
            </p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-navy">Save 15-20%</span>
            </div>
            <ul className="space-y-3 mb-8 grow">
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Discounted
                package rates
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Consistent
                Driver
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Simplified
                Monthly Billing
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Perfect for
                Dialysis/PT
              </li>
            </ul>
            <a
              href="#contact"
              className="block duration-300 text-center bg-teal text-white hover:bg-white hover:text-teal border-teal border-2 font-bold py-2 rounded-lg transition"
            >
              Contact Us
            </a>
          </div>

          {/* Tier 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white flex flex-col">
            <h3 className="text-xl font-bold text-navy mb-2">
              Facility Partnerships
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Custom solutions for organizations
            </p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-navy">
                Volume Pricing
              </span>
            </div>
            <ul className="space-y-3 mb-8 grow">
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Significant
                savings
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Dedicated
                Account Manager
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> Custom
                Reporting & ROI
              </li>
              <li className="flex items-start text-sm text-dark-blue-gray">
                <Check className="w-4 h-4 text-teal mr-2 mt-1" /> For Hospitals
                & Care Centers
              </li>
            </ul>
            <a
              href="#partner"
              className="block duration-300 text-center border-2 border-navy text-navy font-bold py-2 rounded-lg hover:bg-navy hover:text-white transition"
            >
              Request Info
            </a>
          </div>
        </div>

        <div className="bg-light-gray p-6 rounded-lg">
          <h4 className="font-bold text-navy mb-2 text-center">
            Payment Options
          </h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-dark-blue-gray">
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-1" /> Credit/Debit
              Cards
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-1" /> HSA/FSA Cards
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-1" /> Insurance
              (Assisted)
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-1" /> Online Portal
            </span>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Note: Medicaid and some insurance plans accepted—contact us for
            details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
