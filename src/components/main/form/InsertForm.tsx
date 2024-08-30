"use client";

import { insertTask, State } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

export const InsertForm = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(insertTask, initialState);
  const HandleSubmit = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="mt-8 px-20 py-2 block mx-auto rounded-lg border-2 bg-green-800 text-white  
        hover:bg-slate-50 hover:border-green-800 hover:border-2 hover:text-green-800  disabled:bg-gray-400 transition-all duration-500"
        disabled={pending}
      >
        追加する
      </button>
    );
  };

  return (
    <div>
      <form action={formAction} className="">
        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="" className="font-semibold">
            タスク名
          </label>
          <input
            type="text"
            name="company"
            id=""
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

        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="" className="font-semibold">
            開始日(例:2024-10-01)
          </label>
          <input
            type="text"
            name="start"
            id=""
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
        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto">
          <label htmlFor="" className="font-semibold">
            終了日(例:2025-04-10)
          </label>
          <input
            type="text"
            name="end"
            id=""
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
        <div className="flex flex-col mt-5 mb-10 font-medium text-lg w-3/4 mx-auto">
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
      </form>
    </div>
  );
};

export default InsertForm;
