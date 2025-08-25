import React from 'react';
import { ModuleFields, TextField, RepeatedFieldGroup } from '@hubspot/cms-components/fields';

export function Component({ fieldValues = {} }) {
  const {
    amenities_heading = "Hotel Amenities",
    amenities_description = "Enjoy our comprehensive range of amenities designed to make your stay comfortable, convenient, and memorable",
    amenities_list = [
      {
        amenity_name: "Free WiFi",
        amenity_description: "High-speed internet throughout the hotel",
        amenity_icon: "📶"
      },
      {
        amenity_name: "Swimming Pool",
        amenity_description: "Outdoor pool with city views",
        amenity_icon: "🏊"
      },
      {
        amenity_name: "Fitness Center",
        amenity_description: "24/7 access to modern equipment",
        amenity_icon: "💪"
      },
      {
        amenity_name: "Spa Services",
        amenity_description: "Relaxing treatments and massages",
        amenity_icon: "🧘"
      },
      {
        amenity_name: "Restaurant",
        amenity_description: "Fine dining with local cuisine",
        amenity_icon: "🍽️"
      },
      {
        amenity_name: "Room Service",
        amenity_description: "24-hour in-room dining",
        amenity_icon: "🛎️"
      },
      {
        amenity_name: "Valet Parking",
        amenity_description: "Complimentary parking service",
        amenity_icon: "🚗"
      },
      {
        amenity_name: "Concierge",
        amenity_description: "Personal assistance and recommendations",
        amenity_icon: "🎩"
      }
    ],
    cta_text = "Ready to experience luxury and comfort?",
    cta_button_text = "Book Your Stay"
  } = fieldValues;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {amenities_heading}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {amenities_description}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities_list.map((amenity, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center text-2xl group-hover:bg-blue-100 transition-colors duration-300">
                {amenity.amenity_icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {amenity.amenity_name}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {amenity.amenity_description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {cta_text}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            {cta_button_text}
          </button>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="amenities_heading"
      label="Amenities Section Heading"
      default="Hotel Amenities"
    />
    <TextField
      name="amenities_description"
      label="Amenities Section Description"
      default="Enjoy our comprehensive range of amenities designed to make your stay comfortable, convenient, and memorable"
    />
    <RepeatedFieldGroup
      name="amenities_list"
      label="Amenities List"
      occurrence={{
        min: 1,
        max: 12,
        default: 8,
      }}
      default={[
        {
          amenity_name: "Free WiFi",
          amenity_description: "High-speed internet throughout the hotel",
          amenity_icon: "📶"
        },
        {
          amenity_name: "Swimming Pool",
          amenity_description: "Outdoor pool with city views",
          amenity_icon: "🏊"
        },
        {
          amenity_name: "Fitness Center",
          amenity_description: "24/7 access to modern equipment",
          amenity_icon: "💪"
        },
        {
          amenity_name: "Spa Services",
          amenity_description: "Relaxing treatments and massages",
          amenity_icon: "🧘"
        },
        {
          amenity_name: "Restaurant",
          amenity_description: "Fine dining with local cuisine",
          amenity_icon: "🍽️"
        },
        {
          amenity_name: "Room Service",
          amenity_description: "24-hour in-room dining",
          amenity_icon: "🛎️"
        },
        {
          amenity_name: "Valet Parking",
          amenity_description: "Complimentary parking service",
          amenity_icon: "🚗"
        },
        {
          amenity_name: "Concierge",
          amenity_description: "Personal assistance and recommendations",
          amenity_icon: "🎩"
        }
      ]}
    >
      <TextField
        name="amenity_name"
        label="Amenity Name"
        required={true}
      />
      <TextField
        name="amenity_description"
        label="Amenity Description"
      />
      <TextField
        name="amenity_icon"
        label="Amenity Icon (emoji or text)"
        default="🏨"
      />
    </RepeatedFieldGroup>
    <TextField
      name="cta_text"
      label="CTA Text"
      default="Ready to experience luxury and comfort?"
    />
    <TextField
      name="cta_button_text"
      label="CTA Button Text"
      default="Book Your Stay"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Amenities Section',
};
