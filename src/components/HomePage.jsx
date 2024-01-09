import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return <div>logged in as {session?.user?.email}</div>;
}
