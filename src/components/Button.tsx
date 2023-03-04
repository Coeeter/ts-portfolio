import { useRouter } from 'next/router';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({ children, href, onClick }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      className="w-fit p-1 bg-gradient-to-r from-violet-700 to-red-600 text-white rounded-md cursor-pointer group"
      onClick={() => {
        if (href) return router.push(href);
        if (!onClick) return;
        onClick();
      }}
    >
      <div className="w-fit outline-none transition duration-150 ease-in-out rounded-md bg-slate-900 group-hover:bg-transparent">
        <div className="font-bold bg-gradient-to-r transition duration-150 ease-in-out from-violet-700 to-red-600 bg-clip-text text-transparent px-6 py-3 group-hover:text-white">
          {children}
        </div>
      </div>
    </button>
  );
}
