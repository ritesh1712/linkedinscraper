'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Button';

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [companyEmail, setCompanyEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = (): void => {
    console.log(name);
    console.log(password);
    setName('');
    setPassword('');
    setCompanyName('');
    setCompanyEmail('');
  };

  return (
    <form className="bg-white text-black w-full md:w-2/5 md:h-screen md:p-16 p-8 gap-5 flex md:justify-center items-center flex-col">
      {/* heading */}
      <div className="self-start">
        <p className="text-2xl font-medium">Sign up, it's free.</p>
        <p>
          or
          <Link href="login" className="text-green-600 cursor-pointer hover:underline">
            {' '}
            login to an existing account
          </Link>
        </p>
      </div>

      {/* input fields */}
      <Input label="Name" value={name} onChange={setName} />
      <Input label="Company Name" value={companyName} onChange={setCompanyName} />
      <Input label="Company Email" value={companyEmail} onChange={setCompanyEmail} />
      <Input label="Password" type="password" value={password} onChange={setPassword} />

      {/* button */}
      <Button onClick={handleSignUp} backgroundColor="black" width="full" title="Sign Up" textColor="white" />
    </form>
  );
};

export default SignUp;
