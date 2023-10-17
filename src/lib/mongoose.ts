import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.DB_URI;

    if (!uri) throw new Error("No mongodb connection string");

    return mongoose.connect(uri);
  }
}
