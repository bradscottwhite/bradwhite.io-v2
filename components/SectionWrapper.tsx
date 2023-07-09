import { FC, ReactNode } from 'react';
//import { motion } from 'framer-motion';

interface wrapperType {
  children: ReactNode;
  idName: string;
  index: number;
}

const SectionWrapper: FC<wrapperType> = ({
  children,
  idName,
  index
}) => {
  return (
    <div
      className='w-screen'
      id={idName}
      style={
        index % 2 == 0 ? {
          backgroundColor: '#C8CED0',
          backgroundImage: `
            radial-gradient(at 19% 53%, #59C5A6 0px, transparent 50%),
            radial-gradient(at 89% 86%, rgb(var(--sec-accent-1)) 0px, transparent 50%),
            radial-gradient(at 17% 30%, rgb(var(--pri-accent-1)) 0px, transparent 50%),
            radial-gradient(at 69% 41%, rgb(var(--pri-accent-2)) 0px, transparent 50%),
            radial-gradient(at 42% 77%, rgb(var(--sec-light-3)) 0px, transparent 50%),
            radial-gradient(at 76% 46%, rgb(var(--sec-accent-2)) 0px, transparent 50%),
            radial-gradient(at 59% 14%, rgb(var(--sec-light-1)) 0px, transparent 50%)
          `
        } : {
          backgroundColor: 'rgb(var(--pri-dark-1))'
        }
      }
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
