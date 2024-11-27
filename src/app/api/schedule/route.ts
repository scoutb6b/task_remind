import { connectDb } from "@/lib/database";
import { RemindModel } from "@/models/remind";
import dayjs from "dayjs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async () => {
  try {
    console.log("Endpoint hit");
    await connectDb();
    const today = dayjs();
    const lastThreeMonth = today.add(3, "month").format("YYYY-MM-DD");

    const expired = await RemindModel.find({
      endDate: { $eq: lastThreeMonth },
    });
    console.log("Expired Tasks: ", expired);
    if (expired.length === 0) {
      return NextResponse.json({ message: "送信対象なし" }, { status: 200 });
    }
    const mailer = nodemailer.createTransport({
      // host: process.env.SMTP_SERVER,
      // port: 587,
      // secure: false,
      // tls: {
      //   rejectUnauthorized: false,
      // },
      service: "gmail",
      auth: {
        user: process.env.SEND_NAME,
        pass: process.env.SEND_PASS,
      },
    });
    const sendAll = expired.map((item) => {
      const mailData = {
        from: process.env.SEND_NAME,
        to: process.env.TO_NAME,
        subject: "期限が切れるまで3ヶ月です",
        text: `${item.company} の期限が、${item.endDate} までです。終了まで3ヶ月を切りました。`,
      };
      return mailer.sendMail(mailData);
    });
    const result = await Promise.allSettled(sendAll);
    console.log("mail result", result);

    return NextResponse.json({ message: "send success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
};
