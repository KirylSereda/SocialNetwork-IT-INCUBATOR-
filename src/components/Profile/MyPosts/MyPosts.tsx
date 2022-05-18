import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostPropsType = {
  message?: string
}

const MyPosts: React.FC<MyPostPropsType> = (props) => {

  const postData = [
    { id: 1, message: 'Hi', likesCount: 12 },
    { id: 2, message: 'How are you?', likesCount: 12 },
    { id: 3, message: 'Yo', likesCount: 12 },
    { id: 4, message: 'Yo', likesCount: 12 },
    { id: 5, message: 'Yo', likesCount: 12 },
    { id: 6, message: 'Yo', likesCount: 12 }
  ]
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
        <Post post={postData[0].message} likesCount={postData[0].likesCount} />
        <Post post={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div >
  )
}

export default MyPosts;