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

interface sectionType {
  El: FC;
  idName: string;
}

const sections: sectionType[] = [
  { El: Front, idName: 'home' },
  { El: Tech, idName: 'tech' },
  { El: Projects, idName: 'projects' },
];

const Home = (props: {
  posts: [ {
    frontMatter: { [key: string]: string },
    slug: string
  } ]
}) => {
  return (
    <PageWrapper>
      {sections.map(({ El, idName }, index) => (
        <SectionWrapper idName={idName} index={index}>
          <El />
        </SectionWrapper>
      ))}

      <SectionWrapper idName='blog' index={sections.length + 1}>
        <Blog posts={props.posts} />
      </SectionWrapper>

    {/*<SectionWrapper idName='contact' index={sections.length + 2}>
        <Blog />
      </SectionWrapper>*/}
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
