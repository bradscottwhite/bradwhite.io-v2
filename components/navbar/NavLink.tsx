import { FC } from 'react';

const NavLink: FC<{ url: string, title: string }> = ({ url, title }) => {
  return (
    <a
      href={url}
      className='block py-2 pl-4 pr-4 rounded md:hover:bg-transparent md:p-0 md:hover:text-pri-accent-2 text-sec-light-2 hover:bg-sec-dark-1 md:hover:bg-transparent border-gray-700 relative after:absolute after:bg-pri-accent-2 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'
    >
      {title}
    </a>
  );
};

export default NavLink;
