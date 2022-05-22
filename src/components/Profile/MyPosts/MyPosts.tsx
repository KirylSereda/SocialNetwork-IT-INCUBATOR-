
import React, { RefObject } from 'react';
import { PostsType } from '../../Redux/Store';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
  posts: PostsType
  addPost: (postMessage: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

  let postsElements = props.posts.map(p => <Post post={p.message} likesCount={p.likesCount} />)
  const newPostElement: any = React.createRef()

  const addPost = () => {
    let text: any = newPostElement.current.value
    props.addPost(text)
  }
  return (
    <div className={s.postBlock}>
      <h3>  My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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