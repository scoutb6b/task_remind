import { connectDb } from "@/lib/database";
import { Remind, RemindDoc, RemindModel } from "@/models/remind";
import { NextRequest, NextResponse } from "next/server";

// READ
export const GET = async () => {
  try {
    await connectDb();
    const allRemindTasks: RemindDoc[] = await RemindModel.find();
    console.log(allRemindTasks);

    return NextResponse.json(
      { message: "取得成功", tasks: allRemindTasks },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
