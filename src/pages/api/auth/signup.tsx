import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import User from "@/models/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    await mongooseConnect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    const newUser = await User.create({ email, password });

    return res.status(201).json({ message: "Created user!", user: newUser });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
