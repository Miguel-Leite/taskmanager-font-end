import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {

  return <input {...props} className="px-6 py-5 rounded-md bg-dark-400 placeholder:opacity-70 outline-0 border border-transparent focus:border-secundary-ws"/>
}