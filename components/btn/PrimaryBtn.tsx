import { FC, useState } from 'react';
import Link from 'next/link';

interface btnType {
  text: string;
  url: string;
}

const PrimaryBtn: FC<btnType> = ({ text, url }) => {
  const [ hover, setHover ] = useState<boolean>(false);
  
  return (
    <Link
      className='group rounded-xl relative text-center text-sec-light-2 hover:text-pri-accent-2 text-xl'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={url}
    >
      <div className='absolute -inset-2 bg-gradient-to-r from-[rgba(var(--sec-accent-1),0.75)] to-[rgba(var(--sec-accent-2),0.75)] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-tilt'></div>
      <div className='relative px-6 py-3 bg-[rgba(var(--sec-dark-3),0.75)] rounded-xl flex items-center justify-center'>
        <span className='pt-1'>{text}</span>
        <span className='inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200'>
          <svg className='ml-2' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            {!hover ? (
              <polyline points='9 18 15 12 9 6'/>
            ) : (
              <><path d='M5 12h14'/><path d='m12 5 7 7-7 7'/></>
            )}
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default PrimaryBtn;
