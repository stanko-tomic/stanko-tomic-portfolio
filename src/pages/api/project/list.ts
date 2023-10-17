import type { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "@/lib/withAuth";
import Project from "@/models/project";
import { mongooseConnect } from "@/lib/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await mongooseConnect();
  if (req.query.title) {
    try {
      const title = req.query.title;
      const projects = await Project.find({ title: title });
      return res.status(201).json({ list: projects });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  } else if (req.query.latestThree) {
    try {
      const projects = await Project.find({}, "title type tags url mainImage")
        .sort({ createdAt: -1 })
        .limit(3);
      return res.status(201).json({ list: projects });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const projects = await Project.find({}, "title type tags url mainImage");
      return res.status(201).json({ list: projects });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export default handler;
