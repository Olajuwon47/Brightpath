export interface Data {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: {
      amount: number;
      currency: string;
      formatted: string;
    };
    originalPrice: {
      amount: number;
      currency: string;
      formatted: string;
    };
    duration: string;
    level: string;
    provider: {
      name: string;
      logo: string;
      verified: boolean;
    };
    location: {
      country: string;
      flag: string;
    };
    rating: {
      average: number;
      count: number;
      formatted: string;
    };
    enrollment: {
      count: number;
      recent: number;
      text: string;
    };
    features: string[];
    thumbnail: string;
    badges: string[];
    createdAt: string;
    updatedAt: string;
  }
  