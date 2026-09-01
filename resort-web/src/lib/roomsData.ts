export interface RoomSpec {
  label: string;
  type: 'sitout' | 'bed' | 'guests' | 'size';
}

export interface RoomDetails {
  slug: string;
  title: string;
  description: string;
  images: string[];
  specs: RoomSpec[];
  highlights: string;
  amenities: string[];
}

export const roomsData: Record<string, RoomDetails> = {
  'cardamom-suite-rooms': {
    slug: 'cardamom-suite-rooms',
    title: 'Cardamom Suite Rooms',
    description: 'Spacious suites with a private sit-out, curated for comfort and calm.',
    images: [
      '/CARDAMOM SUITE ROOMS/05.jpg.jpeg',
      '/CARDAMOM SUITE ROOMS/06.jpg.jpeg',
      '/CARDAMOM SUITE ROOMS/07.jpg.jpeg',
      '/CARDAMOM SUITE ROOMS/11.jpg.jpeg'
    ],
    specs: [
      { label: 'Private Sit-out', type: 'sitout' },
      { label: 'King Bed', type: 'bed' },
      { label: '2 Guests', type: 'guests' },
      { label: '45 sqm', type: 'size' }
    ],
    highlights: 'Designed with natural textures and warm tones, the suite offers a peaceful retreat with modern amenities and a private outdoor space.',
    amenities: [
      'Air Conditioning',
      'Mini Fridge',
      'Complimentary Wi-Fi',
      'Bath Amenities',
      'Tea & Coffee Maker',
      'Daily Housekeeping'
    ]
  },
  'cinnamon-luxury-room': {
    slug: 'cinnamon-luxury-room',
    title: 'Cinnamon Luxury Room',
    description: 'Elegant luxury rooms with modern amenities and natural views.',
    images: [
      '/CINNAMON LUXURY ROOM/08.jpg.jpeg',
      '/CINNAMON LUXURY ROOM/15.jpg.jpeg',
      '/CINNAMON LUXURY ROOM/16.jpg.jpeg',
      '/CINNAMON LUXURY ROOM/17.jpg.jpeg'
    ],
    specs: [
      { label: 'Balcony View', type: 'sitout' },
      { label: 'King Bed', type: 'bed' },
      { label: '2 Guests', type: 'guests' },
      { label: '40 sqm', type: 'size' }
    ],
    highlights: 'A beautiful room blending premium comfort with stunning forest views, featuring a private balcony and modern features.',
    amenities: [
      'Air Conditioning',
      'Mini Fridge',
      'Complimentary Wi-Fi',
      'Bath Amenities',
      'Tea & Coffee Maker',
      'Daily Housekeeping'
    ]
  },
  'clove-deluxe-rooms': {
    slug: 'clove-deluxe-rooms',
    title: 'Clove Deluxe Rooms',
    description: 'Cozy deluxe rooms designed for a relaxing and refreshing stay.',
    images: [
      '/CLOVE DELUX ROOMS/12.jpg.jpeg',
      '/CLOVE DELUX ROOMS/13-(1).jpg.jpeg',
      '/CLOVE DELUX ROOMS/14.jpg.jpeg'
    ],
    specs: [
      { label: 'Forest View', type: 'sitout' },
      { label: 'King Bed', type: 'bed' },
      { label: '2 Guests', type: 'guests' },
      { label: '35 sqm', type: 'size' }
    ],
    highlights: 'Thoughtfully decorated rooms featuring natural light and warm wood panels, perfect for couples looking to unwind.',
    amenities: [
      'Air Conditioning',
      'Complimentary Wi-Fi',
      'Bath Amenities',
      'Tea & Coffee Maker',
      'Daily Housekeeping'
    ]
  },
  'coffee-land-pool-villa': {
    slug: 'coffee-land-pool-villa',
    title: 'Coffee Land Pool Villa',
    description: 'Private pool villas with scenic views and a touch of indulgence.',
    images: [
      '/COFFEE LAND POOL VILLA/TRD00873.jpg.jpeg',
      '/COFFEE LAND POOL VILLA/TRD01762.jpg.jpeg',
      '/COFFEE LAND POOL VILLA/TRD01785.jpg.jpeg',
      '/COFFEE LAND POOL VILLA/TRD01795.jpg.jpeg'
    ],
    specs: [
      { label: 'Private Pool', type: 'sitout' },
      { label: 'King Bed', type: 'bed' },
      { label: '2 Guests', type: 'guests' },
      { label: '75 sqm', type: 'size' }
    ],
    highlights: 'Indulge in a luxurious stay featuring a private pool overlooking the coffee plantations, designed for ultimate privacy and comfort.',
    amenities: [
      'Private Swimming Pool',
      'Air Conditioning',
      'Mini Fridge',
      'Complimentary Wi-Fi',
      'Bath Amenities',
      'Tea & Coffee Maker',
      'Daily Housekeeping'
    ]
  },
  'coffee-land-family-pool-villa': {
    slug: 'coffee-land-family-pool-villa',
    title: 'Coffee Land Family Pool Villa',
    description: 'Spacious pool villas perfect for families and memorable getaways.',
    images: [
      '/COFFEE LAND FAMILY POOL VILLA/24.jpg.jpeg',
      '/COFFEE LAND FAMILY POOL VILLA/25.jpg.jpeg',
      '/COFFEE LAND FAMILY POOL VILLA/TRD00789.jpg.jpeg',
      '/COFFEE LAND FAMILY POOL VILLA/TRD00814.jpg.jpeg',
      '/COFFEE LAND FAMILY POOL VILLA/TRD01569.jpg.jpeg',
      '/COFFEE LAND FAMILY POOL VILLA/TRD01641.jpg.jpeg',
      '/COFFEE LAND FAMILY POOL VILLA/TRD01740.jpg.jpeg'
    ],
    specs: [
      { label: 'Private Pool', type: 'sitout' },
      { label: '2 King Beds', type: 'bed' },
      { label: '4 Guests', type: 'guests' },
      { label: '120 sqm', type: 'size' }
    ],
    highlights: 'An expansive, multi-room family villa with a large private pool, modern living room space, and premium amenities for a family vacation.',
    amenities: [
      'Private Swimming Pool',
      'Separate Living Area',
      'Air Conditioning',
      'Mini Fridge',
      'Complimentary Wi-Fi',
      'Bath Amenities',
      'Tea & Coffee Maker',
      'Daily Housekeeping'
    ]
  },
  'pepper-villa': {
    slug: 'pepper-villa',
    title: 'Pepper Villa',
    description: 'A secluded villa offering privacy, nature and peaceful moments.',
    images: [
      '/papper villa/TRD00698.jpg.jpeg',
      '/papper villa/TRD00814.jpg.jpeg',
      '/papper villa/TRD01762.jpg.jpeg',
      '/papper villa/TRD01785.jpg.jpeg',
      '/papper villa/TRD01795.jpg.jpeg'
    ],
    specs: [
      { label: 'Private Sit-out', type: 'sitout' },
      { label: 'King Bed', type: 'bed' },
      { label: '2 Guests', type: 'guests' },
      { label: '60 sqm', type: 'size' }
    ],
    highlights: 'Tucked away in the quiet corners of the resort, Pepper Villa offers a rustic charm combined with high-end luxury and total privacy.',
    amenities: [
      'Air Conditioning',
      'Mini Fridge',
      'Complimentary Wi-Fi',
      'Bath Amenities',
      'Tea & Coffee Maker',
      'Daily Housekeeping'
    ]
  }
};
