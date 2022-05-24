import MyPosts from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostType } from '../Redux/Store';

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  addPost: () => void
  upDateNewPostText: (newPostText: string) => void
}

export const Profile = (props: PropsType) => {
  return (
    <div >
      <ProfileInfo />
      <MyPosts posts={props.posts}
        addPost={props.addPost}
        upDateNewPostText={props.upDateNewPostText}
        newPostText={props.newPostText} />
    </div >
  )
}

