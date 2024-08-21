export interface IUser {
  mail: string;
  phone_number: number;
  user_id: number;
  name: string;
  reg_date: Date;
  city: string;
}

export interface IGetUserResponce {
  status: number;
  message: IUser;
}

// export interface IRegisterUser {
//   name: string;
//   email: string;
//   phone_number: number;
//   password: string;
//   user_city: string;
// }

export interface ILoginUserResponce {
  status: number;
  user_id: number;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface IRegisterUserResponce extends ILoginUserResponce {

}
export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}
