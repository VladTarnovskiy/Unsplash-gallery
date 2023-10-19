export { default } from "next-auth/middleware";

export const config = { matcher: ["/ret", "/protected/:path*"] };
