import RegisterForm from "../../components/RegisterForm";
import { Heading, RegistrationInfo } from "../../components/UI";
import { SCRegistrationPage } from "./RegistrartionPage.styled";

export const RegistrationPage = () => {
    return(
        <SCRegistrationPage>
            <Heading variant={"h1"} text={"Регистрация"}/>
            <RegisterForm/>
            <RegistrationInfo 
                linkText={"Войти"} 
                hasAccountText={"У вас есть аккаунт?"} 
                authWithText={"Зарегистрироваться с помощью:"}
                navigatePath="/"/>
        </SCRegistrationPage>
    )
}