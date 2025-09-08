import { brands } from './brand-data';

export type Job = {
    id: number;
    title: string;
    brand: (typeof brands)[0];
    niche: string;
    budget: {
        min: number;
        max: number;
        currency: 'MUR';
    };
    deliverables: string[];
};

export const jobs: Job[] = [
    {
        id: 1,
        title: 'Launch our new Summer Menu',
        brand: brands.find(b => b.name === 'Phoenix Beverages')!,
        niche: 'Food & Beverage',
        budget: { min: 15000, max: 25000, currency: 'MUR' },
        deliverables: ['2 Instagram Reels', '5 Instagram Stories']
    },
    {
        id: 2,
        title: 'Showcase our 5G Network Speed',
        brand: brands.find(b => b.name === 'Mauritius Telecom')!,
        niche: 'Technology & Lifestyle',
        budget: { min: 20000, max: 40000, currency: 'MUR' },
        deliverables: ['1 YouTube Video', '3 TikToks']
    },
    {
        id: 3,
        title: 'Weekend Getaway Experience',
        brand: brands.find(b => b.name === 'Sun Resorts')!,
        niche: 'Travel & Hospitality',
        budget: { min: 30000, max: 50000, currency: 'MUR' },
        deliverables: ['1 Instagram Carousel Post', '1 Blog Post', '10 High-Res Photos']
    },
    {
        id: 4,
        title: 'Promote our new Banking App',
        brand: brands.find(b => b.name === 'MCB Group')!,
        niche: 'Finance & Entrepreneurship',
        budget: { min: 10000, max: 20000, currency: 'MUR' },
        deliverables: ['3 Instagram Stories', '1 LinkedIn Post']
    },
    {
        id: 5,
        title: 'Back to School Deals',
        brand: brands.find(b => b.name === 'Winners Supermarket')!,
        niche: 'Parenting & Family Life',
        budget: { min: 5000, max: 10000, currency: 'MUR' },
        deliverables: ['1 Facebook Post', '5 Instagram Stories']
    },
    {
        id: 6,
        title: 'New Collection Launch',
        brand: brands.find(b => b.name === 'Island Life Co.')!,
        niche: 'Sustainable Living & Fashion',
        budget: { min: 8000, max: 15000, currency: 'MUR' },
        deliverables: ['1 Instagram Post', '3 TikToks']
    },
    {
        id: 7,
        title: 'Explore the new Smart City',
        brand: brands.find(b => b.name === 'ENL Group')!,
        niche: 'Lifestyle & Real Estate',
        budget: { min: 25000, max: 45000, currency: 'MUR' },
        deliverables: ['1 YouTube Video', '1 Instagram Reel']
    },
    {
        id: 8,
        title: 'Fly to Rodrigues Campaign',
        brand: brands.find(b => b.name === 'Air Mauritius')!,
        niche: 'Travel & Adventure',
        budget: { min: 40000, max: 80000, currency: 'MUR' },
        deliverables: ['2 Instagram Reels', '1 Travel Blog Post']
    },
    {
        id: 9,
        title: 'Home Makeover Challenge',
        brand: brands.find(b => b.name === 'Courts Mammouth')!,
        niche: 'Interior Design & DIY Home Decor',
        budget: { min: 18000, max: 35000, currency: 'MUR' },
        deliverables: ['1 YouTube Video (Before/After)', '3 Instagram Stories']
    },
    {
        id: 10,
        title: 'Unlimited Data Plan Promo',
        brand: brands.find(b => b.name === 'Emtel')!,
        niche: 'Gaming & eSports',
        budget: { min: 12000, max: 22000, currency: 'MUR' },
        deliverables: ['2 TikToks', '1 YouTube Short', 'Live Stream Mention']
    }
];
