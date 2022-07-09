import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ActionsType, PostType, } from '../Redux/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

export const Profile = (props: PropsType) => {
  return (
    <div >
      <ProfileInfo />
      <MyPostsContainer
        posts={props.posts}
        dispatch={props.dispatch}
        newPostText={props.newPostText} />
    </div >
  )
}

