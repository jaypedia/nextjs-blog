import { Post } from '@/service/posts';

type PostGridProps = { posts: Post[] };

export default function PostsGrid({ posts }: PostGridProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  );
}
