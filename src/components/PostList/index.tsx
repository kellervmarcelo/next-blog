import { postRepository } from '@/repositories/post';

export default async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <ul className='space-y-5 list-image-none'>
      {posts.map(post => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}
