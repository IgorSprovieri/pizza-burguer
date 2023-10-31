import type { NextApiRequest, NextApiResponse } from "next";
import { Advertising } from "@/types";
import { db } from "@/db";

type Data = Array<Advertising> | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { rows: advertisings } = await db.query("SELECT * FROM advertisings");

    if (!advertisings) {
      return res.status(404).json({ error: "Data not Found" });
    }

    return res.status(200).json(advertisings);
  } catch (err: any) {
    return res.status(400).json({ error: "Unexpected Error" });
  }
}
