import { FC } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { PageWrapper } from '../../components';
import styles from '../../styles/blog.module.css';

const BlogPost: FC<{
  frontMatter: { [key: string]: string },
  slug: string,
  content: string
}> = ({
  frontMatter,
  slug,
  content
}) => (
  <PageWrapper>
    <div>
      <div className='relative w-screen py-[28vh] px-[15vh] text-center'>
        <img className='z-[-1] brightness-35 w-screen h-full bg-cover absolute top-0 left-0' src={frontMatter.thumbnail} alt={frontMatter.title} />
        <h1 className='text-light-3 text-2xl' style={{ fontFamily: 'Crenzo' }}>{frontMatter.title}</h1>
        <h2 className='text-light-2 text-xl pt-2' style={{ fontFamily: 'Baunk' }}>{frontMatter.subtitle}</h2>
        {/*date*/}
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  </PageWrapper>
);

export default BlogPost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.filter(filename => filename.includes('.md')).map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({params: {slug}}: never) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content
    }
  };
};
