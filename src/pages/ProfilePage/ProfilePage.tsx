import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import { Navbar, List, ProfileHeader, PostRepost, Post, WhatsNew, UserPosts, Bio } from "../../components/UI";
import { Header } from "../../components/UI/Header/Header";
import { useGetUserQuery } from "../../Store/api/authApi";
import { SCProfilePage } from "./ProfilePage.styled";

export const ProfilePage = () => {
const {data, isLoading, isError, error, isSuccess} = useGetUserQuery("1")

//* data - данные которые отправляет бэк
//* isError - статус есть ошибка или нет, возвращает boolean значение
//* isLoading - Статус загрузки или нет возращает boolean значение (true / false)
//* error - объект ошибки, если есть возращает ошибку
//* isSuccess - статус успешной загрузки или нет возращает boolean значение (true / false)

console.log ("user data:", data)

  return (
    <SCProfilePage>
      <Header/>
      <aside className="LeftSide">
        <Navbar/>
        <List listType="subscribes"/>
      </aside>
      <ProfileHeader/>
      <main className="Main">
        <WhatsNew/>
        <UserPosts/>
        <Post/>
        <PostRepost/>
      </main>
      <aside className="RightSide">
        <Bio/>
        <FriendsBlock/>
        <List listType={"music"} />
      </aside>
    </SCProfilePage>
  );
};
