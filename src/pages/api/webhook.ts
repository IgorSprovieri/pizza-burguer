import { orderRepository } from "@/db/repositories";
import { sendMessage } from "@/services/twilio";
import { Order } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { Message } from "twilio/lib/twiml/MessagingResponse";

const startOrder = async (username: string): Promise<void> => {
  await orderRepository.createOrder(username);

  sendMessage(username, `Olá, aqui é o pizza burguer`);
  sendMessage(username, `Escolha os items do seu pedido no link abaixo:`);
  sendMessage(username, `${process.env.NEXT_PUBLIC_BASE_URL}/${username}`);
};

const payMethodResponse = async (username: string): Promise<void> => {
  await orderRepository.updateStage(username, "adress");

  sendMessage(username, `E qual é o endereço de entrega?`);
};

const adressResponse = async (username: string): Promise<void> => {
  await orderRepository.updateStage(username, "finish");

  sendMessage(
    username,
    `Seu pedido está sendo preparado e chegará em torno de 30 minutos`
  );
  sendMessage(
    username,
    `Estou finalizando nossa conversa, qualquer dúvida pode nos ligar`
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    type Body = { Body: string; sender: string };

    const { Body: message, sender: username }: Body = req.body;

    const rows = await orderRepository.getOrder(username);

    const found: Order = rows[0];

    if (!found) {
      if (message === "Olá, desejo fazer um pedido") {
        await startOrder(username);
      }
      return res.status(200);
    }

    if (found.stage === "payMethod") {
      await payMethodResponse(message);
      return res.status(200);
    }

    if (found.stage === "adress") {
      await adressResponse(message);
      return res.status(200);
    }
  }

  return res.status(402).json({ error: "Method is not valid" });
}
