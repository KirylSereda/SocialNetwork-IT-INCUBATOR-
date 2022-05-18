import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div >
      <div >
        <img className={s.img} alt='profile-img' src='https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

