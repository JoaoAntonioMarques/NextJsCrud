import connectMongoDB from "@/app/libs/mongoDB";
import Jogadors from "@/app/models/jogadors";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const jogador = await Jogadors.findOne({ _id: id });
  return NextResponse.json({ jogador }, { status: 200 });
}

export async function POST(request, { params }) {
  const { id } = params;
  const { nome, nacionalidade, rankingatual } = await request.json();
  await connectMongoDB();
  await Jogadors.findByIdAndUpdate(id, { nome, nacionalidade, rankingatual });
  return NextResponse.json(
    { message: "Jogador atualizado com sucesso" },
    { status: 200 }
  );
}

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log("DELETE", id);
  await connectMongoDB();
  await Jogadors.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Jogador excluído com sucesso" },
    { status: 200 }
  );
}
