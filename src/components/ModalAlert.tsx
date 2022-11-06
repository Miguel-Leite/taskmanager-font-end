import * as Dialog from '@radix-ui/react-dialog';
import { BiTrash } from "react-icons/bi";

interface ModalAlertProps {
  text: string;
}

export function ModalAlert({ text }:ModalAlertProps) {

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
        <Dialog.Content className='fixed bg-dark-600 py-8 px-24 top-1/2 left-1/2 -translate-x-1/2 -translate-x-1/2 rounded'>
          <Dialog.Title className='text-zinc-200 font-bold text-center text-4xl mb-4'>Alerta </Dialog.Title>
          <Dialog.Description>
            <p className='text-lg text-zinc-300'>{text}</p>
            <div className='mt-6 flex gap-6 justify-center'>
              <Dialog.Close className='bg-white/25 py-3 px-6 rounded'>Cancelar</Dialog.Close>
              <button className='bg-red-500 py-3 px-6 rounded flex justify-center items-center gap-1'>Sim, excluir <BiTrash size={18} /></button>
            </div>
          </Dialog.Description>
          {/* <Dialog.Close /> */}
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}