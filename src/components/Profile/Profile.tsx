import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../Redux/types';
import { Redirect } from 'react-router-dom';


type PropsType = {
  profile: ProfileType
  auth: boolean
}
export const Profile = (props: PropsType) => {
  if (!props.auth) {
    return <Redirect to={'/login'} />
  }
  return (
    <div >
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer
      />
    </div >
  )
}

