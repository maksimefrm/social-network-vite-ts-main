import { Heading, RegistrationInfo } from "../../components/UI";
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";
import LoginForm from "../../components/forms/LoginForm";

<head>
   <script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"></script>
</head>

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"} />
      <LoginForm />
      <Link to="/registration">Забыли пароль?</Link>
      <RegistrationInfo
        navigatePath="/registration"
        linkText={"Зарегистрироваться"}
        hasAccountText={"У вас нет аккаунта?"}
        authWithText={"Войти с помощью:"}
      />
    </SCLoginPage>
  );
};
