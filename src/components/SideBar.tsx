import React from 'react';
import Image from 'next/image';
import logo from '@/image/logo.png';
import Button from './Button';

const SideBar: React.FC = () => {
  return (
    <div className="w-3/5 p-16 md:flex flex-col gap-y-20 h-screen hidden bg-black text-white">
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
        />
      </div>

      <div className='flex flex-col gap-y-5'>
        <p className='text-6xl'>B2B Prospecting and Outreach</p>
        <p className='text-lg w-4/5'>
          Modern Outbound is Account-Based and Signal-Driven. Supercharge your Pipeline with LinkedIn + Leadfwd.
        </p>
        <Button title='Add to Chrome' width={40} animation='transform transition duration-300 hover:scale-110' />
      </div>

      <div className='text-sm'>
        Privacy Policy, Cookie Policy and <span className='cursor-pointer hover:underline'> Terms of Use</span>
      </div>
    </div>
  );
};

export default SideBar;
