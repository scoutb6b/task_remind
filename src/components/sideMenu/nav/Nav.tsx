import { FaList, FaRegCheckCircle } from "react-icons/fa";
import NavItems from "./NavItems/NavItems";
import { IoIosTimer } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";

interface navType {
  id: number;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const Nav = () => {
  const nav: navType[] = [
    {
      id: 1,
      label: "一覧",
      href: "/",
      icon: <FaList className="size-5" />,
    },
    {
      id: 2,
      label: "保守継続中",
      href: "/periodof",
      icon: <FaListCheck className="size-5" />,
    },
    {
      id: 3,
      label: "保守期限切れ",
      href: "/expired",
      icon: <IoIosTimer className="size-5" />,
    },
  ];

  return (
    <div className="pt-6">
      {nav.map((item) => (
        <NavItems
          key={item.id}
          label={item.label}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Nav;
