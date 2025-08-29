/**
 * HeaderPartial
 * Site header with logo and navigation menu
 * Usage: <HeaderPartial />
 */
import React from 'react';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export default function HeaderPartial({ fieldValues = {} }) {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                className="h-8 w-auto" 
                src="hotel-logo" 
                alt="Boutique hotel logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Boutique Hotel
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="site_name"
      label="Site Name"
      default="Boutique Hotel"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Header Partial',
};
