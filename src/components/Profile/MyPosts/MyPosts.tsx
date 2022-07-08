
import React, { ChangeEvent } from 'react';
import { addPostAC, updateNewPostTextAC } from '../../Redux/profile-reducer';
import { ActionsType, PostType } from '../../Redux/Store';

import s from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

  let postsElements = props.posts.map(p => <Post post={p.message} likesCount={p.likesCount} />)

  const addPost = () => {
    props.dispatch(addPostAC())
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewPostTextAC(e.currentTarget.value))
  }

  return (
    <div className={s.postBlock}>
      <h3>  My posts</h3>
      <div>
        <div>
          <textarea onChange={(e) => onPostChange(e)} value={props.newPostText}></textarea>
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