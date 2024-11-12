import React from 'react';
import { FiMonitor } from "react-icons/fi";


const Restricted: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-10">
      <div className='bg-gray-200 p-3 rounded-full mb-5'>
      <FiMonitor size={50} />
      </div>
      <h1 className="text-2xl font-medium text-center">Please switch to desktop to use WarmCall</h1>
      <p className="text-center opacity-60">
       We do not support mobile devices yet.
       Please login via desktop to continue.
      </p>
    
    </div>
  );
};

export default Restricted;
