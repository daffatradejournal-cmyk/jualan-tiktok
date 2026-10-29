export interface GalleryItem {
  id: string;
  tabName: string;
  title: string;
  desc: string;
  image: string;
  badge: string;
}

export interface Product {
  id: string;
  category: string;
  badge: string;
  discountBadge: string;
  title: string;
  headline: string;
  oldPrice: string;
  price: string;
  saveAmount: string;
  desc: string;
  coverImage: string;
  waNumber: string;
  waMessage: string;
  btnText: string;
  rating: number;
  ordersCount: number;
  features: string[];
  specs: { label: string; value: string }[];
  isGallery?: boolean;
  gallery?: GalleryItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SocialProofToast {
  id: number;
  name: string;
  location: string;
  service: string;
  timeAgo: string;
  avatar: string;
}
