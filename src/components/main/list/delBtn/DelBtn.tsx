import Link from "next/link";
import { IoTrashBin } from "react-icons/io5";

interface delProps {
  id: string;
}
const DelBtn: React.FC<delProps> = ({ id }) => {
  return (
    <Link href={"/"} className="mx-auto">
      <IoTrashBin className="size-5 text-red-500" />
    </Link>
  );
};

export default DelBtn;
