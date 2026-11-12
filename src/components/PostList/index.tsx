import { postRepository } from '@/repositories/post';

export default async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <>
      {posts.map(post => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </>
  );
}
