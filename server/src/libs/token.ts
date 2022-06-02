import jwt from "jsonwebtoken";

export const getToken = (id: number, email: string) => {
  return jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    }
  );
};
