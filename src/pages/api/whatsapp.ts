const { Client } = require("whatsapp-web.js");
import { Item } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const client = new Client();

type Conversation = {
  username: string;
  stage: string;
  order: Array<Item>;
};

const conversations: Array<Conversation> = [];

const startOrder = (msg: any) => {
  const found = conversations.find((conversation) => {
    return conversation.username === msg.from;
  });

  if (found) {
    conversations.splice(conversations.indexOf(found), 1);
  }

  const conversation = {
    username: msg.from,
    stage: "choosing items",
    order: [],
  };

  conversations.push(conversation);

  client.sendMessage(msg.from, `Olá, aqui é o pizza burguer`);
  client.sendMessage(msg.from, `Esolha os items do seu pedido no link abaixo:`);
  client.sendMessage(msg.from, `https://portfolio.ispapps.com`);
};

type Data = {
  qr: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  client.on("qr", (qr: string) => {
    res.status(200).json({ qr: qr });
  });

  client.on("ready", () => {
    console.log("Client is ready!");
  });

  client.on("message", async (msg: any) => {
    if (msg.body == "Olá") {
      const conversation = conversations.find((conversation) => {
        return conversation.username === msg.from;
      });

      if (conversation) {
        const options = [
          {
            content: "Desejo continuar meu pedido",
            vindex: "0",
            vname: "opcao1",
          },
          {
            content: "Desejo fazer um novo pedido",
            vindex: "1",
            vname: "opcao2",
          },
        ];

        const buttons = options.map((option) => {
          return {
            content: option.content,
            vindex: option.vindex,
            vname: option.vname,
          };
        });

        client.sendMessage(msg.from, `Olá, aqui é o pizza burguer`);
        client.sendMessage(
          msg.from,
          msg.createInteractiveReply(
            "Deseja continuar seu pedido anterior?",
            buttons
          )
        );
      } else {
        startOrder(msg);
      }
    }
  });

  client.on("message_reaction", (reaction: any, msg: any) => {
    if (reaction.vname === "opcao1") {
      msg.reply("Você escolheu a opção 1.");
    } else if (reaction.vname === "opcao2") {
      startOrder(msg);
    }
  });

  client.initialize();
}
