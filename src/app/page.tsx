import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to the Desktop-only Site</h1>
      <p className="text-lg text-center">This content is accessible only on desktop browsers.</p>
    </div>
  );
};

export default Home;
