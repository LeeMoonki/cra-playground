import { useParams } from 'react-router-dom';

function PostsPage() {
  const { postId } = useParams<{ postId: string }>();

  return (
    <div>
      <h1>Posts Page</h1>
      <p>post id : {postId}</p>
    </div>
  );
}

export default PostsPage;
