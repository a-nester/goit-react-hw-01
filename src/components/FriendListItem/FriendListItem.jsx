import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ friend }) => {
  const classNames = clsx(
    css.status,
    friend.isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={css.status}>{friend.name}</p>
      <p className={classNames}>
        {friend.isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
