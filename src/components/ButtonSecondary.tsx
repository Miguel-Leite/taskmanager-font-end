import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  text: string;
}

export function ButtonSecondary({ size, text, ...props }: Props) {

  return <button {...props} className={`text-center py-5 text-secundary-ws bg-dark-400 font-medium rounded-md ${size ? size : ''}`}>{text}</button>
}