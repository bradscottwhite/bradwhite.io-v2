import { FC } from 'react';
import {
  TSIcon,
  ReactIcon,
  AWSIcon,
  TWIcon,
  GraphQLIcon,
  NodeIcon
} from '../icons';

export interface projectType {
  title: string;
  desc: string;
  img: string;
  url: string;
  github: string;
  tech: FC<{ size: string }>[];
}

export const projects: projectType[] = [
  {
    title: 'Scalable Blog App',
    desc: 'Scalable multi-user authenticated app components that can be quickly and easily implemented into other projects',
    img: '/project_pic_1.png',
    url: 'https://bp-app.netlify.app/', //Build a project page????
    github: 'https://www.github.com/bradscottwhite/bp',
    tech: [ TSIcon, ReactIcon, TWIcon, GraphQLIcon ]
  }, {
    title: 'Minimalist Social Media App',
    desc: 'A scalable and affordable social media application',
    img: '/project_pic_2.png',
    url: 'https://master.d3e9ksev6svovb.amplifyapp.com/',
    github: 'https://github.com/bradscottwhite/firebirdie',
    tech: [ ReactIcon, TWIcon, AWSIcon ]
  }, {
    title: 'Productivity Planner App',
    desc: 'Multi-user authenticated planner app similar to Trello',
    img: '/project_pic_3.png',
    url: 'https://bradscottwhite.github.io/min-planner/',
    github: 'https://github.com/bradscottwhite/min-planner',
    tech: [ ReactIcon, TWIcon, AWSIcon ]
  }
];
