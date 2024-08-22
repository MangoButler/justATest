import { NextResponse } from "next/server";

export function middleware(req: Request) {
  console.log("hi there");
//   return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: ["/about/:path*", "/tours/:path*"],
};
