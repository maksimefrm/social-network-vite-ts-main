export interface IUser {
  mail: string;
  phone_number: number;
  user_id: number;
  name: string;
  reg_date: Date;
  city: string;
}
export interface IPost {
    main_text: string;
    user_id: number;
    id: number;
    reg_date: Date;
    user_fk: IUser;
    photos: [
      {
        photo_id: number;
        photo_url: string;
      }
    ];
    comments: string[];
}

export interface IGetUserResponce {
  status: number;
  message: IUser;
}

export interface ILoginUserResponce {
  status: number;
  user_id: number;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface IRegisterUserResponce extends ILoginUserResponce {}
export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

//? POSTS

export interface IGetPostByIdResponce {
  status: string;
  message: IPost
}

export interface IGetAllPostsResponce {
  status: string;
  message: IPost[]
}

export interface ICreatePostsResponce {
  status: number;
  post_id: number;
}

export interface ICreatePostsPayload {
  user_id: number;
  main_text: string;
}

export interface IUpdatePostsResponce {
  status: number;
  message: string;
}
export interface IUpdatePostsPayload {
  post_id: number;
  new_text: string;
}

export interface IDeletePostsResponce extends IUpdatePostsResponce {}