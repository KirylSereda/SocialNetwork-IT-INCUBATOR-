import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../Redux/types';
import { Redirect } from 'react-router-dom';


type PropsType = {
  profile: ProfileType
  status: string
  updateStatus: () => void

}
export const Profile = (props: PropsType) => {

  return (
    <div >
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer
      />
    </div >
  )
}

