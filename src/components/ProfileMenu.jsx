"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import ProfileIcon from "./ProfileIcon";
import { useTheme } from "next-themes";

export default function ProfileMenu() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
    <>
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
          <DropdownItem key={"switchMode"} onClick={() => handleThemeSwitch()}>
            <p>Switch To {theme === "dark" ? "Light" : "Dark"}</p>
          </DropdownItem>
          <DropdownItem key={"contact"} onClick={onOpen}>
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
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Contact Us
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Textarea
                    className="h-28"
                    placeholder="Enter your message"
                    variant="bordered"
                    minRows={10}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Send
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
