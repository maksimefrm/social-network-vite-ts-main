import { Navbar, List, WhatsNew, History, Post, PostRepost } from "../../components/UI";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="MainPage">
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
    </div>
  );
};
