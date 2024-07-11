import React from "react";
import Nav from "./nav/Nav";
import Link from "next/link";

const Sidemenu = () => {
  return (
    <div className="h-screen w-1/6 bg-sky-50">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold text-center mt-4">Server Remind</h1>
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
