import { Head } from "next/document";
import Image from "next/image";
import logoImg from '../assets/logo.svg';
import illustrator from '../assets/illustrator.svg';
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1252px] mx-auto mt-16">
      <title>Inicio | Task Manager</title>
      
      <header className="flex items-center justify-between font-medium font-family mb-14">
        <Image src={logoImg} alt="Logo Task Manager" />
        <ul className="flex items-center gap-11">
          <li className="text-secundary-ws"><a href="#">About us</a></li>
          <li><a href="#">Cases</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <Link href="/login" className="px-10 py-3 bg-secundary-ws rounded-md text-dark-600 hover:opacity-90">Sign In</Link>
      </header>
      <main className="flex items-center gap-32">
        <div className="flex items-start flex-col flex-1">
          <h1 className="font-medium text-4xl mb-8">
            <span className="text-secundary-ws">Creative Digital</span> Design Agency
            is looking for new talent
          </h1>
          <p className="font-bold text-lg mb-8 opacity-80">Creative Digital Design Agency is looking for new talent</p>
          <a href="#" className="py-4 px-11 bg-secundary-ws rounded-md text-dark-600 hover:opacity-90 font-medium">Get started</a>
        </div>
        <div className="">
          <Image src={illustrator} alt="Illustrator" />
        </div>
      </main>
    </div>
  )
}
