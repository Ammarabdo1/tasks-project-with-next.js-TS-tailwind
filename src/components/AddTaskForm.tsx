"use client";

import { createTask } from "@/utils/actions";
import { CreateTaskDto } from "@/utils/dtos";
import { createTaskSchema } from "@/utils/validationSchema";
import { toast } from "react-toastify";

export default function AddTaskForm() {
  const clientAction = async (formData: FormData) => {
    //* get task data
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();

    //! validation
    const validation = createTaskSchema.safeParse({ title, description });
    if (!validation.success) {
      toast.error(validation.error?.issues[0]?.message);
      return;
    }
    //TODO>> add new task in DB
    await createTask({ title, description } as CreateTaskDto);
    toast.success("Task created successfully");
  };

  return (
    <form
      action={clientAction}
      className="flex flex-col gap-6"
    >
      <input
        className="text-xl text-gray-950 bg-gray-300 rounded-md p-2 "
        type="text"
        name="title"
        placeholder="Task Title"
      />
      <textarea
        rows={5}
        name="description"
        placeholder="Task Description"
        className="resize-none text-xl text-gray-950 bg-gray-300 rounded-md p-2 "
      ></textarea>
      <button
        type="submit"
        className="font-semibold cursor-pointer text-xl rounded-md text-black bg-cyan-300 hover:bg-cyan-400 transition p-3"
      >
        Add Task
      </button>
    </form>
  );
}
