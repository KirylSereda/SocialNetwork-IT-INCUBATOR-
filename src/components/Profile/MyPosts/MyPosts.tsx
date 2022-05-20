
import { PostsType } from '../../Redux/Store';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
  posts: PostsType
}

const MyPosts: React.FC<PropsType> = (props) => {

  let postsElements = props.posts.map(p => <Post post={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postBlock}>
      <h3>  My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div >
  )
}

export default MyPosts;