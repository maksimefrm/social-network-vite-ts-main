import { Heading } from "../UI"
import { ListData } from "./data"
import ListItem from "./ListItem"
import MusicItem from "./MusicItem"

const {subscribes, music, closeFriends} = ListData

interface ListProps {
  listType: "subscribes" | "music" | "closeFriends",
}

const List = ({listType}: ListProps) => {
const renderList = () => {
  switch (listType) {
    case "subscribes":
      return(
        <div className="List">
        <div className="List__title">
          <Heading variant={"h2"} text={"Подписки"}/>
          <span className="count">{subscribes ? subscribes.length : ""}</span>
        </div>
        {subscribes && subscribes.map((musicItem) => (
          <ListItem 
            imgUrl={musicItem.imgUrl}
            alt={musicItem.alt}
            mainText={musicItem.mainText}
            secondaryText={musicItem.secondaryText}
            badgeNumber={musicItem.badgeNumber}/>
        ))}
      </div>
      )
    case "closeFriends":
      return(
        <div className="List">
        <div className="List__title">
          <Heading variant={"h2"} text={"Близкие друзья"}/>
          <span className="count">
            {closeFriends ? closeFriends.length : ""}
          </span>
        </div>
        {closeFriends && closeFriends.map((musicItem) => (
          <ListItem 
            // isOnline={closeFriends.isOnline}
            imgUrl={musicItem.imgUrl}
            alt={musicItem.alt}
            mainText={musicItem.mainText}
            secondaryText={musicItem.secondaryText}
            badgeNumber={musicItem.badgeNumber}/>
        ))}
      </div>
      )
    case "music":
      return(
        <div className="MusicBlock">
        <div className="MusicBlock__title">
        <Heading variant={"h2"} text={"Вы недавно слушали"}/>
          <span>
            {music ? music.length : ""}
          </span>
        </div>
        {music && music.map((musicItem) => (
          <MusicItem 
            imgUrl={musicItem.imgUrl}
            alt={musicItem.alt}
            mainText={musicItem.mainText}
            secondaryText={musicItem.secondaryText}
            plus={musicItem.plus}/>
        ))}
        </div>
      )
  }
}

return renderList()
}

export default List