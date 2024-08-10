import "./LoginPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading variant={"h1"} text={"Авторизация"}/>
      <form action="#">
        <Input type={"tel"} placeholder={"Номер телефона"}/>
        <Input type={"password"} placeholder={"Пароль"}/>
        <Link to ="/main"><Button type={"button"} text={"Войти"}/></Link>
      </form>
      <Link to="#">Забыли пароль?</Link>
      <RegistrationInfo 
      linkText={<Link to="/registration">Зарегистрироваться</Link>} 
      hasAccountText={"У вас нет аккаунта?"} 
      authWithText={"Войти с помощью:"}/>
    </div>
  );
};
