import {FriendListItem} from '../FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map((el) => {
                return ( 
                    <li key={el.id}>
                        <FriendListItem friend={ el } />
                    </li>
                    )
            })}
        </ul>
    );
}

export default FriendList;