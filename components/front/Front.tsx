import SectionWrapper from '../SectionWrapper';

import {
  TSIcon,
  ReactIcon,
  AWSIcon,
  TWIcon,
  GraphQLIcon,
  NodeIcon
} from '../icons';
import PrimaryBtn from '../btn/PrimaryBtn';
import SecondaryBtn from '../btn/SecondaryBtn';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Front = () => {
  return (
    <div className='py-[28vh] pl-[15vw]'>
      <h1 className='bg-gradient-to-r from-lime-600 via-rose-400 to-violet-600 bg-clip-text text-transparent text-5xl py-2 opacity-75 font-crenzo' style={{ filter: 'blur(1px)' }}>Brad White</h1>
      <h2 className='bg-gradient-to-r from-lime-500 via-rose-300 to-violet-500 bg-clip-text text-transparent text-2xl text-slate-100 pb-2 font-baunk' style={{ filter: 'blur(1px)' }}>Full-stack Software Engineer</h2>
      <p className='bg-gradient-to-r from-lime-400 via-rose-200 to-violet-400 bg-clip-text text-transparent text-lg text-slate-100 pb-2'>
        Building functional and elequent apps on the wild web
      </p>
      <div className='md:w-[45vw] w-full pt-4 pb-8 grid grid-cols-6 gap-4'>
        <TSIcon size='3em' />
        <ReactIcon size='3em' />
        <TWIcon size='3em' />
        <NodeIcon size='3em' />
        <AWSIcon size='3em' />
        <GraphQLIcon size='3em' />
      </div>

      <div className='w-1/3 flex grid grid-cols-2 pt-12 pb-6 gap-10'>
        <PrimaryBtn text='Resume' url='/resume' />
        <SecondaryBtn text='Hire me' url='#contact' />
      </div>
    </div>
  );
      /* Scroll Motion */
    /*<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <Link href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-slate-400 flex justify-center items-start p-2'>
            <motion.div
              animate={{y: [0, 24, 0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-slate-400 mb-1'
            ></motion.div>
          </div>
        </Link>
      </div>*/
    //</div>
    //);
};

export default Front;
