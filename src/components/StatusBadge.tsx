import { Status } from "@/model/task"

interface StatusPageProps {
    status: Status;
}

export default async function StatusBadge({status}: StatusPageProps) {
  const statusStyles = {
    "TODO": "bg-red-400 text-red-950",
    "IN_PROGRESS": "bg-yellow-400 text-yellow-950",
    "COMPLETED": "bg-green-400 text-green-950",
  }
  return (
    <div className={`${statusStyles[status]} py-1 px-1 mx-2 md:mx-0 md:px-2 w-min text-sm md:text-md rounded-lg font-semibold`}>
      {status.toString()}
    </div>
  )
}