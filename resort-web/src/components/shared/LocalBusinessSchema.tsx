export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "Ashirvadh Nature Resort",
    "image": [
      "https://ashirvadhresort.com/hero.png",
      "https://ashirvadhresort.com/card1.png",
      "https://ashirvadhresort.com/ROOMS.png"
    ],
    "description": "Experience luxury stays nestled in the heart of nature at Ashirvadh Nature Resort, Wayanad. Offering premium cottages, lake view rooms, and immersive nature experiences.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ashirvadh Nature Resort",
      "addressLocality": "Wayanad",
      "addressRegion": "Kerala",
      "postalCode": "673592",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.662,
      "longitude": 76.190
    },
    "url": "https://ashirvadhresort.com",
    "telephone": "+919876543210",
    "priceRange": "$$$",
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
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
