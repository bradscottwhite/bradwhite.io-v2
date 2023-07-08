import { FC } from 'react';
import {
  Front,
  Tech,
  Projects,
  Blog,
  /*Contact,*/
  PageWrapper,
  SectionWrapper
} from '../components';

import matter from 'gray-matter';
import fs from "fs";
import path from "path";

type postType = {
  posts: [{
    slug: string,
    frontMatter: { [key: string]: string }
  }]
}

interface sectionType {
  El: FC<postType> | FC;
  idName: string;
}

const sections: sectionType[] = [
  { El: Front, idName: 'home' },
  { El: Tech, idName: 'tech' },
  { El: Projects, idName: 'projects' },
  { El: Blog, idName: 'blog' },
  /*{ El: Contact, idName: 'contact' }*/
];

const Home = (props: postsType) => {
  return (
    <PageWrapper>
      {sections.map(({ El, idName }, index) => {
        return idName !== 'blog' ? (
          <SectionWrapper idName={idName} index={index}>
            <El />
          </SectionWrapper>
        ) : (
          <SectionWrapper idName={idName} index={index}>
            <El posts={props.posts}/>
          </SectionWrapper>
        );
      })}
    </PageWrapper>
  );
};

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.filter(filename => filename.includes(".md")).map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  }).sort((a, b) => (
      new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  ));

  return { props: { posts } };
}

export default Home;
