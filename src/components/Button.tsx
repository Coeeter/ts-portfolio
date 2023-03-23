import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  bgColor?: string;
  size?: 'small' | 'normal';
};

export default function Button({
  children,
  href,
  onClick,
  bgColor = 'bg-slate-900',
  size = 'normal',
}: ButtonProps) {
  const child = (
    <div className="w-fit p-[2px] bg-gradient-to-r from-violet-700 to-red-600 text-white rounded-md cursor-pointer group active:from-violet-800 active:to-red-700">
      <div className="relative w-fit outline-none overflow-hidden rounded-md">
        <div
          className={`${bgColor} w-full h-full transition duration-300 absolute ease-in-out top-0 right-0 group-hover:translate-x-[125%]`}
        />
        <div
          className={`z-10 relative font-bold bg-gradient-to-r transition duration-300 ease-in-out from-violet-700 to-red-600 bg-clip-text text-transparent  group-hover:text-white ${
            size == 'normal' ? 'px-6 py-3' : 'px-4 py-2'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="w-fit">
      {child}
    </a>
  ) : (
    <button
      className="w-fit"
      onClick={() => {
        if (!onClick) return;
        onClick();
      }}
    >
      {child}
    </button>
  );
}
