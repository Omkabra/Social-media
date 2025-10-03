import React from 'react';

export interface ServicePackage {
  id: number;
  amount: string;
  price: string;
  originalPrice?: string;
  icon: React.ElementType;
  popular?: boolean;
  save?: string;
}

export interface BundleFeature {
  icon: React.ElementType;
  text: string;
}

export interface BundlePackage {
  id: number;
  name: string;
  price: string;
  icon: React.ElementType;
  features: BundleFeature[];
  note: string;
  bestValue?: boolean;
  premium?: boolean;
}

export interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface StandardService {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  gradient: string;
  packages: ServicePackage[];
  cta: string;
  heading: string;
  description: string;
  saleText: string | null;
}

export interface BundleService {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  gradient: string;
  packages: BundlePackage[];
  cta: string;
  heading: string;
  description: string;
  benefits: Benefit[];
}

export type Services = {
  comments: StandardService;
  views: StandardService;
  likes: StandardService;
  followers: StandardService;
  bundles: BundleService;
};