import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import UserModel from "@/models/user";
import { mongooseConnect } from "./mongoose";

export const withAuth =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session: any = await getServerSession(req, res, authOptions);

    if (!session || !session.user || !session.user.email) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    await mongooseConnect();

    const foundUser = await UserModel.findOne({ email: session.user.email });

    if (!foundUser) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    if (foundUser.role !== "admin") {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    return handler(req, res);
  };
