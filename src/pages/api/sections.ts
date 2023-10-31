import type { NextApiRequest, NextApiResponse } from "next";
import { Section } from "@/types";
import { db } from "@/db";

type Data = Array<Section> | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { rows: sections } = await db.query("SELECT * FROM sections");

    if (!sections) {
      return res.status(404).json({ error: "Data not Found" });
    }

    return res.status(200).json(sections);
  } catch (err: any) {
    return res.status(400).json({ error: "Unexpected Error" });
  }
}
