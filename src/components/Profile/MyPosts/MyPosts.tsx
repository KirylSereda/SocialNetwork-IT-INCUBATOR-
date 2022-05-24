
import React from 'react';
import { PostType } from '../../Redux/Store';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  addPost: () => void
  upDateNewPostText: (newPostText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

  let postsElements = props.posts.map(p => <Post post={p.message} likesCount={p.likesCount} />)
  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    if (newPostElement.current) {
      props.upDateNewPostText(newPostElement.current?.value)
    }
  }

  return (
    <div className={s.postBlock}>
      <h3>  My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div >
  )
}

export default MyPosts;