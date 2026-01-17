import React from "react";
import { Heart, Leaf, Clock, Banknote } from "lucide-react";

const TheDifference: React.FC = () => {
  const cardsData = [
    {
      icon: <Heart className="w-7 h-7 text-teal" />,
      title: "Caregiver-Trained Drivers",
      description:
        "Our drivers complete 40+ hours of specialized caregiver training—not just basic transportation certification. Every driver is background-checked, CPR-certified, and trained in:",
      listItems: [
        "Patient handling & wheelchair assistance",
        "Compassionate communication",
        "Emergency response",
        "Dignity-centered care",
      ],
      footer: "They're caregivers first, drivers second.",
    },
    {
      icon: <Leaf className="w-7 h-7 text-green-500" />,
      title: "Premium Hybrid Fleet",
      description: "Travel in our clean, modern hybrid vehicles that offer:",
      listItems: [
        "Quieter, smoother rides",
        "Superior climate control",
        "Wheelchair accessibility",
        "Environmental sustainability",
        "Spacious, comfortable interiors",
      ],
      footer: "Premium comfort meets eco-responsibility.",
    },
    {
      icon: <Clock className="w-7 h-7 text-gold" />,
      title: "Flexible Service Options",
      description: "We adapt to your needs:",
      listItems: [
        "Same-day service available",
        "Recurring appointment scheduling",
        "Round-trip or one-way",
        "Wait-and-return service",
        "Multi-stop trips",
        "Evening & weekend availability",
        "24/7 booking",
      ],
    },
    {
      icon: <Banknote className="w-7 h-7 text-teal" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no surprises:",
      listItems: [
        "All-inclusive rates",
        "Volume discounts for facilities",
        "Insurance accepted",
        "HSA/FSA eligible",
        "Online quotes in minutes",
        "Flexible payment options",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy text-center mb-16">
          The Mediride Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* The difference cards */}
          {cardsData.map((item, idx) => (
            <TheDifferenceCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheDifference;

// The difference cards
function TheDifferenceCard({
  icon,
  title,
  description,
  listItems,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  listItems: string[];
  footer?: string;
}) {
  return (
    <div className="bg-light-gray rounded-xl p-6 border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 text-navy shadow-sm">
        {/* <Heart className="w-7 h-7 text-teal" /> */}
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy mb-4">{title}</h3>
      <p className="text-dark-blue-gray text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2.5 mb-6 grow">
        {listItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-dark-blue-gray"
          >
            <span className="text-teal mr-2 font-bold">•</span> {item}
          </li>
        ))}
      </ul>
      {footer && (
        <p className="text-navy font-bold text-sm border-t border-gray-200 pt-4 mt-auto">
          {footer}
        </p>
      )}
    </div>
  );
}
