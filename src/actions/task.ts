"use server";

import { connectDb } from "@/lib/database";
import { formScheme } from "@/lib/zod/scheme";
import { Remind, RemindModel } from "@/models/remind";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export interface FormState {
  error: string;
}
export type State = {
  errors?: {
    company?: string[];
    startDate?: string[];
    endDate?: string[];
    content?: string[];
  };
  message?: string | null;
};

export const insertTask = async (prevState: State, formData: FormData) => {
  const newTask = formScheme.safeParse({
    company: formData.get("company"),
    startDate: formData.get("start"),
    endDate: formData.get("end"),
    content: formData.get("content"),
  });
  if (!newTask.success) {
    return {
      ...prevState,
      errors: newTask.error.flatten().fieldErrors,
      message: "form error",
    };
  }
  try {
    await connectDb();
    await RemindModel.create(newTask.data);
  } catch (error) {
    return {
      ...prevState,
      message: "作成に失敗しました",
    };
  }
  redirect("/");
};

export const updateTask = async (
  id: string,
  prevState: State,
  formData: FormData
) => {
  const updateTask = formScheme.safeParse({
    company: formData.get("company"),
    startDate: formData.get("start"),
    endDate: formData.get("end"),
    content: formData.get("content"),
  });
  if (!updateTask.success) {
    return {
      ...prevState,
      errors: updateTask.error.flatten().fieldErrors,
      message: "form edit error",
    };
  }
  try {
    await connectDb();
    await RemindModel.updateOne({ _id: id }, updateTask.data);
  } catch (error) {
    return {
      ...prevState,
      message: "編集に失敗しました",
    };
  }
  redirect("/");
};

export const deleteTask = async (id: string) => {
  try {
    await connectDb();
    await RemindModel.deleteOne({ _id: id });
  } catch (error) {
    console.error("削除に失敗しました", error);
  }
  redirect("/");
};
