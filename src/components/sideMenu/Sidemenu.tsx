import React from "react";
import Nav from "./nav/Nav";
import Link from "next/link";

const Sidemenu = () => {
  return (
    <div className="h-screen w-1/6 bg-gray-100 p-1">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold text-center py-10  bg-sky-700 text-white rounded-md">
          サーバー機保守
        </h1>
      </Link>
      <Nav />
      <div className="flex absolute bottom-0 mb-4 mx-4">
        <p>ダークモードON / OFF</p>
        <div></div>
      </div>
    </div>
  );
};

export default Sidemenu;
