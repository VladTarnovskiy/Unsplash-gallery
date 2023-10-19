import axios from "axios";

export const getUsersFromStorage = () => {
  const usersFromStorage = localStorage.getItem("users");
  let users: MyUser[];
  if (usersFromStorage) {
    users = JSON.parse(usersFromStorage);
  } else {
    users = [];
  }
  return users;
};

interface RegisterUser {
  email: string;
  password: string;
}

export interface ResponseUser {
  email: string;
  password: string;
  id: number;
}

interface Response {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

interface GetUser {
  id: number;
  token: string;
}

const baseURL = "https://alpine-safe-pewter.glitch.me";

export const registerUser = async (data: RegisterUser): Promise<Response> => {
  const response = await axios({
    method: "post",
    url: `${baseURL}/register`,
    data: data,
  });
  return response.data;
};

export const loginUser = async (data: RegisterUser): Promise<Response> => {
  const response = await axios({
    method: "post",
    url: `${baseURL}/login`,
    data: data,
  });
  return response.data;
};

export const getUser = async (data: GetUser): Promise<ResponseUser> => {
  const response = await axios({
    method: "get",
    url: `${baseURL}/users/${data.id}`,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });

  return response.data;
};
