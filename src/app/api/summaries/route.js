import Summary from "@/models/Summary";
import { authOptions } from "@/utils/auth";
import { mongooseConnect } from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await mongooseConnect();

    const summaryDocs = await Summary.find({
      userid: session?.user?.id,
    });

    return new NextResponse(JSON.stringify(summaryDocs), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
