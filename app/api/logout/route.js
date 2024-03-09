import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({ result: "Logout successful" });
    response.cookies.set("token", "", {
      httpOnly: true,
      secure: true,
    });
    return response;
  } catch (err) {
    return NextResponse.json(
      {
        result: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
