import axios from "axios";

export const sendMessage = async (username: string, message: string) => {
  console.log(username, message);
  await axios.post(`${process.env.NEXT_PUBLIC_WPP_API_URL}/send`, {
    username: username,
    message: message,
  });
};
