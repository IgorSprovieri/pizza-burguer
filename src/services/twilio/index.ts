import { Twilio } from "twilio";

const accountSid = process.env.NEXT_PUBLIC_TWILIO_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_TOKEN;

const client: Twilio = require("twilio")(accountSid, authToken);

export const sendMessage = (to: string, message: string) => {
  return client.messages.create({
    body: message,
    from: `whatsapp:${process.env.NEXT_PUBLIC_TWILIO_NUMBER}`,
    to: `whatsapp:${to}`,
  });
};
