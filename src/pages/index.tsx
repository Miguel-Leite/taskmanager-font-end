import { Head } from "next/document";
import Image from "next/image";
import logoImg from '../assets/logo.svg';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-dark-600 text-white pt-16 px-24">
      <title>Inicio | Task Manager</title>
      
      <header>
        <Image src={logoImg} alt="Logo Task Manager" />
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Cases</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <button type="button">Sign In</button>
      </header>
      <main>
        <h1>
          Creative Digital Design Agency
          is looking for new talent
        </h1>
        <p>Creative Digital Design Agency is looking for new talent</p>
        <a href="#">Get started</a>
      </main>
    </div>
  )
}
