import { ListData } from "../List/data"
import { Heading } from "../UI"
import FriendsItem from "./FriendsItem"

const { friends } = ListData

const FriendsBlock = () => {
    return (
        <div className="FriendsBlock">
        <div className="Friends__title">
          <Heading variant={"h2"} text={"Друзья"} />
          <span className="count">
            {friends.length}
          </span>
        </div>
        <div className="Friends__wrapper">
        {friends && friends.map((userElem) => (
          <FriendsItem 
          imgUrl={userElem.imgUrl} 
          alt={userElem.alt} 
          text={userElem.text}/>
        ))}
        </div>
      </div>
    )
}

export default FriendsBlock