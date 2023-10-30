const { Client } = require("whatsapp-web.js");
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  qr: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new Client();

  client.on("qr", (qr: string) => {
    res.status(200).json({ qr: qr });
  });

  client.on("ready", () => {
    console.log("Client is ready!");
  });

  client.on("message", (msg: any) => {
    if (msg.body == "!ping") {
      msg.reply("pong");
    }
  });

  client.initialize();
}
