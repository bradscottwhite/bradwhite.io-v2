import { FC, ReactNode } from 'react';

const Tooltip: FC<{ children: ReactNode, text: string }> = ({ children, text }) => {
  return (
    <div className='relative flex flex-col items-center group'>
      {children}
      <div className='absolute top-0 flex flex-col items-center hidden mt-[84px] group-hover:flex opacity-75 hover:cursor-pointer'>
        <div className='w-3 h-3 -mb-2 rotate-45 bg-sec-dark-1'></div>
        <span className='relative z-10 px-4 py-2 text-xs leading-none text-pri-light-1 whitespace-no-wrap bg-sec-dark-1 shadow-lg rounded-lg'>{text}</span>
      </div>
    </div>
  );
};

export default Tooltip;
