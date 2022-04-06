import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  title: string;
  href: string;
  active: boolean;
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
};

export const NavigationItem = ({ title, active, href, setNavOpen }: Props) => {
  return (
    <Link href={href}>
      <a
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
