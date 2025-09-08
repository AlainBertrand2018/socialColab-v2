
export type CreatorProfile = {
  id: number;
  name: string;
  socialPseudonym: string;
  avatar: string;
  avatarAiHint: string;
  age: number;
  niche: string;
  description: string;
  platforms: {
    name: 'Instagram' | 'TikTok' | 'YouTube' | 'Facebook';
    followers: number;
    url: string;
  }[];
  audience: {
    gender: string;
    ageRange: string;
    location: string;
    reach: number;
    maxViews: number;
  };
  fees: {
    min: number;
    max: number;
    currency: 'MUR' | 'USD';
  };
  portfolio: {
    src: string;
    aiHint: string;
    alt: string;
  }[];
};

export const creators: CreatorProfile[] = [
  {
    id: 1,
    name: 'Anaelle Dubois',
    socialPseudonym: 'anaelledubois',
    avatar: 'https://picsum.photos/id/1027/200',
    avatarAiHint: 'portrait woman',
    age: 28,
    niche: 'Sustainable Living & Fashion',
    description: 'Passionate about slow fashion and eco-friendly living in the tropics. My content focuses on conscious consumerism and island lifestyle.',
    platforms: [
      { name: 'Instagram', followers: 25000, url: '#' },
      { name: 'TikTok', followers: 15000, url: '#' },
    ],
    audience: {
      gender: '70% Female, 30% Male',
      ageRange: '22-38',
      location: 'Mauritius',
      reach: 80000,
      maxViews: 150000,
    },
    fees: { min: 8000, max: 15000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p1-1/600/800', aiHint: 'fashion beach', alt: 'Woman in sustainable dress on a beach' },
      { src: 'https://picsum.photos/seed/p1-2/600/800', aiHint: 'eco product', alt: 'Flatlay of eco-friendly products' },
      { src: 'https://picsum.photos/seed/p1-3/600/800', aiHint: 'tropical nature', alt: 'Close-up of tropical plant leaves' },
      { src: 'https://picsum.photos/seed/p1-4/600/800', aiHint: 'woman smiling', alt: 'Portrait of Anaelle smiling' },
    ],
  },
  {
    id: 2,
    name: 'Kenji Tanaka',
    socialPseudonym: 'kenjisky',
    avatar: 'https://picsum.photos/id/1005/200',
    avatarAiHint: 'portrait man',
    age: 32,
    niche: 'Drone Videography & Travel',
    description: 'Capturing the unseen beauty of Mauritius from the skies. I specialize in cinematic drone footage for travel and hospitality brands.',
    platforms: [
      { name: 'YouTube', followers: 50000, url: '#' },
      { name: 'Instagram', followers: 30000, url: '#' },
    ],
    audience: {
      gender: '55% Male, 45% Female',
      ageRange: '25-45',
      location: 'Mauritius',
      reach: 200000,
      maxViews: 1200000,
    },
    fees: { min: 25000, max: 50000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p2-1/800/600', aiHint: 'drone landscape', alt: 'Aerial shot of a coastline' },
      { src: 'https://picsum.photos/seed/p2-2/800/600', aiHint: 'waterfall drone', alt: 'Drone view of a waterfall' },
      { src: 'https://picsum.photos/seed/p2-3/800/600', aiHint: 'luxury resort', alt: 'Aerial view of a luxury hotel' },
      { src: 'https://picsum.photos/seed/p2-4/800/600', aiHint: 'filmmaker gear', alt: 'Kenji with his drone equipment' },
      { src: 'https://picsum.photos/seed/p2-5/800/600', aiHint: 'mountain sunset', alt: 'Sunset over a mountain range from a drone' },
    ],
  },
  {
    id: 3,
    name: 'Priya Sharma',
    socialPseudonym: 'priyaseats',
    avatar: 'https://picsum.photos/id/1011/200',
    avatarAiHint: 'portrait indian woman',
    age: 25,
    niche: 'Mauritian Cuisine & Food Blogger',
    description: "Exploring the rich, diverse flavors of Mauritian street food and home cooking. Let's cook and eat together!",
    platforms: [
      { name: 'Instagram', followers: 45000, url: '#' },
      { name: 'Facebook', followers: 20000, url: '#' },
    ],
    audience: {
      gender: '65% Female, 35% Male',
      ageRange: '28-55',
      location: 'Mauritius',
      reach: 120000,
      maxViews: 200000,
    },
    fees: { min: 5000, max: 12000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p3-1/800/600', aiHint: 'street food', alt: 'Close-up of a Mauritian street food dish' },
      { src: 'https://picsum.photos/seed/p3-2/800/600', aiHint: 'cooking process', alt: 'Priya cooking in her kitchen' },
      { src: 'https://picsum.photos/seed/p3-3/800/600', aiHint: 'colorful spices', alt: 'An array of colorful spices' },
      { src: 'https://picsum.photos/seed/p3-4/800/600', aiHint: 'food market', alt: 'A bustling local food market' },
    ],
  },
  {
    id: 4,
    name: 'David Lagesse',
    socialPseudonym: 'davidkites',
    avatar: 'https://picsum.photos/id/1012/200',
    avatarAiHint: 'portrait man surfing',
    age: 29,
    niche: 'Kitesurfing & Watersports',
    description: 'Life is better on the water. Following the wind and waves around Mauritius. Kitesurfing instructor and adventure seeker.',
    platforms: [
        { name: 'Instagram', followers: 18000, url: '#' },
        { name: 'Facebook', followers: 9000, url: '#' },
    ],
    audience: {
        gender: '60% Male, 40% Female',
        ageRange: '20-40',
        location: 'Mauritius',
        reach: 50000,
        maxViews: 100000,
    },
    fees: { min: 4500, max: 13500, currency: 'MUR' },
    portfolio: [
        { src: 'https://picsum.photos/seed/p4-1/800/600', aiHint: 'kitesurfing action', alt: 'David kitesurfing at Le Morne' },
        { src: 'https://picsum.photos/seed/p4-2/800/600', aiHint: 'watersports gear', alt: 'Close up of kitesurfing equipment' },
        { src: 'https://picsum.photos/seed/p4-3/800/600', aiHint: 'beach lifestyle', alt: 'Relaxing on the beach after a session' },
        { src: 'https://picsum.photos/seed/p4-4/800/600', aiHint: 'ocean sunset', alt: 'Sunset view from a paddleboard' },
        { src: 'https://picsum.photos/seed/p4-5/800/600', aiHint: 'kitesurfing jump', alt: 'High jump on a kiteboard' },
        { src: 'https://picsum.photos/seed/p4-6/800/600', aiHint: 'group lesson', alt: 'Teaching a group of kitesurfers' },
    ]
  },
  {
    id: 5,
    name: 'Chloé Rose',
    socialPseudonym: 'chloeflows',
    avatar: 'https://picsum.photos/id/1013/200',
    avatarAiHint: 'portrait woman yoga',
    age: 34,
    niche: 'Yoga & Wellness',
    description: 'Certified yoga instructor sharing mindfulness and movement. Join me for daily flows, meditation tips, and wellness retreats in paradise.',
    platforms: [
        { name: 'Instagram', followers: 35000, url: '#' },
        { name: 'YouTube', followers: 12000, url: '#' },
    ],
    audience: {
        gender: '85% Female, 15% Male',
        ageRange: '25-50',
        location: 'Mauritius',
        reach: 90000,
        maxViews: 130000,
    },
    fees: { min: 6000, max: 18000, currency: 'MUR' },
    portfolio: [
        { src: 'https://picsum.photos/seed/p5-1/600/800', aiHint: 'yoga pose beach', alt: 'Chloé in a yoga pose on the beach' },
        { src: 'https://picsum.photos/seed/p5-2/600/800', aiHint: 'healthy food', alt: 'A healthy smoothie bowl' },
        { src: 'https://picsum.photos/seed/p5-3/600/800', aiHint: 'meditation nature', alt: 'Meditating by a waterfall' },
        { src: 'https://picsum.photos/seed/p5-4/600/800', aiHint: 'yoga class', alt: 'Leading a yoga class outdoors' },
    ]
  },
  {
    id: 6,
    name: 'Samuel Piron',
    socialPseudonym: 'samuelpaints',
    avatar: 'https://picsum.photos/id/1014/200',
    avatarAiHint: 'portrait artist',
    age: 45,
    niche: 'Art & Painting',
    description: 'Local artist inspired by the colors and culture of Mauritius. I work with oils and acrylics to bring island scenes to life. Offering workshops and commissions.',
    platforms: [
        { name: 'Instagram', followers: 8000, url: '#' },
        { name: 'Facebook', followers: 15000, url: '#' },
    ],
    audience: {
        gender: '60% Female, 40% Male',
        ageRange: '35-65',
        location: 'Mauritius',
        reach: 30000,
        maxViews: 45000,
    },
    fees: { min: 10000, max: 40000, currency: 'MUR' },
    portfolio: [
        { src: 'https://picsum.photos/seed/p6-1/800/600', aiHint: 'painting canvas', alt: 'A finished oil painting of a Mauritian market' },
        { src: 'https://picsum.photos/seed/p6-2/800/600', aiHint: 'artist studio', alt: 'Samuel in his art studio' },
        { src: 'https://picsum.photos/seed/p6-3/800/600', aiHint: 'paint palette', alt: 'A close-up of a colorful paint palette' },
        { src: 'https://picsum.photos/seed/p6-4/800/600', aiHint: 'landscape painting', alt: 'Painting of Le Morne Brabant' },
    ]
  },
  {
    id: 7,
    name: 'Jade Li',
    socialPseudonym: 'jadeplays',
    avatar: 'https://picsum.photos/id/1023/200',
    avatarAiHint: 'portrait asian woman',
    age: 22,
    niche: 'Gaming & eSports',
    description: 'Competitive gamer streaming the latest titles. Part of the Mauritian eSports scene and always ready for a challenge.',
    platforms: [
        { name: 'TikTok', followers: 75000, url: '#' },
        { name: 'YouTube', followers: 25000, url: '#' },
    ],
    audience: {
        gender: '70% Male, 30% Female',
        ageRange: '16-28',
        location: 'Mauritius',
        reach: 250000,
        maxViews: 500000,
    },
    fees: { min: 6750, max: 18000, currency: 'MUR' },
    portfolio: [
        { src: 'https://picsum.photos/seed/p7-1/800/600', aiHint: 'gaming setup', alt: 'Jade\'s neon-lit gaming setup' },
        { src: 'https://picsum.photos/seed/p7-2/800/600', aiHint: 'gamer portrait', alt: 'Jade wearing a gaming headset' },
        { src: 'https://picsum.photos/seed/p7-3/800/600', aiHint: 'esports tournament', alt: 'Competing in a local eSports tournament' },
        { src: 'https://picsum.photos/seed/p7-4/800/600', aiHint: 'gameplay screenshot', alt: 'A screenshot of gameplay' },
    ]
  },
  {
    id: 8,
    name: 'Olivier Martin',
    socialPseudonym: 'olivierhikes',
    avatar: 'https://picsum.photos/id/1025/200',
    avatarAiHint: 'portrait man hiking',
    age: 38,
    niche: 'Hiking & Outdoor Adventure',
    description: 'Exploring every trail and peak on the island. A guide for the adventurous, showcasing the best hikes and nature spots in Mauritius.',
    platforms: [
        { name: 'Instagram', followers: 22000, url: '#' },
        { name: 'Facebook', followers: 12000, url: '#' },
    ],
    audience: {
        gender: '50% Male, 50% Female',
        ageRange: '28-55',
        location: 'Mauritius',
        reach: 60000,
        maxViews: 95000,
    },
    fees: { min: 4000, max: 10000, currency: 'MUR' },
    portfolio: [
        { src: 'https://picsum.photos/seed/p8-1/800/600', aiHint: 'mountain view', alt: 'View from the top of a mountain' },
        { src: 'https://picsum.photos/seed/p8-2/600/800', aiHint: 'hiking trail', alt: 'Olivier on a hiking trail in a forest' },
        { src: 'https://picsum.photos/seed/p8-3/800/600', aiHint: 'camping gear', alt: 'Camping gear set up at a viewpoint' },
        { src: 'https://picsum.photos/seed/p8-4/800/600', aiHint: 'nature close-up', alt: 'A close-up of a native plant' },
    ]
  },
  {
    id: 9,
    name: 'Noemie Aliphon',
    socialPseudonym: 'noemiebeauty',
    avatar: 'https://picsum.photos/id/201/200',
    avatarAiHint: 'portrait woman makeup',
    age: 26,
    niche: 'Beauty & Makeup',
    description: 'Makeup artist and beauty enthusiast. I create tutorials for everything from everyday looks to glamorous evening makeup, featuring local and international brands.',
    platforms: [
      { name: 'Instagram', followers: 60000, url: '#' },
      { name: 'TikTok', followers: 40000, url: '#' },
    ],
    audience: {
      gender: '90% Female, 10% Male',
      ageRange: '18-35',
      location: 'Mauritius',
      reach: 150000,
      maxViews: 250000,
    },
    fees: { min: 7000, max: 20000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p9-1/600/800', aiHint: 'makeup look', alt: 'A vibrant and colorful makeup look' },
      { src: 'https://picsum.photos/seed/p9-2/600/800', aiHint: 'skincare products', alt: 'A flatlay of skincare products' },
      { src: 'https://picsum.photos/seed/p9-3/600/800', aiHint: 'makeup tutorial', alt: 'Noemie applying makeup' },
      { src: 'https://picsum.photos/seed/p9-4/600/800', aiHint: 'beauty portrait', alt: 'A clean beauty portrait' },
    ],
  },
  {
    id: 10,
    name: 'Alexandre Duval',
    socialPseudonym: 'alexfinance',
    avatar: 'https://picsum.photos/id/305/200',
    avatarAiHint: 'portrait man business',
    age: 42,
    niche: 'Finance & Entrepreneurship',
    description: 'Helping Mauritians achieve financial freedom. I share tips on investing, business development, and navigating the local economy.',
    platforms: [
      { name: 'Facebook', followers: 30000, url: '#' },
      { name: 'YouTube', followers: 15000, url: '#' },
    ],
    audience: {
      gender: '65% Male, 35% Female',
      ageRange: '30-60',
      location: 'Mauritius',
      reach: 70000,
      maxViews: 100000,
    },
    fees: { min: 9000, max: 27000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p10-1/800/600', aiHint: 'business meeting', alt: 'Alexandre giving a presentation' },
      { src: 'https://picsum.photos/seed/p10-2/800/600', aiHint: 'stock chart', alt: 'A screen showing financial charts' },
      { src: 'https://picsum.photos/seed/p10-3/800/600', aiHint: 'office environment', alt: 'Working in a modern office space' },
      { src: 'https://picsum.photos/seed/p10-4/800/600', aiHint: 'professional headshot', alt: 'A professional headshot of Alexandre' },
    ],
  },
  {
    id: 11,
    name: 'Laura Begue',
    socialPseudonym: 'laurasfamily',
    avatar: 'https://picsum.photos/id/333/200',
    avatarAiHint: 'portrait woman family',
    age: 35,
    niche: 'Parenting & Family Life',
    description: 'Navigating the beautiful chaos of motherhood with two kids. Sharing relatable stories, parenting hacks, and family-friendly activities in Mauritius.',
    platforms: [
      { name: 'Instagram', followers: 28000, url: '#' },
      { name: 'Facebook', followers: 18000, url: '#' },
    ],
    audience: {
      gender: '80% Female, 20% Male',
      ageRange: '28-45',
      location: 'Mauritius',
      reach: 50000,
      maxViews: 80000,
    },
    fees: { min: 3000, max: 9000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p11-1/800/600', aiHint: 'family beach', alt: 'Laura with her family on the beach' },
      { src: 'https://picsum.photos/seed/p11-2/800/600', aiHint: 'kids playing', alt: 'Her children playing in a park' },
      { src: 'https://picsum.photos/seed/p11-3/800/600', aiHint: 'parenting moment', alt: 'A candid moment between parent and child' },
      { src: 'https://picsum.photos/seed/p11-4/800/600', aiHint: 'kids craft', alt: 'Doing crafts at home with the kids' },
    ],
  },
  {
    id: 12,
    name: 'Julien Laurent',
    socialPseudonym: 'juliensounds',
    avatar: 'https://picsum.photos/id/431/200',
    avatarAiHint: 'portrait musician',
    age: 27,
    niche: 'Music & DJ',
    description: 'Producer and DJ bringing new sounds to the Mauritian night scene. My sets blend electronic music with local Sega rhythms.',
    platforms: [
      { name: 'TikTok', followers: 55000, url: '#' },
      { name: 'Instagram', followers: 20000, url: '#' },
    ],
    audience: {
      gender: '55% Male, 45% Female',
      ageRange: '18-30',
      location: 'Mauritius',
      reach: 180000,
      maxViews: 400000,
    },
    fees: { min: 15000, max: 30000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p12-1/800/600', aiHint: 'dj decks', alt: 'Julien DJing at a beach party' },
      { src: 'https://picsum.photos/seed/p12-2/800/600', aiHint: 'music production', alt: 'In the music studio producing a track' },
      { src: 'https://picsum.photos/seed/p12-3/800/600', aiHint: 'crowd party', alt: 'A crowd dancing at an event' },
      { src: 'https://picsum.photos/seed/p12-4/800/600', aiHint: 'dj portrait', alt: 'A promotional photo of Julien' },
    ],
  },
   {
    id: 13,
    name: 'Emilie de la Roche',
    socialPseudonym: 'emilierides',
    avatar: 'https://picsum.photos/id/567/200',
    avatarAiHint: 'portrait woman horse',
    age: 29,
    niche: 'Equestrian & Countryside Lifestyle',
    description: 'A life lived outdoors. Sharing my journey as an equestrian, from daily stable life to competitions, all within the beautiful Mauritian countryside.',
    platforms: [
      { name: 'Instagram', followers: 12000, url: '#' },
      { name: 'Facebook', followers: 7000, url: '#' },
    ],
    audience: {
      gender: '75% Female, 25% Male',
      ageRange: '22-45',
      location: 'Mauritius',
      reach: 25000,
      maxViews: 40000,
    },
    fees: { min: 4000, max: 12000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p13-1/800/600', aiHint: 'woman horse', alt: 'Emilie with her horse' },
      { src: 'https://picsum.photos/seed/p13-2/800/600', aiHint: 'horse riding', alt: 'Riding through a field' },
      { src: 'https://picsum.photos/seed/p13-3/600/800', aiHint: 'stable life', alt: 'Caring for her horse in the stable' },
      { src: 'https://picsum.photos/seed/p13-4/800/600', aiHint: 'countryside landscape', alt: 'A scenic view of the Mauritian countryside' },
    ],
  },
  {
    id: 14,
    name: 'Kevin Gopal',
    socialPseudonym: 'kevinfit',
    avatar: 'https://picsum.photos/id/64/200',
    avatarAiHint: 'portrait man fitness',
    age: 31,
    niche: 'Fitness & Nutrition',
    description: 'Certified personal trainer and nutritionist. I help people transform their bodies and lives through tailored workout plans and healthy eating guides.',
    platforms: [
      { name: 'Instagram', followers: 40000, url: '#' },
      { name: 'TikTok', followers: 25000, url: '#' },
    ],
    audience: {
      gender: '50% Male, 50% Female',
      ageRange: '20-40',
      location: 'Mauritius',
      reach: 100000,
      maxViews: 180000,
    },
    fees: { min: 6750, max: 22500, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p14-1/600/800', aiHint: 'man working out', alt: 'Kevin lifting weights in a gym' },
      { src: 'https://picsum.photos/seed/p14-2/800/600', aiHint: 'healthy meal', alt: 'A prepared healthy meal' },
      { src: 'https://picsum.photos/seed/p14-3/800/600', aiHint: 'fitness class', alt: 'Leading an outdoor fitness bootcamp' },
      { src: 'https://picsum.photos/seed/p14-4/600/800', aiHint: 'before after', alt: 'A client transformation picture' },
    ],
  },
  {
    id: 15,
    name: 'Celine Wong',
    socialPseudonym: 'celinedesigns',
    avatar: 'https://picsum.photos/id/77/200',
    avatarAiHint: 'portrait woman business',
    age: 39,
    niche: 'Interior Design & DIY Home Decor',
    description: 'Transforming spaces, one room at a time. I share my passion for interior design, with a focus on affordable DIY projects and tropical modern style.',
    platforms: [
      { name: 'Instagram', followers: 32000, url: '#' },
      { name: 'Facebook', followers: 22000, url: '#' },
    ],
    audience: {
      gender: '80% Female, 20% Male',
      ageRange: '30-55',
      location: 'Mauritius',
      reach: 75000,
      maxViews: 110000,
    },
    fees: { min: 8000, max: 25000, currency: 'MUR' },
    portfolio: [
      { src: 'https://picsum.photos/seed/p15-1/800/600', aiHint: 'modern living room', alt: 'A beautifully designed living room' },
      { src: 'https://picsum.photos/seed/p15-2/600/800', aiHint: 'diy project', alt: 'Celine working on a DIY decor item' },
      { src: 'https://picsum.photos/seed/p15-3/800/600', aiHint: 'design moodboard', alt: 'A moodboard with fabric and color samples' },
      { src: 'https://picsum.photos/seed/p15-4/800/600', aiHint: 'bedroom decor', alt: 'A decorated tropical modern bedroom' },
    ],
  },
];
