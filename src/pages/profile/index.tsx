import { GetServerSideProps } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import { BiUser } from "react-icons/bi";
import { ButtonSecondary } from "../../components/ButtonSecondary";

import { Prev } from "../../components/prev";
import { TopBar } from "../../components/TopBar";


export default function Profile() {

  const { data: session } = useSession();

  return (
    <div>
      <TopBar buttonAdd={true} />
      <div className="w-[38.188rem] mx-auto mt-[9.813rem]">
        <Prev title="My profile" description="Preview my informations" />

        <div className="flex items-center gap-[0.875rem] mb-8">
        {session?.user?.image && (
          <img className="w-24 h-24 rounded-full" src={session?.user?.image} alt={session?.user?.name} />
        )}
          <div className="flex flex-col gap-[0.375rem]">
            <strong className="font-medium text-2xl text-white">{session?.user?.name}</strong>
            <span className="text-sm text-secundary-ws">My account</span>
          </div>
        </div>

        <div className="flex items-center gap-44 mb-[3.188rem]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[0.25rem]">
              <strong className="font-bold text-sm text-secondary-100">Display name</strong>
              <span className="text-lg font-medium text-zinc-200">{session?.user?.name}</span>
            </div>
            <div className="flex flex-col gap-[0.25rem]">
              <strong className="font-bold text-sm text-secondary-100">E-mail</strong>
              <span className="text-lg font-medium text-zinc-200">{session?.user?.email}</span>
            </div>
          </div>
          <BiUser size={157} className="text-zinc-400" />
        </div>
        <div className="w-full flex justify-center">
          <ButtonSecondary size={'w-[23.813rem]'} text="Sign out" onClick={() => signOut()} />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
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