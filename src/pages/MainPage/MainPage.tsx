import { Navbar, List, WhatsNew, History, Post, PostRepost } from "../../components/UI";
import { Header } from "../../components/UI/Header/Header";
import { SCMainPage } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <SCMainPage>
      <Header/>
      <aside className="LeftSide">
        <Navbar/>
        <List listType="subscribes"/>
      </aside>
      <main className="Main">
        <WhatsNew/>
        <History/>
        <Post/>
        <PostRepost/>
      </main>
      <aside className="RightSide">
        <List listType="closeFriends"/>
        <List listType={"music"}/>  
      </aside>
    </SCMainPage>
  );
};
