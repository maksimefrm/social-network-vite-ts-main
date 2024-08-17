import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";
import LoginForm from "../../components/LoginForm";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"}/>
      <LoginForm/>
      <Link to="/registration">Забыли пароль?</Link>
      <RegistrationInfo 
      // linkText={<Link to="/registration">Зарегистрироваться</Link>} 
      linkText={"Зарегистрироваться"} 
      hasAccountText={"У вас нет аккаунта?"} 
      authWithText={"Войти с помощью:"}/>
    </SCLoginPage>
  );
};
