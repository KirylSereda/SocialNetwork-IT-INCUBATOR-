
import React, { ChangeEvent } from 'react';
import { addPostAC, updateNewPostTextAC } from '../../Redux/profile-reducer';
import { ActionsType, PostType } from '../../Redux/types';

import s from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
  updateNewPostText: (text: string) => void
  addPost: () => void
  posts: Array<PostType>
  newPostText: string
}

export const MyPosts: React.FC<PropsType> = (props) => {

  let postsElements = props.posts.map(p => <Post post={p.message} likesCount={p.likesCount} />)

  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
  }

  return (
    <div className={s.postBlock}>
      <h3>  My posts</h3>
      <div>
        <div>
          <textarea onChange={(e) => onPostChange(e)} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div >
  )
}

export default MyPosts;