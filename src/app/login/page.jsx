"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import loginImg from "../../images/login_image.png";
import GoogleIcon from "@/components/GoogleIcon";
import { signIn } from "next-auth/react";
import withAuth from "@/utils/withAuth";
import { useRouter } from "next/navigation";

function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSignIn(providerName) {
    const res = await signIn(providerName);

    if (res?.error) {
      setError("Email already registered");
      return;
    }
    setError("");
    router.replace("/");
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row flex-1">
      <div className="flex-1 relative p-24">
        <Image fill alt="login_image" src={loginImg} />
      </div>
      <div className="flex-1">
        <div className="w-full h-full px-10 lg:px-40 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-3xl font-semibold">Get started</h1>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <Button
              radius="sm"
              variant="bordered"
              color="primary"
              content
              fullWidth
              startContent={<GoogleIcon />}
              onClick={() => handleSignIn("google")}
              className="w-[200px] lg:w-full"
            >
              <span className="pl-2">Log in with Google</span>
            </Button>
            <p className="text-red-500 text-sm h-4">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Login);
