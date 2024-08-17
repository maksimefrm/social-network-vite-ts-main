import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Input } from "./UI"
import { useNavigate } from "react-router-dom"

interface IRegisterForm {
    name: string,
    surname: string,
    city: string,
    email: string,
    tel: string,
    password: string
}

const schema = yup
  .object({
    name: yup.string().required("Обязательное поле"),
    surname: yup.string().required("Обязательное поле"),
    city: yup.string().required("Обязательное поле"),
    tel: yup.string().required("Обязательное поле"),
    email: yup.string().email("Введите почту в правильном формате").required("Обязательное поле"),
    password: yup.string().required("Обязательное поле").min(8, "Минимум 8 символов").max(16, "Максимально 16 символов"),
  })
  .required()

  const RegisterForm = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        email: "",
        password: "",
        name: "",
        surname: "",
        city: "",
        tel: ""
      }
    });
  

  const navigate = useNavigate()
  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
      navigate("/main")
  }

return(
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
    control={control}
    name="name"
    render={({ field }) => (
        <Input 
        type={"text"} 
        placeholder={"Ваше имя"}
        {...field} 
        isError={errors.name ? true : false}
        errorMessage={errors.name?.message}/>
    )}
    />
    <Controller
    control={control}
    name="surname"
    render={({ field }) => (
        <Input 
        type={"text"} 
        placeholder={"Ваша фамилия"}
        {...field} 
        isError={errors.surname ? true : false}
        errorMessage={errors.surname?.message}/>
    )}
    />
    <Controller
    control={control}
    name="city"
    render={({ field }) => (
        <Input 
        type={"text"} 
        placeholder={"Ваш город"}
        {...field} 
        isError={errors.city ? true : false}
        errorMessage={errors.city?.message}/>
    )}
    />
    <Controller
    control={control}
    name="tel"
    render={({ field }) => (
        <Input 
        type={"text"} 
        placeholder={"Ваш номер"}
        {...field} 
        isError={errors.tel ? true : false}
        errorMessage={errors.tel?.message}/>
    )}
    />
    <Controller
    control={control}
    name="email"
    render={({ field }) => (
        <Input 
        type={"text"} 
        placeholder={"Ваша почта"}
        {...field} 
        isError={errors.email ? true : false}
        errorMessage={errors.email?.message}/>
    )}
    />
    <Controller
    control={control}
    name="password"
    render={({field}) => (
        <Input type={"password"} placeholder={"Ваш пароль"}
        {...field} 
        isError={errors.password ? true : false}
        errorMessage={errors.password?.message}/>
    )}
    />
    <Button text={"Зарегистрироваться"} type={"submit"}/>
    </form>
)

}

export default RegisterForm