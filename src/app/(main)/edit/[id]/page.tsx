import EditForm from "@/components/main/form/EditForm";
import { RemindDoc } from "@/models/remind";
import React from "react";

interface Params {
  params: { id: string };
}

const getTask = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/remind/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);

  return data.editRemindTask as RemindDoc;
};

const Editpage = async ({ params }: Params) => {
  const id = params.id;
  const editTask = await getTask(id);

  return (
    <div className="bg-slate-300 w-full">
      <div className="w-1/3 mt-10 mx-auto max-h-[550px] p-6 bg-slate-300 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">編集</h1>
        <div className="mt-6">
          <EditForm task={editTask} />
        </div>
      </div>
    </div>
  );
};

export default Editpage;
