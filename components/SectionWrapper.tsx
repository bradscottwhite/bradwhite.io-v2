import { FC } from 'react';
//import { motion } from 'framer-motion';

interface wrapperType {
  children: FC;
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
          /*backgroundColor: 'rgb(var(--dark-3))', // darkest violet
          //change '--dark-2' 3rd line to just dark violet and not darkest violet (dark-4)??!!!!
          //5th line???!!!
          backgroundImage: `
            radial-gradient(at 34% 96%, rgb(var(--accent-2)) 0, transparent 67%),
            radial-gradient(at 4% 72%, rgb(var(--dark-1)) 0, transparent 55%),
            radial-gradient(at 87% 44%, rgb(var(--dark-2)) 0, transparent 24%),
            radial-gradient(at 40% 1%, rgb(var(--dark-1)) 0, transparent 38%),
            radial-gradient(at 77% 5%, rgb(var(--accent-3)) 0, transparent 77%),
            radial-gradient(at 61% 18%, rgb(var(--accent-1)) 0, transparent 54%)
          `*/
          /*backgroundColor: 'rgb(77, 124, 15)',
          backgroundImage: 'radial-gradient(at 34% 96%, rgb(94, 234, 212) 0, transparent 67%), radial-gradient(at 4% 72%, rgb(185, 28, 28) 0, transparent 55%), radial-gradient(at 87% 44%, rgb(202, 138, 4) 0, transparent 24%), radial-gradient(at 40% 1%, rgb(154, 52, 18) 0, transparent 38%), radial-gradient(at 77% 5%, rgb(239, 68, 68) 0, transparent 77%), radial-gradient(at 61% 18%, rgb(254, 240, 138) 0, transparent 54%)'*/

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
          backgroundColor: 'rgb(var(--dark-1))'
        }
      }
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
