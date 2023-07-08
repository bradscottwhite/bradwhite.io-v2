import technologies from './technologies';
import Tilt from 'react-parallax-tilt';

const Tech = () => {
  return (
    <div className='pb-24'>
      <h1 className='px-28 pt-20 pb-10 text-2xl text-light-3' style={{ fontFamily: 'Baunk' }}>Tech</h1>

      <Tilt
        glareMaxOpacity={45}
        transitionSpeed={300}
        className='bg-[rgba(var(--dark-2),0.5)] rounded-lg flex flex-row flex-wrap justify-center gap-10 px-10 py-6 mx-[10vw]'
      >
        {technologies.map(Icon => (
          <Icon size={'3.5em'} />
        ))}
      </Tilt>
    </div>
  );
};

export default Tech;
