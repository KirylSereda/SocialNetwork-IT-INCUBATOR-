import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../Redux/types';


type PropsType = {
  profile: ProfileType
}
export const Profile = (props: PropsType) => {
  return (
    <div >
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer
      />
    </div >
  )
}

