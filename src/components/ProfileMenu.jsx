"use client";

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
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
import { signOut } from "next-auth/react";
import ProfileIcon from "./ProfileIcon";
import { useTheme } from "next-themes";

const publicKey = "-n9tMjy7vThCw6UyM";

export default function ProfileMenu({ session }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [message, setMessage] = useState("");
  const [name, setName] = useState(session?.user?.name);
  const [email, setEmail] = useState(session?.user?.email);
  const { isOpen, onOpen, onOpenChange, onClose: closeModal } = useDisclosure();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleThemeSwitch() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  function sendEmail() {
    if (message && email && name) {
      emailjs
        .send(
          "service_9g3fbaa",
          "template_km2i58e",
          {
            from_name: name,
            email_id: email,
            message: message,
          },
          publicKey
        )
        .then(
          (result) => {
            alert("Message sent successfully");
            setName(session?.user?.name);
            setEmail(session?.user?.email);
            setMessage("");
            closeModal();
          },
          (err) => {
            console.log(err);
            alert("There was a problem in sending the message");
            closeModal();
          }
        );
    }
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
            <ModalHeader className="flex flex-col gap-1">
              Contact Us
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Name"
                placeholder="Enter your name"
                variant="bordered"
                value={name}
                onChange={(ev) => {
                  setName(ev.target.value);
                }}
              />
              <Input
                autoFocus
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                }}
              />
              <Textarea
                className="h-28"
                placeholder="Enter your message"
                variant="bordered"
                minRows={10}
                value={message}
                onChange={(ev) => {
                  setMessage(ev.target.value);
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={closeModal}>
                Close
              </Button>
              <Button color="primary" onPress={sendEmail}>
                Send
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
