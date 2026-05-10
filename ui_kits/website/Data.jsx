/* Data.jsx — sample content for the kit */

const TRIPS = [
  { id: 'porto', kind: 'ROAMED TRIP', country: 'PORTUGAL', title: 'Three days lost in Porto',
    dek: 'A long weekend of port wine, azulejos, and the steepest streets your knees will meet.',
    metaLeft: '3 nights · Sep 2025', price: '€890',
    status: { kind: 'new', label: 'NEW' },
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80' },
  { id: 'puglia', kind: 'ROAMED TRIP', country: 'ITALY', title: 'The slow road through Puglia',
    dek: 'Trulli, orecchiette, sea-light. Six days from Bari down to Lecce, with a stop for almonds.',
    metaLeft: '6 nights · Oct 2025', price: '€1,890',
    status: { kind: 'soft', label: '4 spots left' },
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=80' },
  { id: 'hokkaido', kind: 'ROAMED TRIP', country: 'JAPAN', title: 'Hokkaido in February (yes, really)',
    dek: 'Powder snow, onsen, and the quietest izakayas you have ever sat in.',
    metaLeft: '8 nights · Feb 2026', price: '€3,240',
    status: { kind: 'soldout', label: 'SOLD OUT' },
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=1200&q=80' },
  { id: 'oaxaca', kind: 'ROAMED TRIP', country: 'MEXICO', title: 'A week of mole in Oaxaca',
    dek: 'Markets at dawn, mezcal at dusk, weaving in between. Small group, lots of eating.',
    metaLeft: '7 nights · Nov 2025', price: '€2,180',
    status: { kind: 'soft', label: 'Filling fast' },
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=80' },
];

const ARTICLES = [
  { id: 'porto-diary', eyebrow: 'DIARY · PORTUGAL', title: 'Three days lost in Porto',
    dek: 'A first trip with no plans, no reservations, and a strong opinion about pastel de nata.',
    meta: '5 min read · Sep 2025 · Porto',
    image: 'https://images.unsplash.com/photo-1581873372796-635b67ca2008?w=1400&q=80' },
  { id: 'lisbon-diary', eyebrow: 'DIARY · PORTUGAL', title: 'Why we keep coming back to Lisbon',
    meta: '7 min read · Aug 2025',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=900&q=80' },
  { id: 'kyoto', eyebrow: 'DIARY · JAPAN', title: 'A morning walk in Kyoto, before the bus crowds',
    meta: '4 min read · Jun 2025',
    image: 'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=900&q=80' },
  { id: 'oaxaca-d', eyebrow: 'DIARY · MEXICO', title: 'Seven moles, ranked unfairly',
    meta: '6 min read · May 2025',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=900&q=80' },
  { id: 'iceland', eyebrow: 'DIARY · ICELAND', title: 'The ring road, the wrong way',
    meta: '9 min read · Apr 2025',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=900&q=80' },
  { id: 'morocco', eyebrow: 'DIARY · MOROCCO', title: 'Three nights in the Atlas',
    meta: '5 min read · Mar 2025',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c61bf8?w=900&q=80' },
];

const DESTINATIONS = [
  { id: 'lisbon', name: 'Lisbon', country: 'Portugal', stories: 8,
    image: 'https://images.unsplash.com/photo-1513735492246-483525079686?w=900&q=80' },
  { id: 'porto', name: 'Porto', country: 'Portugal', stories: 5,
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80' },
  { id: 'kyoto', name: 'Kyoto', country: 'Japan', stories: 6,
    image: 'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=900&q=80' },
  { id: 'oaxaca', name: 'Oaxaca', country: 'Mexico', stories: 4,
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=900&q=80' },
  { id: 'reykjavik', name: 'Reykjavík', country: 'Iceland', stories: 3,
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=900&q=80' },
  { id: 'lecce', name: 'Lecce', country: 'Italy', stories: 4,
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80' },
  { id: 'marrakech', name: 'Marrakech', country: 'Morocco', stories: 3,
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c61bf8?w=900&q=80' },
  { id: 'hokkaido', name: 'Hokkaido', country: 'Japan', stories: 2,
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=900&q=80' },
];

const ITINERARY = [
  { day: 1, title: 'Arrive in Porto', subtitle: 'Settle in, walk the river',
    items: [
      { time: '14:00', kind: 'plane', text: 'Arrival at OPO. Group transfer to the Ribeira.' },
      { time: '17:30', kind: 'coffee', text: 'Welcome drink at Café Guarany — port tonics.' },
      { time: '20:00', kind: 'utensils-crossed', text: 'Dinner at Cantina 32. Stay loose, jet lag is real.' },
    ]},
  { day: 2, title: 'Across the river', subtitle: 'Vila Nova de Gaia, slowly',
    items: [
      { time: '09:30', kind: 'coffee', text: 'Breakfast pastéis at Manteigaria.' },
      { time: '11:00', kind: 'map', text: 'Walking tour of Gaia + two cellar visits.' },
      { time: '15:00', kind: 'camera', text: 'Free afternoon. Suggested: Serralves gardens.' },
      { time: '20:30', kind: 'utensils-crossed', text: 'Group dinner at Tasquinha do Adelino.' },
    ]},
  { day: 3, title: 'Douro day trip', subtitle: 'Train, boat, vineyard',
    items: [
      { time: '08:15', kind: 'train', text: 'Train from São Bento to Pinhão — sit on the right.' },
      { time: '12:00', kind: 'wine', text: 'Lunch at Quinta do Bomfim, with tasting.' },
      { time: '17:00', kind: 'train', text: 'Slow train back. Sunset over the river.' },
    ]},
];

Object.assign(window, { TRIPS, ARTICLES, DESTINATIONS, ITINERARY });
