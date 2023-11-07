import { orderRepository } from "@/db/repositories";
import { sendMessage } from "@/services/twilio";
import { Item, Order } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import numeral from "numeral";
import { array, object, string } from "yup";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      type Query = Partial<{ [key: string]: string | string[] }>;
      type Body = { items: Array<Item> };

      const { items }: Body = req.body;
      const { username }: Query = req.query;

      if (!username || typeof username !== "string") {
        throw new Error("Username is invalid");
      }

      const schema = object({
        username: string().required(),
        items: array().required(),
      });

      await schema.validate({ items, username });

      const rows = await orderRepository.getOrder(username);

      const found: Order = rows[0];

      if (!found) {
        return res.status(404).json({ error: "Conversation not found" });
      }

      await orderRepository.updateItems(username, items);

      let message = "Seu pedido\n\n";

      items.forEach(({ name, price, quantity }) => {
        message =
          message +
          `${name}: ${quantity} x R$ ${numeral(price).format(
            "0.00"
          )} = R$ ${numeral((quantity || 1) * Number(price)).format("0.00")}\n`;
      });

      const total = numeral(
        items.reduce((sum, { price, quantity }) => {
          return sum + Number(price) * (quantity || 0);
        }, 0)
      ).format("0.00");

      message = message + `\n\nTotal: R$ ${total}`;

      sendMessage(username, message);
      sendMessage(username, "Qual será a forma de pagamento?");

      return res.status(200).json({});
    } catch (err: any) {
      return res.status(400).json({ error: err?.message });
    }
  }

  return res.status(402).json({ error: "Method is not valid" });
}
