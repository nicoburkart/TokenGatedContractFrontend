import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  title: string;
  href: string;
  active: boolean;
  newTab?: boolean;
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
};

export const NavigationItem = ({
  title,
  active,
  href,
  setNavOpen,
  newTab,
}: Props) => {
  return (
    <Link href={href}>
      <a
        target={newTab ? '_blank' : '_self'}
        className={
          'text-center text-zinc-800 hover:text-zinc-800 block lg:inline px-3 py-2 rounded-md text-base md:text-md font-poppins font-semibold'
        }
        onClick={() => {
          if (setNavOpen) {
            setNavOpen(false);
          }
        }}
      >
        {title}
      </a>
    </Link>
  );
};
