import NavigationBar from "@/components/NavigationBar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import InputForm from "@/components/InputForm";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <NavigationBar />
      <div className="min-h-[calc(100vh-80px)] grid lg:grid-cols-2 gap-8 px-8 py-6">
        <InputForm />
      </div>
    </>
  );
}
