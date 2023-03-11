import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  bgColor?: string;
};

export default function Button({
  children,
  href,
  onClick,
  bgColor = 'bg-slate-900',
}: ButtonProps) {
  const child = (
    <div className="w-fit p-1 bg-gradient-to-r from-violet-700 to-red-600 text-white rounded-md cursor-pointer group">
      <div className="relative w-fit outline-none overflow-hidden rounded-md">
        <div
          className={`${bgColor} w-full h-full transition duration-300 absolute ease-in-out top-0 right-0 group-hover:translate-x-[125%]`}
        />
        <div className="z-10 relative font-bold bg-gradient-to-r transition duration-300 ease-in-out from-violet-700 to-red-600 bg-clip-text text-transparent px-6 py-3 group-hover:text-white">
          {children}
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="w-fit">
      {child}
    </Link>
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
