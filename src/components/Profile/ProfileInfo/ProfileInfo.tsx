
import { ProfileType } from '../../Redux/types';
import s from './ProfileInfo.module.css';

type PropsType = {
  profile: ProfileType
}

export const ProfileInfo = (props: PropsType) => {

  return (
    <div >
      <div >
        <img className={s.img} alt='profile-img' src={props.profile.photos.large} />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

