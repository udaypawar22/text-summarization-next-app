"use client";

import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Image from "next/image";
import loginImg from "../../images/login_image.png";
import DividerLine from "@/components/DividerLine";
import GoogleIcon from "@/components/GoogleIcon";
import { signIn } from "next-auth/react";
import GithubIcon from "@/components/GithubIcon";
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

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    if (!email) {
      setError("email is invalid");
      return;
    }

    const res = await signIn("email", {
      email,
    });

    if (res?.error) {
      setError("Invalid email");
      return;
    }
    setError("");

    router.replace("/");
  }

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 relative p-24">
        <Image fill alt="login_image" src={loginImg} />
      </div>
      <div className="flex-1">
        <div className="w-full h-full px-40 flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full">
            <h1 className="text-2xl text-center mb-6 font-medium">Login</h1>

            <Input
              className="mb-3"
              size="sm"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            {error && (
              <p className="text-red-600 text-[12px] mb-3 px-2">{error}</p>
            )}
            <Button
              type="submit"
              radius="sm"
              className="mb-2"
              color="primary"
              fullWidth
            >
              Login with email
            </Button>
          </form>

          <div className="flex gap-2 items-center justify-center mb-4">
            <DividerLine />
            <p className="text-gray-500">Or</p>
            <DividerLine />
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
            >
              <span className="pl-2">Log in with Google</span>
            </Button>
            <Button
              radius="sm"
              variant="bordered"
              color="primary"
              content
              fullWidth
              startContent={<GithubIcon />}
              onClick={() => handleSignIn("github")}
            >
              <span className="pl-2">Log in with Github</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Login);
