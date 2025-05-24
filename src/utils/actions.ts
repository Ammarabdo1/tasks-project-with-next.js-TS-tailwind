"use server";
import connectDB from "@/libs/connectDB";
import Task from "@/model/task";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateTaskDto } from "./dtos";

export const createTask = async (newTask: CreateTaskDto) => {
  if (typeof newTask.title !== "string" || newTask.title.length < 2)
  if (typeof newTask.description !== "string" || newTask.description.length < 4)
    return console.log("Error in createTask: Required");

  await connectDB();
  await Task.create(newTask);
  revalidatePath("/");
  redirect("/");
};
