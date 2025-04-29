// Define the portfolio item type

import {JSX} from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  category: string;
  tags: string[];
  image: string;
  relatedPosts: string[];
}

export type Testimonial = {
  quote: string;
  author: string;
  position: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
};

// Define the service data structure
export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  icon: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  caseStudies: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  approach: string;
  technologies: string[];
  results: {
    title: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    image?: string;
  };
  gallery: {
    image: string;
    caption: string;
  }[];
  featuredImage: string;
  relatedProjects: string[];
}
