import { FC, ReactNode } from 'react';
import Tooltip from './Tooltip';

const IconBase: FC<{ children: ReactNode, color: string, text: string }> = ({ children, color, text }) => {
  return (
    <Tooltip text={text}>
      <div className='hover:cursor-pointer hover:scale-125 relative group'>
        <div className={`absolute -inset-2 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt ${color}`}></div>
        <div className='relative p-3 rounded-full text-[rgba(var(--sec-light-1),0.75)] icon-hover bg-[rgba(var(--sec-dark-1),0.75)]' style={{ filter: 'blur(1px)' }}>
          {children}
        </div>
      </div>
    </Tooltip>
  );
};

export default IconBase;
