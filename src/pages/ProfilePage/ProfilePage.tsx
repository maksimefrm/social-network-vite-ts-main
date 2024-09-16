import { useUser } from "@clerk/clerk-react";
import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import {
  Navbar,
  List,
  ProfileHeader,
  PostRepost,
  Post,
  Bio,
  Heading,
} from "../../components/UI";
import { Header } from "../../components/UI/Header/Header";
import { SCProfilePage } from "./ProfilePage.styled";
import { useGetAllPostQuery } from "../../Store/api/postApi";
import { IPost } from "../../Store/api/types";
import { CreatePostForm } from "../../components/forms/CreatePost";

export const ProfilePage = () => {
  const { data, isLoading } = useGetAllPostQuery(null);
  const userId = localStorage.getItem("userId");

  const userIdNumber = userId ? Number(userId) : undefined;
  const posts: IPost[] = data?.message || [];

  const filterPostsByUserId = (posts: IPost[], userId: number) => {
    return posts.filter((post) => post.user_id === userId);
  };

  const filteredPosts =
    userIdNumber !== undefined ? filterPostsByUserId(posts, userIdNumber) : [];

  const { user, isSignedIn } = useUser();

  console.log("user", user);

  //* data - данные которые отправляет бэк
  //* isError - статус есть ошибка или нет, возвращает boolean значение
  //* isLoading - Статус загрузки или нет возращает boolean значение (true / false)
  //* error - объект ошибки, если есть возращает ошибку
  //* isSuccess - статус успешной загрузки или нет возращает boolean значение (true / false)

  console.log("user data:", data);

  return (
    <SCProfilePage>
      <Header />
      <aside className="LeftSide">
        <Navbar />
        <List listType="subscribes" />
      </aside>
      <ProfileHeader />
      <main className="Main">
        <CreatePostForm/>
        <Heading variant={"h2"} text={"Мои посты"} />
        <br />
        <hr />
        <br />
        {filteredPosts ? (
          filteredPosts.map((post) => (
            <Post
              name={post.user_fk.name}
              date={post.reg_date}
              postText={post.main_text}
              photos={post.photos}
              postId={post.id}
              isOwner={true}
            />
          ))
        ) : (
          <Heading variant={"h2"} text={"У вас нет постов"} />
        )}
        {/* {isLoading && <h1>Loading...</h1>}
        {data ? (
          data.message.map((post) => (
            <Post
              name={post.user_fk.name}
              date={post.reg_date}
              postText={post.main_text}
              photos={post.photos}
              postId={post.id}
            />
          ))
        ) : (
          <h1>Постов нет</h1>
        )} */}
        {/* <PostRepost /> */}
      </main>
      <aside className="RightSide">
        <Bio />
        <FriendsBlock />
        <List listType={"music"} />
      </aside>
    </SCProfilePage>
  );
};
