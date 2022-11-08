import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";


interface Props {
  title: string;
  description: string;
}

export function Prev({ title, description }: Props) {

  return (
    <div className="flex items-center gap-5 mb-14">
      <Link href="/tasks" className="w-14 h-14 rounded-full bg-dark-400 flex items-center justify-center"> <BiArrowBack /> </Link>
      <div className="flex flex-col gap-3">
        <strong className="font-bold text-3xl">{title}</strong>
        <p className="font-medium text-lg text-zinc-300">{description}</p>
      </div>
    </div>
  )
}