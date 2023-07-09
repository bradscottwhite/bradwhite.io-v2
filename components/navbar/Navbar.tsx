import Link from 'next/link';
import { useState } from 'react';
import PrimaryBtn from '../btn/PrimaryBtn';
import NavLink from './NavLink';

const Navbar = () => {
  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <nav className='fixed w-full z-20 top-0 left-0 bg-[rgba(var(--sec-dark-1),0.5)]'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center pt-3 brightness-150 text-pri-light-3 hover:text-pri-accent-1 font-crenzo' style={{ filter: 'blur(1px)' }}>
          <span className='self-center text-3xl font-semibold whitespace-nowrap'>BW</span>
        </a>

        <div className='flex md:order-2'>
          <PrimaryBtn text='Hire me' url='/#contact' />

          <button onClick={() => setOpen(!open)} type='button' className='inline-flex items-center p-2 text-sm text-pri-light-3 hover:text-sec-light-3 rounded-lg md:hidden hover:bg-sec-dark-1 focus:outline-none focus:ring-2 focus:ring-sec-accent-3'>
            <span className='sr-only'>Open main menu</span>
            {!open ? (
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='21' x2='3' y1='6' y2='6'/><line x1='15' x2='3' y1='12' y2='12'/><line x1='17' x2='3' y1='18' y2='18'/>
              </svg>
            ) : (
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M18 6 6 18'/><path d='m6 6 12 12'/>
              </svg>
            )}
          </button>
        </div>

        <div className={`items-center justify-between ${open ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0'>
            <li><NavLink url='/' title='Home' /></li>
            <li><NavLink url='/#about' title='About' /></li>
            <li><NavLink url='/#tech' title='Tech' /></li>
            <li><NavLink url='/#contact' title='Contact' /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
