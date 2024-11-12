import React from 'react';

type ButtonProps = {
  backgroundColor: string;
  textColor: string;
  width: number; // or 'full' if you want to restrict to specific values
  title: string;
  animation?: string; // optional prop
  onClick?: () => void; // optional click handler
};

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor,
  width = '40',
  title,
  animation,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 w-${width} contain-inline-size border-white border rounded bg-${backgroundColor} text-${textColor} ${animation}`}
    >
      {title}
    </button>
  );
};

export default Button;
