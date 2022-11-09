import { FaBars } from "react-icons/fa";
import { BiAddToQueue, BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface Props {
  buttonAdd?: boolean;
}

export function TopBar({ buttonAdd = false }: Props) {
  const { data: session } = useSession();
  console.log(session?.user?.image)

  return (
    <header className="w-full px-7 py-8 flex items-center justify-between bg-dark-400 text-zinc-300">
      <div className="flex gap-7 items-center">
        <button>
          <FaBars size={32} />
        </button>
        {buttonAdd && (
          <Link href="/tasks/create" className="flex gap-3 items-center">
            <BiAddToQueue size={28} />
            Add Task
          </Link>
        )}
      </div>

      <div className="flex gap-2">
        {session?.user?.image && (
          <img src={session?.user?.image} className="w-[52px] h-[52px] rounded-[50%]" alt={session?.user?.name} />
        )}
        <div className="flex flex-col gap-[2px]">
          <strong>{session?.user?.name}</strong>
          <Link href="/profile" className="flex items-center gap-1"><span className="font-medium text-secundary-ws">My account</span> <BiRightArrowAlt /> </Link>
        </div>
      </div>
    </header>
  )
}