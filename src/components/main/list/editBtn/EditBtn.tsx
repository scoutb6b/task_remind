import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

interface editProps {
  id: string;
}

const EditBtn: React.FC<editProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`} className="mx-auto">
      <FaRegEdit className="size-5 text-blue-500" />
    </Link>
  );
};

export default EditBtn;
