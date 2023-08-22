import jwt from "jsonwebtoken";

export function getTokenData(requset) {
  try {
    const token = requset.cookies.get("token")?.value || "";

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    // console.log({ decodedToken });
    return decodedToken.id;
  } catch (error) {
    throw new Error(error);
  }
}
