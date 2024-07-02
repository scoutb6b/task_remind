"use server";

import { connectDb } from "@/lib/database";
import { Remind, RemindModel } from "@/models/remind";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const insertTask = async (state: FormState, formData: FormData) => {
  const newTask: Remind = {
    company: formData.get("company") as string,
    startDate: formData.get("start") as string,
    endDate: formData.get("end") as string,
    content: formData.get("content") as string,
  };
  try {
    await connectDb();
    await RemindModel.create(newTask);
  } catch (error) {
    state.error = "作成に失敗しました";
    return state;
  }
  redirect("/");
};
