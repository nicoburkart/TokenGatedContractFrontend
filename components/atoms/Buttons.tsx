import { MouseEventHandler, ReactNode, useState } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
};

export const PrimaryButton = ({ className, children, onClick }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      className={
        'relative flex-shrink-0 text-white bg-zinc-800 border-0 py-3 md:py-4 px-8 focus:outline-none rounded-2xl text-lg font-semibold font-poppins sm:mt-0' +
        ' ' +
        className
      }
    >
      <div
        className={`absolute w-full h-full top-3 left-4 border-zinc-800 border-[3px] -rotate-2 rounded-2xl transition-all ${
          isHovering ? 'top-0 left-0 rotate-0' : ''
        }`}
      ></div>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        'flex-shrink-0 text-zinc-800 bg-white border-0 py-3 md:py-4 px-8 focus:outline-none rounded-2xl text-lg font-semibold font-poppins sm:mt-0' +
        ' ' +
        className
      }
    >
      {children}
    </button>
  );
};
