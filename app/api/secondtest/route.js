import { NextResponse, NextRequest } from "next/server";

export function GET() {
  return NextResponse.json({
    id: 1,
    value: "Pranish",
  });
}
