import { NextResponse } from "next/server";

export async function POST(req, res) {
  let { name, age, email } = await req.json();
  if (!name || !age || !email) {
    return NextResponse.json(
      { error: "required field not found" },
      { status: 401 }
    );
  }
  return NextResponse.json(
    { res: "User validation was successful" },
    { status: 201 }
  );
}
