import { message } from "antd";
import axios from "axios";
import { User } from "../models/user";

export const getUsers: () => Promise<Array<User>> = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (+response.status === 200) {
      return response.data as Array<User>;
    }

    message.error("Something went wrong, Please try again.");
    return [];
  } catch (err) {
    message.error("Something went wrong, Please try again.");
    return [];
  }
};
