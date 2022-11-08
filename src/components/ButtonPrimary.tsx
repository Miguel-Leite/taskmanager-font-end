import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function ButtonPrimary({text, ...props}: Props) {
  return <button {...props} className="text-center py-5 bg-secundary-ws text-dark-600 font-medium rounded-md">{text}</button>
}