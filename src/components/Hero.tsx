import React from "react";
import {
  ShieldCheck,
  UserCheck,
  Clock,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-[url(/hero-image-sm.png)] sm:bg-[url(/hero-image-md.png)] md:bg-[url(/hero-image.png)] bg-cover bg-no-repeat"
        ></div>

        {/* Gradient Overlay - Matches the blue fade design */}
        <div className="absolute inset-0 bg-navy/85 md:bg-transparent md:bg-linear-to-r from-navy from-10% via-navy/90 via-40% to-transparent to-80% sm:to-transparent/10 z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl b mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-20 md:pb-32 lg:pt-20 lg:pb-22">
        <div className="max-w-xl mx-auto md:mx-0 lg:max-w-2xl text-white">
          <h1 className="text-3xl text-center md:text-left md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Premium Medical Transportation You Can Trust
          </h1>

          <p className="text-sm text-center md:text-left md:text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
            Reliable, dignified transportation for medical appointments,
            errands, and personal needs in Minneapolis-St. Paul. Professional
            drivers, wheelchair-accessible hybrid vehicles, and personalized
            service tailored to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#book"
              className="bg-teal text-white text-center py-2 sm:px-8 sm:py-3.5 rounded-full font-bold text-md sm:text-lg hover:bg-opacity-90 transition shadow-lg w-full sm:w-auto"
            >
              Book Your Ride
            </a>
            <a
              href="tel:5551234567"
              className="border-2 border-white text-white text-center py-2 sm:px-8 sm:py-3.5 rounded-full font-bold text-md sm:text-lg hover:bg-white hover:text-navy transition w-full sm:w-auto"
            >
              Call Now: (555) 123-4567
            </a>
          </div>

          <div>
            <a
              href="#healthcare-partnerships"
              className="text-white hover:text-teal text-sm sm:text-base font-medium inline-flex items-center transition-colors group"
            >
              Healthcare Facilities: Partner With Us{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      <FeatureBar />
      {/* Bottom Feature Bar */}
    </section>
  );
};

export default Hero;

// Feature Bar Component
function FeatureBar() {
  return (
    <div className="relative z-20 bg-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/50 border-t border-white/10">
          <FeatureItem
            icon={<ShieldCheck className="w-5 h-5 shrink-0" />}
            text="Licensed & Insured"
          />
          <FeatureItem
            icon={<UserCheck className="w-5 h-5 shrink-0" />}
            text="Caregiver-Trained Drivers"
          />
          <FeatureItem
            icon={<Clock className="w-5 h-5 shrink-0" />}
            text="24/7 Available"
          />
          <FeatureItem
            icon={<CalendarCheck className="w-5 h-5 shrink-0" />}
            text="Same-Day Service"
          />
        </div>
      </div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="py-2 sm:py-4 px-1 sm:px-2 flex items-center justify-center sm:justify-start gap-2">
      {icon}
      <span className="font-semibold text-sm sm:text-base">{text}</span>
    </div>
  );
}
