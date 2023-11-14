import type { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "@/lib/withAuth";
import Project from "@/models/project";
import { mongooseConnect } from "@/lib/mongoose";

const deleteProject = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.body;

    await mongooseConnect();

    // Fetch the existing project from the database
    const projectToUpdate = await Project.findById(id);

    if (!projectToUpdate) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Delete the project
    await projectToUpdate.remove();

    return res.status(200).json({ message: "Deleted project!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default withAuth(deleteProject);
