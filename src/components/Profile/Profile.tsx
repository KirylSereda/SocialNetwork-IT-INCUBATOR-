import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img alt='profile-img' src='https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts message='Hi, how are you?' />
    </div>
  )
}

