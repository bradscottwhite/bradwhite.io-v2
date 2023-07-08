import { FC } from 'react';
import Post from './Post';

const Blog: FC<{ posts: [{
  slug: string,
  frontMatter: { [key: string]: string }
}] }> = ({ posts }) => {
  return (
    <div>
      <h1 className='px-28 pt-20 pb-10 text-2xl text-light-3 font-baunk'>Blog</h1>

      <div className='w-screen flex grid grid-cols-3 gap-10 px-24 pt-4 pb-24'>
        {posts.map(({ slug, frontMatter }) => <Post slug={slug} frontMatter={frontMatter} />)}
      </div>
    {/*!!! ADD 'see more' limiting feature!!!*/}
    </div>
  );
};

export default Blog;
