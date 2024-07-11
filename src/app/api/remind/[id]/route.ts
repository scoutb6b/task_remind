import { connectDb } from "@/lib/database";
import { RemindModel } from "@/models/remind";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDb();
    const editRemindTask = await RemindModel.findById(params.id);
    if (!editRemindTask) {
      return NextResponse.json({ message: "存在しません" }, { status: 404 });
    }
    return NextResponse.json({ message: "取得成功", editRemindTask });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "取得失敗" }, { status: 500 });
  }
};
export const dynamic = "force-dynamic";
