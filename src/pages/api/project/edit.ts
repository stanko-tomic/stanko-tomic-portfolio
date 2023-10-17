import type { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "@/lib/withAuth";
import Project from "@/models/project";
import { mongooseConnect } from "@/lib/mongoose";

const updateProjectHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id, title, type, url, tags, writeup, mainImage } = req.body;

    await mongooseConnect();

    // Fetch the existing project from the database
    const projectToUpdate = await Project.findById(id);

    if (!projectToUpdate) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Update the project properties
    projectToUpdate.title = title;
    projectToUpdate.type = type;
    projectToUpdate.url = url;
    projectToUpdate.tags = tags;
    projectToUpdate.writeup = writeup;
    projectToUpdate.mainImage = mainImage;

    // Save the updated project to the database
    const updatedProject = await projectToUpdate.save();

    return res
      .status(200)
      .json({ message: "Updated project!", project: updatedProject });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default updateProjectHandler;
