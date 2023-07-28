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
      {/*<h1 className='bg-gradient-to-r from-sec-accent-1 via-sec-accent-3 to-sec-accent-2 bg-clip-text text-transparent text-5xl py-2 opacity-75 font-crenzo' style={{ filter: 'blur(1px)' }}>Brad White</h1>
      <h2 className='bg-gradient-to-r from-pri-accent-1 via-pri-accent-3 to-pri-accent-2 bg-clip-text text-transparent text-2xl text-slate-100 pb-2 font-baunk' style={{ filter: 'blur(1px)' }}>Full-stack Software Engineer</h2>
      <p className='bg-gradient-to-r from-pri-light-1 via-pri-light-3 to-pri-light-2 bg-clip-text text-transparent text-lg text-slate-100 pb-2'>
        Building functional and elequent apps on the wild web
      </p>*/}
      <h1 className='text-[rgba(var(--pri-dark-1),0.75)] text-5xl py-2 opacity-75 font-crenzo' style={{ filter: 'blur(1px)' }}>Brad White</h1>
      <h2 className='text-[rgba(var(--sec-dark-1),0.75)] text-2xl text-slate-100 pb-2 font-baunk' style={{ filter: 'blur(1px)' }}>Full-stack Software Engineer</h2>
      <p className='text-sec-light-1 text-2xl text-slate-100 py-2'>
        Building <span className='bg-gradient-to-r from-sec-dark-1 via-sec-dark-2 to-sec-dark-3 bg-clip-text text-transparent after:bg-gradient-to-r after:from-sec-dark-1 after:via-sec-dark-2 after:to-sec-dark-3 after:bg-clip-text after:text-transparent after:bg-[length:100%_5px] after:bg-no-repeat after:bg-bottom'>functional</span> and <span className='bg-gradient-to-r from-sec-dark-1 via-sec-dark-2 to-sec-dark-3 bg-clip-text text-transparent underline'>elequent</span> apps on the wild web
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
};

export default Front;
