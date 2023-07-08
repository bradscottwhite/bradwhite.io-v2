import { FC } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { projectType } from './projects';

const Project: FC<{ projectData: projectType }> = ({
  projectData: {
    title,
    desc,
    img,
    url,
    github,
    tech
  }
}) => {
  return (
    <Tilt
      glareMaxOpacity={45}
      transitionSpeed={450}
      className='zoom-hover dark:bg-[rgba(var(--dark-2),0.5)] p-8 pb-14 my-10 mx-18 rounded-lg h-[500px] cursor-pointer project'
    >
      <div className='zoom w-full h-2/3 rounded-lg'>
        <div className='zoom-img rounded-lg project-img' style={{ background: `url(${img})`, backgroundSize: 'cover' }}></div>

        <div className='absolute inset-0 flex m-8'>
          <a href={url} target='_blank' className='w-[48px] h-[48px] rounded-full hover:bg-dark-2 mr-auto items-center justify-center flex text-green-400 hover:text-green-300 cursor-ne-resize' style={{ backgroundColor: 'rgba(var(--dark-3), 0.75)' }}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' x2='21' y1='14' y2='3'/>
            </svg>
          </a>

          <a href={github} target='_blank' className='w-[48px] h-[48px] rounded-full bg-gray-500 hover:bg-dark-2 ml-auto items-center justify-center flex text-green-400 hover:text-green-300  cursor-ne-resize' style={{ backgroundColor: 'rgba(var(--dark-3), 0.75)' }}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'/><path d='M9 18c-4.51 2-5-2-7-2'/>
            </svg>
          </a>
        </div>
      </div>

      <h1 className='text-light-3 text-2xl pt-6 pb-2 font-baunk'>{title}</h1>
      <p className='text-light-2 text-md pb-4'>{desc}</p>

      <div className='w-full flex px-8 py-2 justify-center'>
        {tech.map(Icon => <span className='px-4'>
          <Icon size={'2em'} />
        </span>)}
      </div>
    </Tilt>
  );
};

export default Project;
