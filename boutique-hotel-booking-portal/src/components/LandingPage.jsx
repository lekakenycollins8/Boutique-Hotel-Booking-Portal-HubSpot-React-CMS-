/**
 * LandingPage
 * Main landing page that assembles all static components
 * Usage: <LandingPage />
 */
import React from 'react';
import HeaderPartial from './partials/HeaderPartial.jsx';
import FooterPartial from './partials/FooterPartial.jsx';
import { HeroSection } from './modules/HeroSection.jsx';
import { AboutSection } from './modules/AboutSection.jsx';
import { RoomsList } from './modules/RoomsList.jsx';
import { AmenitiesSection } from './modules/AmenitiesSection.jsx';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeaderPartial />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsList />
        <AmenitiesSection />
      </main>
      
      {/* Footer */}
      <FooterPartial />
    </div>
  );
}
