import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Input } from "../UI"
import { useNavigate } from "react-router-dom"
import { useRegisterUserMutation } from "../../Store/api/authApi"
import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react"

interface IRegisterForm {
    name: string,
    userCity: string,
    email: string,
    phoneNumber: string,
    password: string
}

const schema = yup
  .object({
    name: yup.string().required("Обязательное поле"),
    userCity: yup.string().required("Обязательное поле"),
    phoneNumber: yup.string().required("Обязательное поле"),
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
        userCity: "",
        phoneNumber: ""
      }
    });
  

  const navigate = useNavigate()
  const [registerUser, { data: registrationData }] = useRegisterUserMutation()
  const { isSignedIn } = useUser()
  const userId = localStorage.getItem('userId')

  useEffect(()=>{
    if (registrationData?.message) {
      localStorage.removeItem("userId")
      alert(registrationData.message)
    } if (registrationData?.user_id) {
      localStorage.setItem("userId", JSON.stringify(registrationData?.user_id))
      navigate("/main")
    }

    if (isSignedIn || userId ) {
      navigate("/main")
    }

  }, [isSignedIn, registrationData, userId])

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    registerUser ({ 
      name: data.name, 
      email: data.email, 
      user_city: data.userCity, 
      phone_number: data.phoneNumber, 
      password: data.password 
    })
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
    {/* <Controller
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
    /> */}
    <Controller
    control={control}
    name="userCity"
    render={({ field }) => (
        <Input 
        type={"text"} 
        placeholder={"Ваш город"}
        {...field} 
        isError={errors.userCity ? true : false}
        errorMessage={errors.userCity?.message}/>
    )}
    />
    <Controller
    control={control}
    name="phoneNumber"
    render={({ field }) => (
        <Input 
        type={"text"} 
        placeholder={"Ваш номер"}
        {...field} 
        isError={errors.phoneNumber ? true : false}
        errorMessage={errors.phoneNumber?.message}/>
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