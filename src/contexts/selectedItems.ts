import { Item } from "@/types";
import { Dispatch, SetStateAction, createContext } from "react";

export const SelectedItems = createContext<{
  selectedItems: Array<Item>;
  setSelectedItems: Dispatch<SetStateAction<Item[]>>;
}>({ selectedItems: [], setSelectedItems: () => {} });
