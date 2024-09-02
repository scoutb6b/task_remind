"use client";

import { FormState, State, updateTask } from "@/actions/task";
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
  const initialState: State = { message: null, errors: {} };

  const [state, formAction] = useFormState(updateTaskId, initialState);
  const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="mt-8 px-20 py-2 block border-2 mx-auto rounded-lg bg-pink-800 text-white 
        hover:bg-slate-50 hover:border-2 hover:border-pink-800 hover:text-pink-800 disabled:bg-gray-400 transition-all duration-500"
      >
        保存する
      </button>
    );
  };

  return (
    <div>
      <form action={formAction}>
        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto ">
          <label htmlFor="">タスク名</label>
          <input
            type="text"
            name="company"
            id=""
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-2 py-1 px-2 rounded-lg "
          />
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.company?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto ">
          <label htmlFor="">開始日 (例:2024-10-01)</label>
          <input
            type="text"
            name="start"
            id=""
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-2 py-1 px-2 rounded-lg "
          />
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.startDate?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto ">
          <label htmlFor="">終了日 (例:2025-04-10)</label>
          <input
            type="text"
            name="end"
            id=""
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-2 py-1 px-2 rounded-lg "
          />
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.endDate?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto ">
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
      </form>
    </div>
  );
};

export default EditForm;
