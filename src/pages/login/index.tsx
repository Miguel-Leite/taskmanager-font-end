import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Image from 'next/image';

import logoImg from '../../assets/logo.svg';

export default function Login() {

  return (
    <div className='max-w-sm w-11/12 h-auto mx-auto mt-44'>
      <title>Login | Task Manager</title>
      <Image src={logoImg} alt="Logo Task Manager" className="mb-10" />
      <div className="flex flex-col gap-3 mb-10">
        <a href="#" className="bg-dark-400 text-zinc-200 flex items-center gap-4 font-medium rounded-md">
          <span className="px-6 py-5 bg-secundary-ws text-dark-600 rounded-l-md"> <FaGoogle size={17} /> </span> Google
        </a>
        <a href="#" className="bg-dark-400 text-zinc-200 flex items-center gap-4 font-medium rounded-md">
          <span className="px-6 py-5 bg-secundary-ws text-dark-600 rounded-l-md"> <FaFacebookF size={17} /> </span> Facebook
        </a>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-base text-secundary-ws">Your email</label>
          <input type="email" id="email" className="px-6 py-5 rounded-md bg-dark-400 placeholder:opacity-70 outline-0 border border-transparent focus:border-secundary-ws" placeholder="Please insert your e-mail address" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium text-base text-secundary-ws">Password</label>
          <input type="password" id="password" className="px-6 py-5 rounded-md bg-dark-400 placeholder:opacity-70 outline-0 border border-transparent focus:border-secundary-ws" placeholder="Please insert your password" />
        </div>
        <button type="submit" className="text-center py-5 bg-secundary-ws text-dark-600 font-medium rounded-md">Sign In</button>
      </form>
    </div>
  )
}