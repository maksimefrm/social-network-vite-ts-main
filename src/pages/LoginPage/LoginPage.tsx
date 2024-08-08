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
        <Button text={"Войти"}/>
      </form>
      <Link to="#">Забыли пароль?</Link>
      {/* <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          <a className="reg__link google-link" href="#">
            <img src="./img/icons/google.svg" alt="Google" />
          </a>
          <a className="reg__link google-plus-link" href="#">
            <img src="./img/icons/google-plus.svg" alt="Google Plus" />
          </a>
          <a className="reg__link yandex-link" href="#">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </a>
          <a className="reg__link mail-ru-link" href="#">
            <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
          </a>
        </div>
      </div> */}
      <RegistrationInfo 
      linkText={"Зарегистрироваться"} 
      hasAccountText={"У вас нет аккаунта?"} 
      authWithText={"Войти с помощью:"}/>
    </div>
  );
};
