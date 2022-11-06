import { BiSearch } from "react-icons/bi";
import { Tasks } from "./Tasks";

export function ListTasks() {

  return (
    <div className="max-w-[1004px] w-full mx-auto mt-20">
      <title>Task Dashboard | Task Manager</title>
      <h1 className="font-bold text-3xl mb-3">My Tasks</h1>
      <p className="mb-8 text-zinc-300 text-lg">Register your and have a better monitoring of your activities</p>

      <label htmlFor="search" className="bg-dark-400 py-2 px-4 flex items-center gap-3 rounded-xl mb-11">
        <div className="p-3 bg-secundary-ws text-white rounded-md flex items-center text-lg">
          <BiSearch />
        </div>
        <input type="search" id="search" placeholder="Find of tasks" className="p-3 bg-transparent outline-0 w-full placeholder:opacity-80 text-zinc-300" />
      </label>

      <div>
        <h3 className="font-bold text-2xl mb-5">Tasks - 2</h3>
        
        <Tasks />
        
      </div>
    </div>
  )
}