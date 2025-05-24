import { Document, InferSchemaType, model, models, Schema } from "mongoose";

export enum Status {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

const taskSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.TODO,
    },
  },
  {
    timestamps: true,
  }
);

type TaskSchemaType =  InferSchemaType<typeof taskSchema>;

export interface TaskDocumentType extends Document, TaskSchemaType {};

export default models.Task || model("Task", taskSchema);
