import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { Link } from "react-router-dom"; 

export const RegistrationPage = () => {
    return(
        <div className="LoginPage">
        <Heading variant={"h1"} text={"Регистрация"}/>
        <form action="#">
            <Input type={"text"} placeholder={"Имя"}/>
            <Input type={"text"} placeholder={"Фамилия"}/>
            <Input type={"text"} placeholder={"Город"}/>
            <Input type={"email"} placeholder={"Email"}/>
            <Input type={"tel"} placeholder={"Номер телефона"}/>
            <Input type={"password"} placeholder={"Придумайте пароль"}/>
            <Link to="/">
                <Button text={"Зарегистрироваться"}/>
            </Link>
        </form>
        <RegistrationInfo 
        linkText={"Войти"} 
        hasAccountText={"У вас есть аккаунт?"} 
        authWithText={"Зарегистрироваться с помощью:"}/>
      </div>
    )
}