import cookie from "cookie";

export default function parseCookies(req: any) {
  const cookiesArray = Object.values(req.cookies);
  return cookiesArray.length === 0
    ? req.cookies
    : req.cookies?.merchant
    ? cookie.parse(req.cookies?.merchant)
    : cookie.parse(req.cookies);
}
