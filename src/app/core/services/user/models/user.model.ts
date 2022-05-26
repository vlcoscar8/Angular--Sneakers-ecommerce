export interface IUser {
  username: string;
  password?: string;
  email: string;
  img?: string;
  userBuys?: IUserBuys[];
  name?: string;
  surname?: string;
  age?: number;
}

export interface IUserResponseApi {
  status: number;
  message: string;
  data: IUser;
}

export interface IUserLogin {
  userId: string;
  token: string;
}

export interface IUserResponseLogin {
  status: number;
  message: string;
  data: IUserLogin;
}

export interface IUserBuys {
  product: string[];
  productId: number;
  size: string;
  units: number;
}
