"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function withAuth(Component) {
  return function withAuth(props) {
    const { status } = useSession();
    useEffect(() => {
      if (status === "authenticated") {
        redirect("/");
      }
    }, [status]);
    if (status === "loading") {
      return null;
    }
    return status === "unauthenticated" && <Component {...props} />;
  };
}
