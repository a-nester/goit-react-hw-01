import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((el) => {
        return (
          <li key={el.id} className={css.listItem}>
            <FriendListItem friend={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
