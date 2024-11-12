'use client';
import React, { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (): void => {
    console.log(userName);
    console.log(password);
    setUserName('');
    setPassword('');
  };

  return (
    <form className="bg-white text-black w-full md:w-2/5 md:h-screen md:p-16 p-10 gap-10 flex md:justify-center items-center flex-col">
      {/* heading */}
      <div className="self-start">
        <p className="text-2xl font-medium">Login</p>
        <p>
          or
          <Link href="signup" className="text-green-600 cursor-pointer hover:underline">
            {' '}
            create a free starter account
          </Link>
        </p>
      </div>

      {/* input */}
      <Input label="Username" value={userName} onChange={setUserName} />
      <Input label="Password" type="password" value={password} onChange={setPassword} />

      {/* button */}
      <Button onClick={handleLogin} title="Log in" backgroundColor="black" textColor="white" width="full" />
    </form>
  );
};

export default Login;
