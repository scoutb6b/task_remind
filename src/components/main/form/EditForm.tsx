"use client";

import { FormState, updateTask } from "@/actions/task";
import { RemindDoc } from "@/models/remind";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface EditFormProps {
  task: RemindDoc;
}

export const EditForm: React.FC<EditFormProps> = ({ task }) => {
  const [company, setCompany] = useState(task.company);
  const [startDate, setStartDate] = useState(task.startDate);
  const [endDate, setEndDate] = useState(task.endDate);
  const [content, setContent] = useState(task.content);

  const updateTaskId = updateTask.bind(null, task._id);
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(updateTaskId, initialState);
  const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="mt-8 px-20 py-2 block mx-auto rounded-lg bg-pink-800 text-white shadow-md hover:shadow-none hover:opacity-75 disabled:bg-gray-400"
      >
        保存する
      </button>
    );
  };

  return (
    <div>
      <form className="" action={formAction}>
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="">会社名</label>
          <input
            type="text"
            name="company"
            id=""
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-2 py-1 px-2 rounded-lg "
          />
        </div>
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="">保守開始日</label>
          <input
            type="text"
            name="start"
            id=""
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-2 py-1 px-2 rounded-lg "
          />
        </div>
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="">保守終了日</label>
          <input
            type="text"
            name="end"
            id=""
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-2 py-1 px-2 rounded-lg "
          />
        </div>
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="">備考</label>
          <textarea
            name="content"
            id=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 py-1 px-2 rounded-lg "
          ></textarea>
        </div>
        <SubmitBtn />
        {state.error !== "" && (
          <p className="mt-2 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default EditForm;
