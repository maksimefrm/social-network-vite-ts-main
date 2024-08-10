import { Navbar, ListLeftSide, WhatsNew, History, Post, PostRepost, ListRightSide, MusicBlock } from "../../components/UI";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <aside className="LeftSide">
        <Navbar/>
        <ListLeftSide/>
      </aside>
      <main className="Main">
        <WhatsNew/>
        <History/>
        <Post/>
        <PostRepost/>
      </main>
      <aside className="RightSide">
        <ListRightSide/>
        <MusicBlock/>
      </aside>
    </div>
  );
};
