import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");

  if (!token?.value && pathname !== "/login") {
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  } else if (token?.value) {
    console.log(token.value);

    // Corrected method usage
    async function verifyJwtToken(token) {
      try {
        // Attempt to verify the token with the secret key
        const { payload } = await jwtVerify(
          token,
          new TextEncoder().encode(process.env.JWT_SECRET)
        );

        // Assuming 'email' is a field in the token's payload.
        // Return the whole payload or whatever specific part you need.
        return payload.email; // Or simply return 'payload' to return the entire payload object
      } catch (error) {
        // If an error occurs (e.g., token is expired or invalid), catch the error
        console.error("Token verification failed:", error.message);
        return "expired"; // Indicate that the token is expired or otherwise invalid
      }
    }
    console.log(verifyJwtToken(token.value));
  }
}

export const config = {
  matcher: ["/userslist/hello", "/login", "/signup", "/"], // Review and adjust as necessary.
};
