import axios from "axios";
import { User } from "../Types";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async (id?: number): Promise<User[] | User> => {
  try {
    const result = await axios.get<User[] | User>(BASE_URL);

    return result.data;
  } catch (error) {
    throw new Error("Failed fetch users");
  }
};

export default { fetchUsers };
