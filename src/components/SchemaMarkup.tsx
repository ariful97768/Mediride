import React from 'react';

const SchemaMarkup: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Mediride",
    "alternateName": "Mediride LLC",
    "description": "Premium non-emergency medical transportation serving Minneapolis-St. Paul with caregiver-trained drivers, hybrid fleet, and door-through-door service for private clients and healthcare facility partnerships.",
    "url": "https://gomediride.com",
    "logo": "https://gomediride.com/images/mediride-logo.png",
    "image": [
      "https://gomediride.com/images/mediride-hybrid-van.jpg",
      "https://gomediride.com/images/mediride-driver-assisting-patient.jpg",
      "https://gomediride.com/images/mediride-wheelchair-accessible-vehicle.jpg"
    ],
    "telephone": "+1-555-123-4567",
    "email": "info@gomediride.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Drive",
      "addressLocality": "Minneapolis",
      "addressRegion": "MN",
      "postalCode": "55401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9778",
      "longitude": "-93.2650"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Minneapolis",
        "sameAs": "https://en.wikipedia.org/wiki/Minneapolis"
      },
      {
        "@type": "City",
        "name": "St. Paul",
        "sameAs": "https://en.wikipedia.org/wiki/Saint_Paul,_Minnesota"
      },
      {
        "@type": "City",
        "name": "Bloomington"
      },
      {
        "@type": "City",
        "name": "Eden Prairie"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Credit Card", "HSA/FSA", "Insurance", "Medical Assistance"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/mediride",
      "https://www.linkedin.com/company/mediride",
      "https://twitter.com/mediride"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wheelchair Transportation",
            "description": "Wheelchair-accessible medical transportation with hydraulic lifts and trained drivers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dialysis Transportation",
            "description": "Reliable recurring transportation to dialysis appointments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Facility Partnerships",
            "description": "Comprehensive patient transportation solutions for hospitals and medical facilities"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaMarkup;