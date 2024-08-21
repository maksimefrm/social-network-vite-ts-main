import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Input } from "./UI"
import { useNavigate } from "react-router-dom"
import { useLoginUserMutation } from "../Store/api/authApi"

interface ILoginForm {
    email: string,
    password: string,
}

const schema = yup
  .object({
    email: yup.string().email("Введите почту в правильном формате").required("Обязательное поле"),
    password: yup.string().required("Обязательное поле").min(8, "Минимум 8 символов").max(16, "Максимально 16 символов"),
  })
  .required()

const LoginForm = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        email: "",
        password: "",
      }
    });

    const navigate = useNavigate()
    const [loginUser, { data }] = useLoginUserMutation()

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
      loginUser({ email: data.email, password: data.password})
        // navigate("/main")
    }
    console.log("User data:", data)
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button text={"Войти"} type={"submit"}/>
      </form>
    )
  }

export default LoginForm