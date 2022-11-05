import { useEffect, useState } from "react";
import { BiSearch, BiTrash, BiCheck } from "react-icons/bi";

export function ListTasks() {
  const [checked, setChecked] = useState(false);

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

        <div className="flex items-center justify-between py-3 px-5 bg-dark-400 rounded-xl mb-3">
          <div className="flex items-start gap-3">
            <div className="form-check">
              <input onChange={(e) => { (checked === true) ? setChecked(false) : setChecked(true)}} className="form-check-input appearance-none h-7 w-7 border-2 rounded-md border-secundary-ws bg-transparent checked:bg-secundary-ws checked:border-secundary-ws focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  />
            </div>
            <div className="flex flex-col gap-2">
              <p className={`font-medium text-lg ${checked ? 'line-through' : ''}`}>Solve computer logic problems</p>
              <span className="text-xs font-bold text-secundary-ws">Today</span>
            </div>
          </div>
          { checked && (
            <button className="hover:text-red-400">
              <BiTrash size={24} />
            </button>
          ) }
        </div>
        

        
      </div>
    </div>
  )
}