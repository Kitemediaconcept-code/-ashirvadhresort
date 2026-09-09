export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "Ashirvadh Nature Resort",
    "image": [
      "https://ashirvadhresorts.com/hero.png",
      "https://ashirvadhresorts.com/card1.png",
      "https://ashirvadhresorts.com/ROOMS.png"
    ],
    "description": "Experience luxury stays nestled in the heart of nature at Ashirvadh Nature Resort, Wayanad. Offering premium cottages, lake view rooms, and immersive nature experiences in Kerala.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Krishnagiri",
      "addressLocality": "Wayanad",
      "addressRegion": "Kerala",
      "postalCode": "673591",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.662,
      "longitude": 76.190
    },
    "url": "https://ashirvadhresorts.com",
    "telephone": "+919048067880",
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "4",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.instagram.com/ashirvadhventures",
      "https://maps.app.goo.gl/your-google-maps-link"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Nature Trails",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Lake View",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Restaurant",
        "value": true
      }
    ],
    "checkinTime": "12:00",
    "checkoutTime": "11:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


