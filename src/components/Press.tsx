import React from 'react';

const Press: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <h1 className="text-4xl font-bold mb-8">News</h1>
      <div className="max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
          <div className="prose">
            <p className="mb-4">
              United Connect is revolutionizing the automotive manufacturing industry with its innovative approach to talent acquisition. The platform bridges the gap between skilled professionals and manufacturing opportunities, creating a more efficient and effective hiring process.
            </p>
            <a 
              href="https://www.issuewire.com/transforming-talent-acquisition-united-connect-revolutionizes-hiring-in-automotive-manufacturing-1819608373487542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read the full press release →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
