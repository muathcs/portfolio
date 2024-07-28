import {ReactNode} from 'react';

type Props = Readonly<{
  children: ReactNode;
}>;

export default function Container({children}: Props) {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-12 md:px-16 bg-white min-h-screen md:flex md:flex-col md:items-stretch grid grid-rows-6  ">
      {children}
    </div>
  );
}
