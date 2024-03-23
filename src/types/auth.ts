export interface LoginBodyType {
  email: string;
  password: string;
}
export interface LoginResType {
  data: {
    token: string;
    account: {
      id: number;
      name: string;
      email: string;
    };
  };
}

export interface RegisterBodyType {
  name: string;
  email: string;
  password: string;
}
export interface RegisterResType {
  data: {
    token: string;
    account: {
      id: number;
      name: string;
      email: string;
    };
  };
}
