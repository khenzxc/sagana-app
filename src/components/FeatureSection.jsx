import React from 'react';
import FeatureCard from './FeatureCard';
import "../styles/features.css";

export default function FeaturesSection() {
  const features = [
    {
      icon: '/feature-card-1.png',
      alt: 'Smart Savings Wallet',
      title: 'Smart Savings Wallet',
      description: 'Save anytime, anywhere with our Smart Savings Wallet—designed for farmers and fisherfolk to grow their money and earn rewards.'
    },
    {
      icon: '/feature-card-2.png',
      alt: 'Secure Transactions',
      title: 'Secure & Low-Cost Transactions (Powered by Base)',
      description: 'Enjoy fast, secure, and low-cost transactions powered by Base, giving you full control of your savings without relying on banks.'
    },
    {
      icon: '/feature-card-3.png',
      alt: 'Community Growth',
      title: 'Community Growth & Rewards',
      description: 'Join a supportive community where consistent saving is rewarded, and every contribution helps build a prosperous future together.'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
