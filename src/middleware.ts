import { NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers"
export function middleware(req: NextRequest) {
    const jwt = cookies().get("jwt");
    const withoutLoginAccess  = req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register";
    const protectedRoute = req.nextUrl.pathname==="/department";
    if(withoutLoginAccess && jwt?.value){
        return NextResponse.redirect(new URL("/",req.url))
    }
    if(protectedRoute && !jwt?.value){
      return NextResponse.redirect(new URL("/",req.url));
    }
}
export const config = {
  matcher: ["/login","/register","/department"],
};
