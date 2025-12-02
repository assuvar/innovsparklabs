import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


// You might need to install uuid: npm install uuid && npm install -D @types/uuid
// Or just use a simple random string generator if you don't want dependencies.
// For now, I'll use a simple random string to avoid extra dependencies unless requested.

function generateSessionId() {
    return "session_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Check if the user-session cookie exists
    const sessionCookie = request.cookies.get("user-session");

    if (!sessionCookie) {
        // If not, set a new one
        const sessionId = generateSessionId();
        response.cookies.set("user-session", sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
        });
        console.log(`New user session created: ${sessionId}`);
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
