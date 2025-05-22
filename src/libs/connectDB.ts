import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URL!)
      .then((m) => m.connection);
  }
  cached.conn = await cached.promise;
  (global as any).mongoose = cached.conn;
  return cached.conn;
}
