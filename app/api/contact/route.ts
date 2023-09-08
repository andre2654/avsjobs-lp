import { NextResponse } from 'next/server'
import { sendMail } from "../../../service/mailService";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const res = await sendMail(
    `Novo contato de ${name}`,
    process.env.NODEMAILER_EMAIL_TO,
    `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
  );

  return NextResponse.json({ message: "Email Sent" })
}