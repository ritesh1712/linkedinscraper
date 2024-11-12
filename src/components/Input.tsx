import React from 'react';

type InputProps = {
  type?: string; // optional prop, default is 'text'
  label: string;
  value: string; // assuming value is always a string
  onChange: (value: string) => void; // function that takes a string
  required?: boolean; // optional prop, default is true
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className='w-full'>
      <label className='block font-semibold text-sm mb-2' htmlFor="name">{label}</label>
      <input
        required={required}
        id='name'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='outline-none border-gray-400 border p-2 w-full'
        type={type}
      />
    </div>
  );
};

export default Input;
