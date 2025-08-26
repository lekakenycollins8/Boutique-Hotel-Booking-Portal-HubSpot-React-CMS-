import React from 'react';

export function Component({ fieldValues = {} }) {
  const {
    about_heading = "Welcome to Our Boutique Hotel",
    about_description_1 = "Nestled in the heart of the city, our boutique hotel offers an intimate and luxurious experience that combines modern comfort with timeless elegance. Each room is thoughtfully designed to provide our guests with a sanctuary of tranquility and sophistication.",
    about_description_2 = "From our personalized concierge services to our carefully curated amenities, every detail has been crafted to ensure your stay is nothing short of extraordinary. Discover the perfect blend of comfort, style, and hospitality that makes our hotel a destination in itself.",
    about_image = { src: "/assets/about-hotel.jpg", alt: "Hotel Interior" },
    stat_1_number = "50+",
    stat_1_label = "Luxury Rooms",
    stat_2_number = "24/7",
    stat_2_label = "Concierge Service"
  } = fieldValues;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {about_heading}
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {about_description_1}
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {about_description_2}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat_1_number}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat_1_label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat_2_number}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat_2_label}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
            <img
              src={about_image?.src || "/assets/about-hotel.jpg"}
              alt={about_image?.alt || "Hotel Interior"}
              className="w-full h-full object-cover"
            />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-lg opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="about_heading"
      label="About Heading"
      default="Welcome to Our Boutique Hotel"
    />
    <TextField
      name="about_description_1"
      label="First Description Paragraph"
      default="Nestled in the heart of the city, our boutique hotel offers an intimate and luxurious experience..."
    />
    <TextField
      name="about_description_2"
      label="Second Description Paragraph"
      default="From our personalized concierge services to our carefully curated amenities..."
    />
    <ImageField
      name="about_image"
      label="About Image"
      default="/assets/about-hotel.jpg"
      alt="Hotel Interior"
    />
    <TextField
      name="stat_1_number"
      label="First Statistic Number"
      default="50+"
    />
    <TextField
      name="stat_1_label"
      label="First Statistic Label"
      default="Luxury Rooms"
    />
    <TextField
      name="stat_2_number"
      label="Second Statistic Number"
      default="24/7"
    />
    <TextField
      name="stat_2_label"
      label="Second Statistic Label"
      default="Concierge Service"
    />
  </ModuleFields>
);

export const meta = {
  label: 'About Section',
};
