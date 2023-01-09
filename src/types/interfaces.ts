export interface IPost {
  id: number;
  photo: string;
  nickname: string;
  comment: string;
}

export interface ISign {
  handleSwitch: () => void;
  style?: string;
}

export interface IUser {
  id?: string;
  email?: string;
  name?: string;
  lastName?: string;
  password?: string;
  photo?: string;
  role?: string;
  blocked?: boolean;
}
