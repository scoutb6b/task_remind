import { connectDb } from "@/lib/database";
import { RemindDoc, RemindModel } from "@/models/remind";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const today = dayjs().format("YYYY-MM-DD");

    const ExpiredRemindTasks: RemindDoc[] = await RemindModel.find({
      endDate: { $lt: today },
    }).sort({
      endDate: 1,
    });

    return NextResponse.json(
      { message: "取得成功", tasks: ExpiredRemindTasks },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
