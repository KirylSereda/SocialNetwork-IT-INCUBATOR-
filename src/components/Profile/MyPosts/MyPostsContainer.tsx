
import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../Redux/profile-reducer';
import { ActionsType, PostType } from '../../Redux/types';
import MyPosts from './MyPosts';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

const MyPostsContainer: React.FC<PropsType> = (props) => {

  const addPost = () => {
    props.dispatch(addPostAC())
  }

  const onPostChange = (text: string) => {
    props.dispatch(updateNewPostTextAC(text))
  }

  return <MyPosts updateNewPostTextAC={onPostChange} addPost={addPost} posts={props.posts} newPostText={props.newPostText} />

}

export default MyPostsContainer;