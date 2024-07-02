import InsertForm from "@/components/main/form/InsertForm";

const NewPage = () => {
  return (
    <div className="bg-slate-300 w-full">
      <div className="w-1/3 mt-10 mx-auto max-h-[550px] p-6 bg-slate-300 rounded-xl ">
        <h1 className="text-3xl font-bold text-center">新規追加</h1>
        <div className="mt-6">
          <InsertForm />
        </div>
      </div>
    </div>
  );
};

export default NewPage;
