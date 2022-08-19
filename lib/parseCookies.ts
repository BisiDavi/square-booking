import cookie from "cookie";

export default function parseCookies(req: any) {
  return typeof req.cookies === "string"
    ? cookie.parse(req.cookies)
    : req.cookies;
}
