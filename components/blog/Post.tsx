import Link from 'next/link';
import { FC } from 'react';
import Tilt from 'react-parallax-tilt';

const Post: FC<{
  slug: string,
  frontMatter: { [key: string]: string }
}> = ({
  slug,
  frontMatter: {
    title,
    subtitle,
    thumbnail
  }
}) => {
  return (
    <Tilt
      glareMaxOpacity={45}
      transitionSpeed={450}
      className='zoom-hover dark:bg-[rgba(var(--dark-2),0.5)] p-8 my-1 rounded-lg h-[500px] cursor-pointer group'
    >
      <div className='zoom w-full h-1/2 rounded-lg'>
        <div className='zoom-img rounded-lg group-hover:brightness-50' style={{ background: `url(${thumbnail})`, backgroundSize: 'cover' }}></div>

        <div className='absolute inset-0 flex m-8'>
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className='w-[48px] h-[48px] rounded-full hover:bg-dark-2 ml-auto items-center justify-center flex text-accent-1 cursor-ne-resize'
            target='_blank'
            style={{ backgroundColor: 'rgba(var(--dark-3), 0.75)' }}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' x2='21' y1='14' y2='3'/>
            </svg>
          </Link>
        </div>
      </div>

      <Link
        key={slug}
        href={`/blog/${slug}`}
        className='cursor-ne-resize'
        target='_blank'
      >
        <h1 className='text-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-xl pt-6 pb-2' style={{ fontFamily: 'Baunk' }}>{title}</h1>
      </Link>
      <h2 className='text-light-2 text-md pb-4' style={{ fontFamily: 'Triakis' }}>{subtitle}</h2>
    {/*Add date!!!*/}
    </Tilt>
  );
};

export default Post;
