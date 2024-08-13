
interface FriendsItemProps {
    imgUrl: string,
    alt: string,
    text: string,
}

const FriendsItem = ({imgUrl, alt, text}: FriendsItemProps) => {
    return (
        <div className="friend">
            <img src={imgUrl} alt={alt} />
            <span className="friend__name">{text}</span>
        </div>
    )
}

export default FriendsItem