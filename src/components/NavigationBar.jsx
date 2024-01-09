"use client";

import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import ProfileIcon from "./ProfileIcon";

export default function NavigationBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  function handleThemeSwitch() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  const image = session?.user?.image;

  return (
    <nav className="py-2 flex items-center justify-center">
      <div className="flex gap-10 p-3 justify-center items-center w-fit rounded-2xl shadow dark:shadow-slate-900">
        <Link href="#" color="foreground">
          History
        </Link>
        <Link href="/" color="foreground">
          Home
        </Link>
        <Dropdown>
          <DropdownTrigger>
            <Button
              color="foreground"
              disableRipple
              variant="light"
              className="text-md"
              startContent={<ProfileIcon image={image} />}
            >
              <p>Profile</p>
            </Button>
          </DropdownTrigger>

          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key={"email"}>
              <p>Logged in as</p>
              <p>{session?.user?.email}</p>
            </DropdownItem>
            <DropdownItem key={"editProfile"} href="/editprofile">
              <p>Edit Profile</p>
            </DropdownItem>
            <DropdownItem
              key={"switchMode"}
              onClick={() => handleThemeSwitch()}
            >
              <p>Switch To {theme === "dark" ? "Light" : "Dark"}</p>
            </DropdownItem>
            <DropdownItem key={"contact"}>
              <p>Contact Us</p>
            </DropdownItem>
            <DropdownItem
              key={"logout"}
              onClick={() => {
                signOut({ callbackUrl: "/login" });
              }}
            >
              <p>Log Out</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
