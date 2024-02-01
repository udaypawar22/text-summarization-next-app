import HistoryWidget from "@/components/HistoryWidget";
import NavigationBar from "@/components/NavigationBar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function History() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <NavigationBar />
      <HistoryWidget />
    </>
  );
}
