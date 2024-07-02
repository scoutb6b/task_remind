"use client";

import { FormState, insertTask } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

export const InsertForm = () => {
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(insertTask, initialState);

  const HandleSubmit = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="mt-8 px-20 py-2 block mx-auto rounded-lg bg-green-800 text-white shadow-md hover:shadow-none hover: px-2opacity-75 disabled:bg-gray-400"
        disabled={pending}
      >
        追加する
      </button>
    );
  };

  return (
    <div>
      <form action={formAction} className="">
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="" className="font-semibold">
            会社名
          </label>
          <input
            type="text"
            name="company"
            id=""
            className="mt-2 py-1 px-2 rounded-lg "
          />
        </div>
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="" className="font-semibold">
            保守開始日(例:2024-10-01)
          </label>
          <input
            type="text"
            name="start"
            id=""
            className="mt-2 py-1 px-2 rounded-lg "
          />
        </div>
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="" className="font-semibold">
            保守終了日(例:2025-04-10)
          </label>
          <input
            type="text"
            name="end"
            id=""
            className="mt-2 py-1 px-2 rounded-lg "
          />
        </div>
        <div className="flex flex-col mt-4 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="" className="font-semibold">
            備考
          </label>
          <textarea
            name="content"
            id=""
            className="mt-2 py-1 px-2 rounded-lg "
          ></textarea>
        </div>
        <HandleSubmit />
        {state.error && (
          <p className="mt-2 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default InsertForm;
