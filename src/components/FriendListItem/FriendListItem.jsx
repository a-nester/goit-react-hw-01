export const FriendListItem = (friend) => {
    console.log(friend);
    return (
        <div>
            <img src={friend.friend.avatar} alt="Avatar" width="48" />
            <p>{ friend.name }</p>
            <p>{ friend.isOnline }</p>
        </div>
    );
}

export default FriendListItem;

// {avatar, name='Friend name', isOnline}