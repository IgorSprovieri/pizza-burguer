import type { NextApiRequest, NextApiResponse } from "next";
import items from "@/db/items.json";
import { Item } from "@/types";

type Data = Array<Item>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json(items);
}
