import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"}/>
      <form action="#">
        <Input type={"tel"} placeholder={"Номер телефона"}/>
        <Input type={"password"} placeholder={"Пароль"}/>
        <Link to ="/main"><Button type={"button"} text={"Войти"}/></Link>
      </form>
      <Link to="#">Забыли пароль?</Link>
      <RegistrationInfo 
      // linkText={<Link to="/registration">Зарегистрироваться</Link>} 
      linkText={"Зарегистрироваться"} 
      hasAccountText={"У вас нет аккаунта?"} 
      authWithText={"Войти с помощью:"}/>
    </SCLoginPage>
  );
};
