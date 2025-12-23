import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  // सभी paths except next assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)"
  ],
};
