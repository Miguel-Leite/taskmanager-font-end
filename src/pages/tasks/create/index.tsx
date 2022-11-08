import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ButtonSecondary } from "../../../components/ButtonSecondary";
import { Input } from "../../../components/Input";
import { Prev } from "../../../components/prev";

import { TopBar } from "../../../components/TopBar";


export default function Create() {

  return (
    <div>
      <TopBar />
      <title>Create Task | Task Manager</title>
      <form className="mt-[8.688rem] mx-auto w-[37.5rem]">
        <Prev title="Add task" description="Add your tasks to be registered." />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 justify-center">
            <label htmlFor="task" className="font-medium text-base text-secundary-ws"> Task </label>
            <Input id="task" placeholder="Insert your task" />
          </div>

          <div className="flex flex-col gap-2 justify-center">
            <label htmlFor="date" className="font-medium text-base text-secundary-ws">Date</label>
            <input
              className="input-date px-6 py-5 rounded-md bg-dark-400 placeholder:opacity-70 outline-0 border border-transparent focus:border-secundary-ws"
              type="date"
              name="date" id="date"
              placeholder="Today" />
          </div>
          <div className="flex flex-col gap-2">
            <ButtonPrimary text="Create task" />
            <ButtonSecondary text="Edit task" />
          </div>
        </div>
      </form>
    </div>
  );
}