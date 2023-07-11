import { FC } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { PageWrapper } from '../../components';
import styles from '../../styles/blog.module.css';


// Prism.js Code Highlighting:
import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-okaidia.min.css';

import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';

import 'prismjs/plugins/command-line/prism-command-line.min.css';
import 'prismjs/plugins/command-line/prism-command-line.min';

// Language support:
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';


const BlogPost: FC<{
  frontMatter: { [key: string]: string },
  slug: string,
  content: string
}> = ({
  frontMatter,
  slug,
  content
}) => {
  // Prism.js Code Highlighting:
  useEffect(() => {
    if (typeof window !== 'undefined')
      Prism.highlightAll();
  }, []);

  return (
  <PageWrapper>
    <div>
      <div className='relative w-screen py-[28vh] px-[15vh] text-center'>
        <img className='z-[-1] brightness-35 w-screen h-full bg-cover absolute top-0 left-0' src={frontMatter.thumbnail} alt={frontMatter.title} />
        <h1 className='text-pri-light-2 text-2xl font-crenzo'>{frontMatter.title}</h1>
        <h2 className='text-sec-light-2 text-xl pt-2 font-baunk'>{frontMatter.subtitle}</h2>
        {/*date*/}
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  </PageWrapper>
  );
};

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
