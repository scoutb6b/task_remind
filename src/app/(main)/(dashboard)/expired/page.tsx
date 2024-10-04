import List from "@/components/main/list/List";
import ListHeader from "@/components/main/list/ListHeader";
import { RemindDoc } from "@/models/remind";
import { NextPage } from "next";
import Link from "next/link";
import { MdPlaylistAdd } from "react-icons/md";

const getAll = async (): Promise<RemindDoc[]> => {
  const res = await fetch(`${process.env.API_URL}/remind/expired`, {
    cache: "no-store",
  });
  if (res.status !== 200) {
    throw new Error();
  }
  const data = await res.json();
  return data.tasks as RemindDoc[];
};

const ExpiredPage = async () => {
  const allRemind = await getAll();

  return (
    <div className="w-full">
      <div className="flex justify-around items-center mt-6 ">
        <div className="text-2xl font-semibold">期限切れ一覧</div>
        <Link
          href={"/new"}
          className="flex items-center justify-center bg-gray-800 text-white  px-6 py-3 rounded-full"
        >
          <MdPlaylistAdd className="size-6" />
          <div>新規追加</div>
        </Link>
      </div>
      <div className="mt-10 mb-20 mx-auto md:w-[95%] xl:w-[70%]">
        <ListHeader />
        {allRemind.map((item) => (
          <List key={item._id} task={item} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredPage;
