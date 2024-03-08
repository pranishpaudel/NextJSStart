import { NextResponse } from "next/server";
import { myDb } from "./db";
export function GET(_, response) {
  const id = response.params;

  return NextResponse.json({ result: myDb });
}
