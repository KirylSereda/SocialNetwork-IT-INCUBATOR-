import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostsType } from '../Redux/Store';

type PropsType = {
  posts: PostsType
}

export const Profile = (props: PropsType) => {
  return (
    <div >
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div >
  )
}

