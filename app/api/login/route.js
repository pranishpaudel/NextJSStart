import connectDB from "../../../component/dbConfig/dbConfig";
import { User } from "../../../component/dbModels/db.models";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
await connectDB();
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { result: "User does not exists." },
        { status: 400 }
      );
    }

    if (user.password != password) {
      return NextResponse.json(
        { result: "Password is incorrect." },
        { status: 400 }
      );
    }

    //crerate token
    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "2m",
    });
    // console.log(savedUser);
    const nextResponse = NextResponse.json({ success: "Login successful" });
    nextResponse.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
    });
    return nextResponse;
  } catch (err) {
    return NextResponse.json(
      {
        result: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
