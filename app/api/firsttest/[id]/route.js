import { NextResponse } from "next/server";

export function GET(_, response) {
  const id = response.params;

  return NextResponse.json({ result: id });
}
