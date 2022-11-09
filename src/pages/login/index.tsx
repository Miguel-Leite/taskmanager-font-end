import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Image from 'next/image';
import { getSession, signIn } from 'next-auth/react';

import logoImg from '../../assets/logo.svg';
import { Input } from "../../components/Input";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { GetServerSideProps } from "next";

export default function Login() {

  return (
    <div className='max-w-sm w-11/12 h-auto mx-auto mt-44'>
      <title>Login | Task Manager</title>
      <Image src={logoImg} alt="Logo Task Manager" className="mb-10" />
      <div className="flex flex-col gap-3 mb-10">
        <button type="button" onClick={() => signIn('google')} className="bg-dark-400 text-zinc-200 flex items-center gap-4 font-medium rounded-md">
          <span className="px-6 py-5 bg-secundary-ws text-dark-600 rounded-l-md"> <FaGoogle size={17} /> </span> Google
        </button>
        <button type="button" onClick={() => signIn('facebook')} className="bg-dark-400 text-zinc-200 flex items-center gap-4 font-medium rounded-md">
          <span className="px-6 py-5 bg-secundary-ws text-dark-600 rounded-l-md"> <FaFacebookF size={17} /> </span> Facebook
        </button>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-base text-secundary-ws">Your email</label>
          <Input type="email" placeholder="Please insert your e-mail address" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium text-base text-secundary-ws">Password</label>
          <Input type="password" placeholder="Please insert your password" />
        </div>
        <ButtonPrimary text="Sign In" />
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/tasks',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }

  return {
    props: {
      user: 'Miguel'
    }
  }
}