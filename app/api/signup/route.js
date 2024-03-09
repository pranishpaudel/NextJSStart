import connectDB from "../../../component/dbConfig/dbConfig";
import { User } from "../../../component/dbModels/db.models";
import { NextResponse, NextRequest } from "next/server";
await connectDB();
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { email, username, password } = reqBody;
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { result: "User already exists. Please login." },
        { status: 400 }
      );
    }

    const newUser = await new User({ email, username, password });
    const savedUser = await newUser.save();
    // console.log(savedUser);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      {
        result: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
