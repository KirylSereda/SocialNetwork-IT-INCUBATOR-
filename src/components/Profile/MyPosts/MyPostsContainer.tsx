
import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../Redux/profile-reducer';
import { AppRootStateType } from '../../Redux/redux-store';
import { ActionsType, PostType } from '../../Redux/types';
import MyPosts from './MyPosts';


type MapStateToPropsType = {
  posts: Array<PostType>,
  newPostText: string
}

type mapDispatchToPropsType = {
  addPost: () => void,
  updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextAC(text))
    }

  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;