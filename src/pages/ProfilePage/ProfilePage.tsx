import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import { Navbar, List, ProfileHeader, PostRepost, Post, WhatsNew, UserPosts, Bio } from "../../components/UI";
import "./ProfilePage.scss";

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
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
    </div>
  );
};
