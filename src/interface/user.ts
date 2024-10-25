export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type UserLogin = Pick<User, "email" | "password">;
export type UserRegister = Pick<User, "name" | "email" | "password">;
