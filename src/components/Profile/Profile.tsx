import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostsType } from '../Redux/Store';

type PropsType = {
  posts: PostsType
  addPost: (postMessage: string) => void
}

export const Profile = (props: PropsType) => {
  return (
    <div >
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div >
  )
}

