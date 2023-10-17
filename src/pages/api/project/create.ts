import type { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "@/lib/withAuth";
import Project from "@/models/project";
import { mongooseConnect } from "@/lib/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, type, url, tags, writeup, mainImage } = req.body;

    await mongooseConnect();

    const newProject = await Project.create({
      title,
      type,
      url,
      tags,
      writeup,
      mainImage,
    });

    return res
      .status(201)
      .json({ message: "Created project!", project: newProject });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default withAuth(handler);
