import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 pb-4 border-gray-700">
          About Our Docopull website
        </h1>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
          Welcome to our Docopull website! We are dedicated to providing you with the best tools and resources to help you find your dream home or investment property.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
            Our Mission
          </h2>
          <p className="text-lg">
            Our mission is to simplify the process of buying, selling, and renting properties by leveraging the latest technology and providing exceptional customer service.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-lg space-y-4">
            <li>Advanced search filters to narrow down your property search</li>
            <li>Real-time property listings with accurate information</li>
            <li>Save favorite properties and receive notifications about price changes or new listings</li>
            <li>Connect with experienced real estate agents for personalized assistance</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
            Our Team
          </h2>
          <p className="text-lg">
            We are a team of passionate individuals with backgrounds in real estate, technology, and customer service. Our diverse expertise allows us to create an exceptional user experience for our customers.
          </p>
        </section>
      </div>
    </div>
  );
}
