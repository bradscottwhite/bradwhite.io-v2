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
    title: 'Project 1',
    desc: 'Full dynamic SSR application using Next, React, Tailwind, and TypeScript.',
    img: '/project_pic_1.png',
    url: '#project1', //Build a project page????
    github: 'https://www.github.com/bradscottwhite',
    tech: [ TSIcon, ReactIcon, TWIcon ]
  }, {
    title: 'Project 2',
    desc: 'Full dynamic SSR application using Next, React, Tailwind, TypeScript, and Node.',
    img: '/project_pic_3.png',
    url: '#project2',
    github: 'https://www.github.com/bradscottwhite',
    tech: [ TSIcon, ReactIcon, TWIcon, NodeIcon ]
  }, {
    title: 'Project 3',
    desc: 'Full dynamic SSR application using TypeScript, GraphQL, AWS, and Node.',
    img: '/project_pic_1.png',
    url: '#project3',
    github: 'https://www.github.com/bradscottwhite',
    tech: [ TSIcon, GraphQLIcon, AWSIcon, NodeIcon ]
  },
];
