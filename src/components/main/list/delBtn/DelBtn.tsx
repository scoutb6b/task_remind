"use client";
import { deleteTask } from "@/actions/task";
import { IoTrashBin } from "react-icons/io5";

interface delProps {
  id: string;
}

const DelBtn: React.FC<delProps> = ({ id }) => {
  const handleClick = async () => {
    const isConfirmed = window.confirm("本当に削除してもよろしいですか？");
    if (isConfirmed) {
      try {
        await deleteTask(id);
      } catch (error) {
        alert("削除に失敗しました");
      }
    }
  };

  return (
    <button onClick={handleClick} className="mx-auto">
      <IoTrashBin className="size-5 text-red-500" />
    </button>
  );
};

export default DelBtn;
