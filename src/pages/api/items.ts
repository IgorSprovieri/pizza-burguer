import type { NextApiRequest, NextApiResponse } from "next";
import items from "@/db/items.json";
import sections from "@/db/sections.json";
import { Item } from "@/types";

type Data = Array<Item>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = items.map((item) => {
    return {
      ...item,
      section: sections.find(({ id }) => {
        return id === item.sectionId;
      }),
    };
  });

  return res.status(200).json(result);
}
