
export type BrandProfile = {
  id: number;
  name: string;
  industry: string;
  logo: string;
  logoAiHint: string;
  campaignBudget: {
    min: number;
    max: number;
    currency: 'MUR';
  };
  contactName: string;
  contactEmail: string;
};

export const brands: BrandProfile[] = [
  {
    id: 1,
    name: 'Phoenix Beverages',
    industry: 'Food & Beverage',
    logo: 'https://picsum.photos/seed/b1/200',
    logoAiHint: 'bird logo',
    campaignBudget: {
      min: 50000,
      max: 200000,
      currency: 'MUR',
    },
    contactName: 'Mr. Bernard',
    contactEmail: 'bernard@phoenix.mu',
  },
  {
    id: 2,
    name: 'Mauritius Telecom',
    industry: 'Telecommunications',
    logo: 'https://picsum.photos/seed/b2/200',
    logoAiHint: 'telecom logo',
    campaignBudget: {
      min: 100000,
      max: 500000,
      currency: 'MUR',
    },
    contactName: 'Mrs. Dookun',
    contactEmail: 'dookun@telecom.mu',
  },
  {
    id: 3,
    name: 'Sun Resorts',
    industry: 'Hospitality & Tourism',
    logo: 'https://picsum.photos/seed/b3/200',
    logoAiHint: 'sun logo',
    campaignBudget: {
      min: 80000,
      max: 350000,
      currency: 'MUR',
    },
    contactName: 'Mr. Appadoo',
    contactEmail: 'appadoo@sunresorts.com',
  },
  {
    id: 4,
    name: 'MCB Group',
    industry: 'Finance & Banking',
    logo: 'https://picsum.photos/seed/b4/200',
    logoAiHint: 'bank logo',
    campaignBudget: {
      min: 75000,
      max: 250000,
      currency: 'MUR',
    },
    contactName: 'Mrs. David',
    contactEmail: 'david@mcb.mu',
  },
  {
    id: 5,
    name: 'Emtel',
    industry: 'Telecommunications',
    logo: 'https://picsum.photos/seed/b5/200',
    logoAiHint: 'mobile logo',
    campaignBudget: {
      min: 90000,
      max: 400000,
      currency: 'MUR',
    },
    contactName: 'Mr. Currimjee',
    contactEmail: 'currimjee@emtel.com',
  },
  {
    id: 6,
    name: 'Winners Supermarket',
    industry: 'Retail',
    logo: 'https://picsum.photos/seed/b6/200',
    logoAiHint: 'retail logo',
    campaignBudget: {
      min: 40000,
      max: 150000,
      currency: 'MUR',
    },
    contactName: 'Mr. Ip',
    contactEmail: 'ip@winners.mu',
  },
  {
    id: 7,
    name: 'ENL Group',
    industry: 'Real Estate & Agribusiness',
    logo: 'https://picsum.photos/seed/b7/200',
    logoAiHint: 'corporate logo',
    campaignBudget: {
      min: 60000,
      max: 300000,
      currency: 'MUR',
    },
    contactName: 'Mr. Lagesse',
    contactEmail: 'lagesse@enl.mu',
  },
  {
    id: 8,
    name: 'Air Mauritius',
    industry: 'Aviation',
    logo: 'https://picsum.photos/seed/b8/200',
    logoAiHint: 'airline logo',
    campaignBudget: {
      min: 120000,
      max: 600000,
      currency: 'MUR',
    },
    contactName: 'Mrs. Gopal',
    contactEmail: 'gopal@airmauritius.com',
  },
  {
    id: 9,
    name: 'Courts Mammouth',
    industry: 'Retail & Home Goods',
    logo: 'https://picsum.photos/seed/b9/200',
    logoAiHint: 'furniture logo',
    campaignBudget: {
      min: 30000,
      max: 180000,
      currency: 'MUR',
    },
    contactName: 'Mr. Rawat',
    contactEmail: 'rawat@courts.mu',
  },
  {
    id: 10,
    name: 'Island Life Co.',
    industry: 'Fashion & Apparel',
    logo: 'https://picsum.photos/seed/b10/200',
    logoAiHint: 'fashion logo',
    campaignBudget: {
      min: 25000,
      max: 120000,
      currency: 'MUR',
    },
    contactName: 'Miss. Wong',
    contactEmail: 'wong@islandlife.co',
  },
];
