import { customerSchema } from "@/lib/customerModel";
import { connectiondb } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectiondb, { useNewUrlParser: true });
  const data = await customerSchema.find();
  console.log(data);
  return NextResponse.json({ route: data });
}

export async function POST(request) {
  const signUpData = await request.json();
  await mongoose.connect(connectiondb, { useNewUrlParser: true });
  const postData = new customerSchema(signUpData);
  const result = await postData.save();
  return NextResponse.json({ result, success: true });
}
