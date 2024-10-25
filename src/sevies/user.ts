import axiosIinstance from "../config/axiot";
import { UserLogin, UserRegister } from "../interface/user";

export const userRegister = async (register: UserRegister) => {
  try {
    const { data } = await axiosIinstance.post("/api/register", register);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const userLogin = async (login: UserLogin) => {
  try {
    const { data } = await axiosIinstance.post(`/api/login`, login);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
