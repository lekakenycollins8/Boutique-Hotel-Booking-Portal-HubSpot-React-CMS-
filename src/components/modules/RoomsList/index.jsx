import React from 'react';
import { ModuleFields, TextField, RepeatedFieldGroup, ImageField, NumberField } from '@hubspot/cms-components/fields';

export function Component({ fieldValues = {} }) {
  const {
    rooms_heading = "Our Luxury Rooms",
    rooms_description = "Choose from our carefully designed rooms, each offering unique amenities and breathtaking views for an unforgettable stay",
    rooms_list = [
      {
        room_name: "Deluxe King Suite",
        room_description: "Spacious suite with king bed, city views, and luxury amenities",
        room_price: 299,
        room_capacity: 2,
        room_image: { src: "/assets/room-deluxe-king.jpg", alt: "Deluxe King Suite" },
        room_amenities: "King Bed, City View, Mini Bar, WiFi"
      },
      {
        room_name: "Executive Double Room",
        room_description: "Modern room with two queen beds, perfect for business travelers",
        room_price: 199,
        room_capacity: 4,
        room_image: { src: "/assets/room-executive-double.jpg", alt: "Executive Double Room" },
        room_amenities: "Two Queen Beds, Work Desk, Coffee Maker, WiFi"
      },
      {
        room_name: "Premium Ocean View",
        room_description: "Elegant room with stunning ocean views and private balcony",
        room_price: 399,
        room_capacity: 2,
        room_image: { src: "/assets/room-ocean-view.jpg", alt: "Premium Ocean View" },
        room_amenities: "Ocean View, Private Balcony, Jacuzzi, WiFi"
      }
    ]
  } = fieldValues;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {rooms_heading}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {rooms_description}
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms_list.map((room, index) => {
            const amenities = room.room_amenities ? room.room_amenities.split(', ') : [];
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Room Image */}
                <div className="relative h-64">
                  <img
                    src={room.room_image?.src || "/assets/placeholder-room.jpg"}
                    alt={room.room_image?.alt || room.room_name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${room.room_price}/night
                  </div>
                </div>

                {/* Room Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {room.room_name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {room.room_description}
                  </p>

                  {/* Capacity */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Up to {room.room_capacity} guests
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {amenities.slice(0, 3).map((amenity, amenityIndex) => (
                        <span
                          key={amenityIndex}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {amenity.trim()}
                        </span>
                      ))}
                      {amenities.length > 3 && (
                        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          +{amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="rooms_heading"
      label="Rooms Section Heading"
      default="Our Luxury Rooms"
    />
    <TextField
      name="rooms_description"
      label="Rooms Section Description"
      default="Choose from our carefully designed rooms, each offering unique amenities and breathtaking views for an unforgettable stay"
    />
    <RepeatedFieldGroup
      name="rooms_list"
      label="Rooms List"
      occurrence={{
        min: 1,
        max: 10,
        default: 3,
      }}
      default={[
        {
          room_name: "Deluxe King Suite",
          room_description: "Spacious suite with king bed, city views, and luxury amenities",
          room_price: 299,
          room_capacity: 2,
          room_image: { src: "/assets/room-deluxe-king.jpg", alt: "Deluxe King Suite" },
          room_amenities: "King Bed, City View, Mini Bar, WiFi"
        },
        {
          room_name: "Executive Double Room",
          room_description: "Modern room with two queen beds, perfect for business travelers",
          room_price: 199,
          room_capacity: 4,
          room_image: { src: "/assets/room-executive-double.jpg", alt: "Executive Double Room" },
          room_amenities: "Two Queen Beds, Work Desk, Coffee Maker, WiFi"
        },
        {
          room_name: "Premium Ocean View",
          room_description: "Elegant room with stunning ocean views and private balcony",
          room_price: 399,
          room_capacity: 2,
          room_image: { src: "/assets/room-ocean-view.jpg", alt: "Premium Ocean View" },
          room_amenities: "Ocean View, Private Balcony, Jacuzzi, WiFi"
        }
      ]}
    >
      <TextField
        name="room_name"
        label="Room Name"
        required={true}
      />
      <TextField
        name="room_description"
        label="Room Description"
      />
      <NumberField
        name="room_price"
        label="Room Price (per night)"
        required={true}
      />
      <NumberField
        name="room_capacity"
        label="Room Capacity"
        required={true}
      />
      <ImageField
        name="room_image"
        label="Room Image"
      />
      <TextField
        name="room_amenities"
        label="Room Amenities (comma-separated)"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Rooms List',
};
