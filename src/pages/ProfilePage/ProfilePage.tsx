import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import { Navbar, List, ProfileHeader, PostRepost, Post, WhatsNew, UserPosts, Bio } from "../../components/UI";
import { Header } from "../../components/UI/Header/Header";
import { SCProfilePage } from "./ProfilePage.styled";

export const ProfilePage = () => {
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
