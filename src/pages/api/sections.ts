import type { NextApiRequest, NextApiResponse } from "next";
import sections from "@/db/sections.json";

type Data = Array<{ id: number; title: string; iconUrl: string }>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json(sections);
}
