import { customerSchema } from "@/lib/customerModel";
import { connectiondb } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { email } = params;
  await mongoose.connect(connectiondb, { useNewUrlParser: true });
  const customer = await customerSchema.findOne({ email });
  return NextResponse.json({ exists: !!customer, customer });
}

export async function PATCH(request, { params }) {
  const { email } = params;
  const data = await request.json();
  await mongoose.connect(connectiondb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const updatedCustomer = await customerSchema.findOneAndUpdate(
    { email },
    { $set: data },
    { new: true }
  );

  if (!updatedCustomer) {
    return NextResponse.json({ error: "Customer not found" }, { status: 404 });
  }
  return NextResponse.json({
    message: "Customer updated successfully",
    customer: updatedCustomer,
  });
}
