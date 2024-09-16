


interface FriendsItemProps {
    text: string
}

const FriendsItem = ({text}: FriendsItemProps) => {
    return (
        <div className="friend">
            <img src="./img/music/album-5.png" alt="Friend" />
            <span className="friend__name">{text}</span>
        </div>
    )
}

export default FriendsItem