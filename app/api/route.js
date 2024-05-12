import connectMongoDB from "@/app/libs/mongoDB";
import Jogadors from "@/app/models/jogadors";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const jogadors = await Jogadors.find();
  return NextResponse.json({ jogadors }, { status: 200 });
}

export async function POST(request) {
  const { nome, nacionalidade, rankingatual } = await request.json();
  await connectMongoDB();
  await Jogadors.create({ nome, nacionalidade, rankingatual });
  return NextResponse.json(
    { message: "Jogador created successfully" },
    { status: 200 }
  );
}
