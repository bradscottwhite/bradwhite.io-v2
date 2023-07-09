import SectionWrapper from '../SectionWrapper';
import Project from './Project';
import { projects } from './projects';

const Projects = () => {
  return (
    <div>
      <h1 className='px-28 pt-20 pb-10 text-2xl text-light-3' style={{ fontFamily: 'Baunk' }}>Projects</h1>
      <div className='w-screen flex grid grid-cols-2 gap-14 px-24 pt-0 pb-20'>
        {projects.map((projectData) => <Project projectData={projectData} key={Math.random()} />)}
      </div>
    </div>
  );
};

export default Projects;
