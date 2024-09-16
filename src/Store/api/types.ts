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
  status: 1 | 0;
  user_id: number;
  message: string;
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
  status: number;
  message: IPost;
}

export interface IGetAllPostsResponce {
  status: number;
  message: IPost[];
}

export interface ICreatePostsResponce {
  status: number;
  post_id: number;
}

export interface ICreatePostsPayload {
  user_id: number | undefined;
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

export interface ISubscriber {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export type IGetSubscribersResponce = ISubscriber[]
