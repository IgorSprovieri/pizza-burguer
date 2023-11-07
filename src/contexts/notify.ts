import { Dispatch, SetStateAction, createContext } from "react";

export const NotifyContext = createContext<{
  notifyText: string;
  setNotifyText: Dispatch<SetStateAction<string>>;
}>({
  notifyText: "",
  setNotifyText: () => {},
});
