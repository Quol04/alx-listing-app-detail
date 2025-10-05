import React, { useState } from 'react';
import Card from '@/components/common/Card';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories from all properties
  const categories = ['All', ...new Set(PROPERTYLISTINGSAMPLE.flatMap(property => property.category))];
  
  // Filter properties based on search term and category
  const filteredProperties = PROPERTYLISTINGSAMPLE.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.state.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || property.category.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    // <div className="min-h-screen flex items-center justify-center">
    //     <h1>ALX Property Listings</h1>
      
    // </div>
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
        
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Discover amazing properties for your next vacation or business trip
              </p>
              
              {/* Search and Filter Section */}
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by property name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {filteredProperties.length} of {PROPERTYLISTINGSAMPLE.length} properties
            </p>
          </div>
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <Card key={index} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😞</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No properties found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
