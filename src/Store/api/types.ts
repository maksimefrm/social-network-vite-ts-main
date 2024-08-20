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

export interface IRegisterUser {
  name: string;
  email: string;
  phone_number: number;
  password: string;
  user_city: string;
}
