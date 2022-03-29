import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostPropsType = {
  message: string
}

const MyPosts: React.FC<MyPostPropsType> = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post post={props.message} likesCount={0} />
        <Post post={props.message} likesCount={23} />
      </div>
    </div>
  )
}

export default MyPosts;