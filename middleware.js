import { NextResponse } from "next/server";
export function middleware(request) {
  return NextResponse.json({
    success: `Successfully runned middleware ${process.env.testNow} `,
  });
}

export const config = {
  matcher: ["/userslist/:path*"],
};
