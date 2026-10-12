const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const brands = {
  cafe: {
    key: 'cafe',
    name: 'Amber & Bean',
    fullName: 'Amber & Bean Coffee Roasters',
    kicker: 'Coffee Roasters · Tangerang Selatan',
    logo: `${base}/logo-cafe.svg`,
    home: `${base}/cafe/`,
    product: `${base}/cafe/produk/`,
    contact: `${base}/cafe/kontak/`,
    switchLabel: 'Naga Steam Dimsum',
    switchHref: `${base}/dimsum/`,
    accent: '#b35b18',
    accentDark: '#5d2b12',
    accentSoft: '#efe0cf',
    ink: '#1e1712',
    canvas: '#f3ede4',
    paper: '#fffaf2'
  },
  dimsum: {
    key: 'dimsum',
    name: 'Naga Steam',
    fullName: 'Naga Steam Dimsum House',
    kicker: 'Cantonese Dimsum · Tangerang Selatan',
    logo: `${base}/logo-dimsum.svg`,
    home: `${base}/dimsum/`,
    product: `${base}/dimsum/produk/`,
    contact: `${base}/dimsum/kontak/`,
    switchLabel: 'Amber & Bean Coffee',
    switchHref: `${base}/cafe/`,
    accent: '#a6192e',
    accentDark: '#5e1021',
    accentSoft: '#f3ddd8',
    ink: '#241512',
    canvas: '#f4eee7',
    paper: '#fffaf4'
  }
};

export const cafeProducts = [
  { name: 'Amber Gold Cold Brew', category: 'Signature Coffee', price: 'Rp32.000', note: '18-hour cold steep, caramel, citrus, cocoa.', badge: 'Best seller' },
  { name: 'Spanish Latte Cream', category: 'Signature Coffee', price: 'Rp28.000', note: 'Double espresso, creamy milk, light condensed sweetness.', badge: 'Crowd favorite' },
  { name: 'Artisan Flat White', category: 'Espresso Bar', price: 'Rp26.000', note: 'Ristretto, silky microfoam, balanced roast character.' },
  { name: 'Single Origin V60', category: 'Manual Brew', price: 'Rp35.000', note: 'Rotating Indonesian beans with hand-poured clarity.', badge: 'Barista pick' },
  { name: 'Almond Butter Croissant', category: 'Pastry', price: 'Rp27.000', note: 'Flaky pastry, frangipane, toasted almond.', badge: 'Fresh daily' },
  { name: 'Sourdough Avocado Toast', category: 'Brunch', price: 'Rp38.000', note: 'Sourdough, avocado, soft egg, feta, chili flakes.' },
  { name: 'Smoked Beef Brioche', category: 'Brunch', price: 'Rp42.000', note: 'Buttery brioche, smoked beef, cheddar, honey mustard.' },
  { name: 'Cocoa Sea Salt', category: 'Non Coffee', price: 'Rp29.000', note: 'Dark cocoa, fresh milk, sea-salt cream.' },
  { name: 'Citrus Tonic', category: 'Non Coffee', price: 'Rp28.000', note: 'Fresh citrus, tonic, rosemary, clarified syrup.' }
];

export const dimsumProducts = [
  { name: 'Crab Roe Xiao Long Bao', category: 'Steamed', price: 'Rp42.000', note: 'Thin skin, hot broth, pork filling, crab roe crown.', badge: 'House signature' },
  { name: 'Har Gow Crystal Prawn', category: 'Steamed', price: 'Rp38.000', note: 'Translucent wrapper, whole prawn, bamboo shoot.', badge: 'Best seller' },
  { name: 'Siu Mai Truffle', category: 'Steamed', price: 'Rp39.000', note: 'Pork-shrimp siu mai with subtle truffle aroma.' },
  { name: 'Char Siu Bao', category: 'Steamed Bun', price: 'Rp32.000', note: 'Fluffy bao with roasted honey char siu.' },
  { name: 'Crispy Prawn Beancurd', category: 'Fried', price: 'Rp36.000', note: 'Crisp tofu skin, juicy prawn, sweet chili dip.' },
  { name: 'Salted Egg Sesame Ball', category: 'Dessert', price: 'Rp29.000', note: 'Chewy sesame shell with molten salted egg center.' },
  { name: 'Scallion Cheong Fun', category: 'Rice Roll', price: 'Rp35.000', note: 'Silky rice roll, scallion, toasted sesame soy.' },
  { name: 'Jasmine Cold Brew Tea', category: 'Tea', price: 'Rp24.000', note: 'Cold-steeped jasmine with clean floral finish.' },
  { name: 'Hong Kong Milk Tea', category: 'Tea', price: 'Rp26.000', note: 'Strong black tea, evaporated milk, smooth body.' }
];
