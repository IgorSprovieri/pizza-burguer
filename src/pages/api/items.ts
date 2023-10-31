import type { NextApiRequest, NextApiResponse } from "next";
import { Item } from "@/types";
import { db } from "@/db";

type Data = Array<Item> | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { rows: items } = await db.query(
      "SELECT * FROM items JOIN sections ON items.sectionid = sections.sectionid"
    );

    if (!items) {
      return res.status(404).json({ error: "Data not Found" });
    }

    return res.status(200).json(items);
  } catch (err: any) {
    return res.status(400).json({ error: "Unexpected Error" });
  }
}
