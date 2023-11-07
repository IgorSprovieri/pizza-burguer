import { orderRepository } from "@/db/repositories";
import { sendMessage } from "@/services/wpp";
import { Order } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import cors from "cors";

const startOrder = async (username: string): Promise<void> => {
  await sendMessage(username, `Olá, aqui é o pizza burguer`);
  await sendMessage(username, `Escolha os items do seu pedido no link abaixo:`);
  await sendMessage(
    username,
    `${process.env.NEXT_PUBLIC_BASE_URL}/${username}`
  );

  await orderRepository.createOrder(username);
};

const payMethodResponse = async (username: string): Promise<void> => {
  await sendMessage(username, `E qual é o endereço de entrega?`);
  await orderRepository.updateStage(username, "adress");
};

const adressResponse = async (username: string): Promise<void> => {
  await sendMessage(
    username,
    `Seu pedido está sendo preparado e chegará em torno de 30 minutos`
  );
  await sendMessage(
    username,
    `Estou finalizando nossa conversa, qualquer dúvida pode nos ligar`
  );

  await orderRepository.updateStage(username, "finish");
};

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    type Body = { message: string; username: string };
    const { message, username }: Body = req.body;

    const rows = await orderRepository.getOrder(username);

    const found: Order = rows[0];

    if (!found) {
      if (message === "Olá, desejo fazer um pedido") {
        await startOrder(username);
      }
      return res.status(200).json({ success: true });
    }

    if (found.stage === "payMethod") {
      await payMethodResponse(username);
      return res.status(200).json({ success: true });
    }

    if (found.stage === "adress") {
      await adressResponse(username);
      return res.status(200).json({ success: true });
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
};

const corsMiddleware = cors({
  origin: process.env.NEXT_PUBLIC_WPP_API_URL,
  methods: ["POST"],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  corsMiddleware(req, res, async () => {
    await post(req, res);
  });
}
