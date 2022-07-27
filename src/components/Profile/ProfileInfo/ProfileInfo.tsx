
import { Preolder } from '../../Common/Preolder';
import { ProfileType } from '../../Redux/types';
import s from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';

type PropsType = {
  profile: ProfileType
  status: string
  updateStatus: (title: string) => void
}

export const ProfileInfo = (props: PropsType) => {


  if (!props.profile) {
    return <Preolder />
  }
  return (
    <div >
      <img className={s.img} alt='profile-img' src={props.profile.photos.large} />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

    </div>
  )
}

