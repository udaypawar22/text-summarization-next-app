import Summary from "@/models/Summary";
import { authOptions } from "@/utils/auth";
import { mongooseConnect } from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { input, summary } = data;
    if (!input || !summary) {
      return new NextResponse("Invalid input data", { status: 400 });
    }

    await mongooseConnect();

    const summaryDoc = new Summary({
      userid: session?.user?.id,
      input: input,
      summary: summary,
    });
    await summaryDoc.save();
    return new NextResponse("Summary saved", { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
