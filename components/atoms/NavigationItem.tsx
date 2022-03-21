import Link from 'next/link';

type Props = {
  title: string;
  href: string;
  active: boolean;
};

export const NavigationItem = ({ title, active, href }: Props) => {
  return (
    <Link href={href}>
      <a
        className={
          'text-center text-zinc-800 hover:text-zinc-800 block lg:inline px-3 py-2 rounded-md text-base md:text-md font-poppins font-semibold'
        }
      >
        {title}
      </a>
    </Link>
  );
};
