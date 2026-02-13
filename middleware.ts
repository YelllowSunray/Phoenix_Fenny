import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Workaround: prefetched requests can get empty RSC payloads with middleware,
  // causing client nav to not update until refresh. Strip prefetch header so
  // the request is handled as a normal navigation.
  const purpose = request.headers.get("Next-Router-Prefetch") ?? request.headers.get("Purpose");
  if (purpose?.toLowerCase().includes("prefetch")) {
    const reqHeaders = new Headers(request.headers);
    reqHeaders.delete("x-middleware-prefetch");
    const modified = new NextRequest(request.url, {
      headers: reqHeaders,
      method: request.method,
    });
    return intlMiddleware(modified);
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
