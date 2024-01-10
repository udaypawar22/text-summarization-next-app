import React from "react";
import { Link } from "@nextui-org/react";
import ProfileMenu from "./ProfileMenu";

export default function NavigationBar() {
  return (
    <nav className="py-2 flex items-center justify-center">
      <div className="flex gap-10 p-3 justify-center items-center w-fit rounded-2xl shadow dark:shadow-slate-900">
        <Link href="/history" color="foreground">
          History
        </Link>
        <Link href="/" color="foreground">
          Home
        </Link>
        <ProfileMenu />
      </div>
    </nav>
  );
}
