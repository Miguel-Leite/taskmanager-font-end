import { FaBars } from "react-icons/fa";
import { BiAddToQueue, BiRightArrowAlt } from "react-icons/bi";

export function TopBar() {

  return (
    <header className="w-full px-7 py-8 flex items-center justify-between bg-dark-400 text-zinc-300">
      <div className="flex gap-7 items-center">
        <button>
        <FaBars size={32}  />
        </button>
        <a href="#" className="flex gap-3 items-center">
          <BiAddToQueue size={28} />
          Add Task
        </a>
      </div>

      <div className="flex gap-2">
        <img src="/avatar.jpg" className="w-[52px] h-[52px] rounded-[50%]" alt="Miguel Leite" />
        <div className="flex flex-col gap-[2px]">
          <strong>Miguel Leite</strong>
          <a href="#" className="flex items-center gap-1"><span className="font-medium text-secundary-ws">My account</span> <BiRightArrowAlt /> </a>
        </div>
      </div>
    </header>
  )
}