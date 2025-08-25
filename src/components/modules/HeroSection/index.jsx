import React from 'react';
import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';

export function Component({ fieldValues = {} }) {
  const {
    hero_heading = "Experience Luxury",
    hero_subheading = "at Our Boutique Hotel", 
    hero_description = "Discover elegantly appointed rooms, world-class amenities, and personalized service in the heart of the city",
    hero_background_image = { src: "/assets/hero.jpg", alt: "Boutique Hotel" },
    primary_cta_text = "Explore Rooms",
    primary_cta_url = "/rooms",
    secondary_cta_text = "Contact Us",
    secondary_cta_url = "/contact"
  } = fieldValues;

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero_background_image.src}
          alt={hero_background_image.alt}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {hero_heading}
          <span className="block text-3xl md:text-5xl font-light mt-2">
            {hero_subheading}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          {hero_description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primary_cta_url}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {primary_cta_text}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <a
            href={secondary_cta_url}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-all duration-200"
          >
            {secondary_cta_text}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="hero_heading"
      label="Hero Heading"
      default="Experience Luxury"
    />
    <TextField
      name="hero_subheading"
      label="Hero Subheading"
      default="at Our Boutique Hotel"
    />
    <TextField
      name="hero_description"
      label="Hero Description"
      default="Discover elegantly appointed rooms, world-class amenities, and personalized service in the heart of the city"
    />
    <ImageField
      name="hero_background_image"
      label="Background Image"
      default={{
        src: "/assets/hero.jpg",
        alt: "Boutique Hotel"
      }}
    />
    <TextField
      name="primary_cta_text"
      label="Primary CTA Text"
      default="Explore Rooms"
    />
    <TextField
      name="primary_cta_url"
      label="Primary CTA URL"
      default="/rooms"
    />
    <TextField
      name="secondary_cta_text"
      label="Secondary CTA Text"
      default="Contact Us"
    />
    <TextField
      name="secondary_cta_url"
      label="Secondary CTA URL"
      default="/contact"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero Section',
};
