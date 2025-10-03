import { Heart, MessageCircle, Eye, Users, Package, Zap, Crown, Star, DollarSign, ArrowRight } from 'lucide-react';
import { Services } from '@/app/types';

export const CONTACT_INFO = {
  phone: '8445590497',
  instagram: 'https://www.instagram.com/growwmoree.agency?igsh=dWhmbm5wMzBiazUx',
  instagramDirectLink: 'https://www.instagram.com/direct/t/17842553925098979/',
  agencyName: 'Groww Moreee Agency'
};

export const proofData = [
    {
      image: '/result-1.jpeg',
      text: 'Just helped a client grow their followers!',
    },
    {
      image: '/result-2.jpeg',
      text: 'Another account transformed!',
    },
    {
      image: '/result-3.jpeg',
      text: 'Results speak for themselves.',
    },
    {
      image: '/result-4.jpeg',
      text: 'Explosive growth ',
    },
    {
      image: '/result-5.jpeg',
      text: 'Increased followers!',
    },
    {
      image: '/result-6.jpeg',
      text: 'A happy client in the USA!',
    },
  ];
  
export const services: Services = {
  
  followers: {
    title: 'Social Media Followers',
    subtitle: 'Premium Growth Packages',
    icon: Users,
    gradient: 'from-blue-500 to-purple-600',
    packages: [
      { id: 1, amount: '1K', price: '$11.99', icon: Users },
      { id: 2, amount: '2K', price: '$19.99', icon: Zap },
      { id: 3, amount: '5K', price: '$44.99', icon: Star, popular: true },
      { id: 4, amount: '10K', price: '$84.99', icon: Crown }
    ],
    cta: 'Choose Your Package',
    heading: 'Grow Your Social Presence Today',
    description: 'Join thousands of satisfied customers worldwide',
    saleText: null
  },
  comments: {
    title: 'Social Media Comments',
    subtitle: 'Flash Sale Alert 🎉',
    icon: MessageCircle,
    gradient: 'from-orange-500 to-red-600',
    packages: [
      { id: 1, amount: '500', price: '$9.99', originalPrice: '$15.00', icon: MessageCircle },
      { id: 2, amount: '1K', price: '$19.99', originalPrice: '$25.00', icon: MessageCircle },
      { id: 3, amount: '2K', price: '$34.99', originalPrice: '$50.00', icon: MessageCircle, popular: true },
      { id: 4, amount: '5K', price: '$69.99', originalPrice: '$100.00', icon: Heart, save: '30%' }
    ],
    cta: 'Get Comments Now',
    heading: 'Drive More Engagement',
    description: 'Spark conversations and build community',
    saleText: 'Save up to 30% on all comments packages'
  },
  views: {
    title: 'Social Media Views',
    subtitle: 'Mega Sale Event 🎉',
    icon: Eye,
    gradient: 'from-teal-500 to-blue-600',
    packages: [
      { id: 1, amount: '1K', price: '$3.99', originalPrice: '$6.00', icon: Eye },
      { id: 2, amount: '2K', price: '$7.99', originalPrice: '$10.00', icon: Eye },
      { id: 3, amount: '5K', price: '$14.99', originalPrice: '$20.00', icon: Eye, popular: true },
      { id: 4, amount: '10K', price: '$24.99', originalPrice: '$35.00', icon: Eye, save: '30%' }
    ],
    cta: 'Buy Views Now',
    heading: 'Increase Your Content Visibility',
    description: 'Get the exposure your content deserves',
    saleText: 'Save up to 30% on all views packages'
  },
  likes: {
    title: 'Social Media Likes',
    subtitle: 'Limited Time Sale 🎉',
    icon: Heart,
    gradient: 'from-pink-500 to-purple-600',
    packages: [
      { id: 1, amount: '1K', price: '$4.99', originalPrice: '$7.00', icon: Heart },
      { id: 2, amount: '2K', price: '$9.99', originalPrice: '$12.00', icon: Heart },
      { id: 3, amount: '5K', price: '$24.99', originalPrice: '$32.00', icon: Zap, popular: true },
      { id: 4, amount: '10K', price: '$39.99', originalPrice: '$55.00', icon: Star, save: '25%' }
    ],
    cta: 'Get Likes Now',
    heading: 'Boost Your Post Engagement',
    description: 'Get more visibility and social proof today',
    saleText: 'Save up to 25% on all likes packages'
  },
  bundles: {
    title: 'Complete Bundle Packages',
    subtitle: 'All Services Included - Maximum Value 👍',
    icon: Package,
    gradient: 'from-purple-500 to-blue-600',
    packages: [
      {
        id: 1, name: 'Starter Pack', price: '$29.99', icon: Package,
        features: [
          { icon: Users, text: '2,000 Followers' }, { icon: Heart, text: '1,000 Likes' },
          { icon: Eye, text: '2,000 Views' }, { icon: MessageCircle, text: '100 Custom Comments' }
        ],
        note: '⚡ Perfect for testing & boosting credibility fast.'
      },
      {
        id: 2, name: 'Basic Pack', price: '$59.99', icon: Star,
        features: [
          { icon: Users, text: '5,000 Followers' }, { icon: Heart, text: '2,000 Likes' },
          { icon: Eye, text: '5,000 Views' }, { icon: MessageCircle, text: '250 Custom Comments' }
        ],
        note: '⚡ Great for small businesses & influencers starting out.'
      },
      {
        id: 3, name: 'Grow Pack', price: '$119.99', icon: Zap, bestValue: true,
        features: [
          { icon: Users, text: '10,000 Followers' }, { icon: Heart, text: '5,000 Likes' },
          { icon: Eye, text: '10,000 Views' }, { icon: MessageCircle, text: '500 Custom Comments' }
        ],
        note: '⚡ Ideal for building strong social proof & consistent engagement.'
      },
      {
        id: 4, name: 'Advanced Pack', price: '$249.99', icon: Crown, premium: true,
        features: [
          { icon: Users, text: '25,000 Followers' }, { icon: Heart, text: '10,000 Likes' },
          { icon: Eye, text: '25,000 Views' }, { icon: MessageCircle, text: '1,000 Custom Comments' }
        ],
        note: '⚡ Best choice for serious brands looking to scale fast.'
      }
    ],
    cta: 'Choose Your Bundle',
    heading: 'Get Everything You Need to Succeed',
    description: 'Complete social media growth solution in one package',
    benefits: [
      { icon: DollarSign, title: 'Save More Money', description: 'Get all services together at a discounted price.' },
      { icon: Zap, title: 'Complete Growth', description: 'Boost all engagement metrics simultaneously for maximum impact.' },
      { icon: ArrowRight, title: 'Faster Results', description: 'See comprehensive growth across all your platforms.' }
    ]
  }
};