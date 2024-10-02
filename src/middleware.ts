import { NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers"
export function middleware(req: NextRequest) {
    const jwt = cookies().get("jwt");
    const withoutLoginAccess  = req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register";
    if(withoutLoginAccess && jwt?.value){
        return NextResponse.redirect(new URL("/",req.url))
    }
}

export const config = {
  matcher: ["/login","/register"],
};
