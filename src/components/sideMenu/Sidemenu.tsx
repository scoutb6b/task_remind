import React from "react";
import Nav from "./nav/Nav";
import Link from "next/link";
import { Murecho } from "next/font/google";

const murecho = Murecho({ subsets: ["latin"], weight: ["400", "700"] });

const Sidemenu = () => {
  return (
    <div className="h-screen w-[250px] 2xl:w-1/6 bg-gray-200 p-1">
      <Link href={"/"}>
        <h1
          className={`${murecho.className} text-2xl font-bold text-center py-10  bg-sky-700 text-white rounded-md`}
        >
          タスク
        </h1>
      </Link>
      <Nav />
    </div>
  );
};

export default Sidemenu;
