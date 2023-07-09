import { FC, useState } from 'react';
import Link from 'next/link';

interface btnType {
  text: string;
  url: string;
}

const SecondaryBtn: FC<btnType> = ({ text, url }) => {
  const [ hover, setHover ] = useState<boolean>(false);

  return (
    <Link
      className='group [transform:translateZ(0)] px-6 py-2 rounded-xl overflow-hidden border-2 border-sec-dark-3 relative before:absolute before:bg-gradient-to-r before:from-[rgba(var(--sec-accent-1),0.75)] before:to-[rgba(var(--sec-accent-2),0.75)] before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 px-4 py-2 text-center mr-3 md:mr-0 text-sec-dark-3 text-xl'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={url}
    >
      <span className='relative z-0 group-hover:text-light-3 transition ease-in-out duration-500 flex items-center justify-center'>
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
      </span>
    </Link>
  );
};

export default SecondaryBtn;
