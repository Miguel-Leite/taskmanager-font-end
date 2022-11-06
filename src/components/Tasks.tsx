import { useState } from 'react';
import { BiTrash } from "react-icons/bi";
import * as Dialog from '@radix-ui/react-dialog';
import { ModalAlert } from './ModalAlert';

export function Tasks() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center justify-between py-3 px-5 bg-dark-400 rounded-xl mb-3">
      <div className="flex items-start gap-3">
        <div className="form-check">
          <input onChange={(e) => { (checked === true) ? setChecked(false) : setChecked(true) }} className="form-check-input appearance-none h-7 w-7 border-2 rounded-md border-secundary-ws bg-transparent checked:bg-secundary-ws checked:border-secundary-ws focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="check" name="check" type="checkbox" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="check" className={`font-medium text-lg ${checked ? 'line-through' : ''}`}>Solve computer logic problems</label>
          <span className="text-xs font-bold text-secundary-ws">Today</span>
        </div>
      </div>
      {checked && (
        <Dialog.Root>
          <Dialog.Trigger className="hover:text-red-400 outline-0">
            <BiTrash size={24} />
          </Dialog.Trigger>
          <ModalAlert text='Deseja realmente excluir esta tarefa?' />
        </Dialog.Root>
      )}
    </div>
  )
}