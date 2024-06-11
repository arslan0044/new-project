import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    console.log(email);

    const user = await User.findOne({email})

    if (user == null) {
      return NextResponse.json({ error: "Invalid Email" }, { status: 400 });
    }
    console.log(user);

    const hashedToken = await bcryptjs.hash("", 20)
    user.forgotPasswordToken = hashedToken;
    user.forgotPasswordTokenExpiry =  Date.now();
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
