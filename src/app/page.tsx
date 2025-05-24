import StatusBadge from "@/components/StatusBadge";
import connectDB from "@/libs/connectDB";
import Task, { TaskDocumentType } from "@/model/task";
import Link from "next/link";

export default async function HomePage() {
  await connectDB();
  const tasks: TaskDocumentType[] = await Task.find().sort({createdAt: -1});
  return (
    <section>
      <h1 className="text-4xl font-semibold capitalize mb-5 lg:mb-0">
        Tasks list app
      </h1>
      <div className="flex justify-end items-center mb-20">
        <Link
          href="/task/add"
          className="bg-cyan-300 hover:bg-cyan-400 transition py-1 px-2 capitalize text-xl text-black rounded-sm"
        >
          Add task
        </Link>
      </div>
      <table className="table w-full text-white text-left">
        <thead className="border-t-2 border-b-2 border-white font-bold text-md lg:text-2xl">
          <tr>
            <th className="p-3">#</th>
            <th>
              <p className="w-min md:w-fit">Task Title</p>
            </th>
            <th className="max-w-min">
              <p className="w-min md:w-fit">Task Status</p>
            </th>
            <th className="max-w-min">
              <p className="w-min md:w-fit">Task Details</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr
              className="border-b-1 border-b-gray-500"
              key={t._id!.toString()}
            >
              <td className="p-3">{i + 1}</td>
              <td>
                <p className="w-min md:w-fit">{t.title}</p>
              </td>
              <td><StatusBadge status={t.status}/></td>
              <td>
                <Link
                  href=""
                  className="p-2 bg-blue-600 hover:bg-blue-800 transition rounded-md"
                >
                  details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
