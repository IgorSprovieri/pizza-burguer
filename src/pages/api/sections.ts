import type { NextApiRequest, NextApiResponse } from "next";
import sections from "@/db/sections.json";
import { Section } from "@/types";

type Data = Array<Section>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json(sections);
}
