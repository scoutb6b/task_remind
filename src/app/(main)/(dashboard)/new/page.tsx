import InsertForm from "@/components/main/form/InsertForm";
import { NextPage } from "next";

const NewPage: NextPage = () => {
  return (
    <div className="bg-slate-300 w-full">
      <div className="md:w-[65%] xl:w-[45%] mt-10 mx-auto  p-6 bg-slate-300 rounded-xl ">
        <h1 className="text-3xl font-bold text-center">新規追加</h1>
        <div className="mt-6">
          <InsertForm />
        </div>
      </div>
    </div>
  );
};

export default NewPage;
