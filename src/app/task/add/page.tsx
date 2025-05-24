import AddTaskForm from "@/components/AddTaskForm";
import Link from "next/link";

export default function AddTaskPage() {


  return (
    <section>
      <Link href="/" className="underline block mb-10">
        {"<< "} Back to tasks table
      </Link>

      <div className="border-2 border-gray-300 p-5 rounded-md w-full md:w-2/3 mx-auto">
        <h2 className="text-gray-300 text-3xl font-bold mb-7">Add Your Task</h2>
        <AddTaskForm />
      </div>
    </section>
  );
}
