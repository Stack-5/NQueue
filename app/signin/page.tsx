import React from 'react';
import Image from 'next/image';

const Signin = () => {
  const primaryColor = '#E49400';
  const secondaryColor = '#17D076';

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#34D399' }}>
      <div className="bg-white rounded-xl shadow-lg p-12 w-full max-w-lg">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center h-16 w-16 rounded-full">
            <Image src="/brand.png" alt="NeuQueue Logo" width={64} height={64} />
          </div>
          <h2 className="text-2xl font-semibold" style={{ color: primaryColor }}>
            Welcom to <span style={{ color: secondaryColor }}>N</span>Queue
          </h2>
          <p className="text-center text-gray-600 text-lg mt-2">Ditch the lines, embrace convenience.</p>
          <p className="text-center text-gray-500 text-sm mt-1">NQueue: Your simple way to smarter queues at New Era<br />University.</p>
        </div>
        <button className="w-full bg-white border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-100 cursor-pointer" style={{ borderColor: primaryColor, color: 'rgba(0, 0, 0, 0.87)', padding: '10px' }}>
          <div className="flex items-center justify-center">
            <Image src="/google-logo.svg" alt="Google Logo" width={20} height={20} className="mr-2" />
            <span>Sign in with your institutional email</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Signin;
