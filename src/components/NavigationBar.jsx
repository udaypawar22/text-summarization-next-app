import React from "react";
import { Link } from "@nextui-org/react";
import ProfileMenu from "./ProfileMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

export default async function NavigationBar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="py-2 flex items-center justify-center">
      <div className="flex gap-10 p-3 justify-center items-center w-fit rounded-2xl shadow dark:shadow-slate-900">
        <Link href="/history" color="foreground">
          History
        </Link>
        <Link href="/" color="foreground">
          Home
        </Link>
        <ProfileMenu session={session} />
      </div>
    </nav>
  );
}
