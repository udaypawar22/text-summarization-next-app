import NavigationBar from "@/components/NavigationBar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import UploadIcon from "@/components/UploadIcon";
import SendIcon from "@/components/SendIcon";
import { Slider } from "@nextui-org/react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <NavigationBar />
      <div className="h-[calc(100vh-80px)] grid grid-cols-2 gap-8 px-8 py-6">
        <div className="flex flex-col gap-1 items-center justify-center">
          <Textarea
            variant="bordered"
            label="Input"
            labelPlacement="outside"
            placeholder="Type here..."
            minRows={20}
          />
          <div className="flex justify-between items-center w-full">
            <Slider
              size="sm"
              step={10}
              label="Length"
              maxValue={1000}
              minValue={0}
              color="foreground"
              showOutline={true}
              aria-label="Temperature"
              defaultValue={0}
              className="w-[200px]"
            />
            <div className="flex items-center justify-center gap-5">
              <Button isIconOnly variant="ghost" color="primary">
                <UploadIcon />
              </Button>
              <Button isIconOnly variant="ghost" color="primary">
                <SendIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll bg-slate-100 dark:bg-zinc-950 shadow dark:shadow-gray-800 thin-scroll rounded-lg px-6 py-4">
          <p>Output will be displayed here</p>
        </div>
      </div>
    </>
  );
}
