import css from "./Profile.module.css";

export const Profile = ({
  name = "Petra Marica",
  tag = "pmarica",
  location = "Salvador, Brasil",
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) => {
  return (
    <div className={css.container}>
      <div>
        <img src={image} className={css.image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.titleStats}>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.titleStats}>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.titleStats}>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
