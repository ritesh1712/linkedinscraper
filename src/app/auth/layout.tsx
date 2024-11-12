import SideBar from "@/components/SideBar";
import Image from "next/image";
import logo from '@/image/logo.png';
import React from 'react';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="md:flex h-screen">
      <SideBar />
      <div className="bg-black w-full md:hidden px-8 py-4">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
      {children}
    </div>
  );
}
