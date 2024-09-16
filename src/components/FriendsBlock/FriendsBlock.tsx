import { useGetSubscribersQuery } from "../../Store/api/userApi"
// import { ListData } from "../List/data"
import { Heading } from "../UI"
import FriendsItem from "./FriendsItem"


const FriendsBlock = () => {
  const { data } = useGetSubscribersQuery(null)
    return (
        <div className="FriendsBlock">
        <div className="Friends__title">
          <Heading variant={"h2"} text={"Друзья"} />
          <span className="count">
            {data?.length}
          </span>
        </div>
        <div className="Friends__wrapper">
        {data && data.map((friends) => (
          <FriendsItem 
          text={friends.name}/>
        ))}
        </div>
      </div>
    )
}

export default FriendsBlock
