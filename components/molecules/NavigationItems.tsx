import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { NavigationItem } from '../atoms/NavigationItem';

type Props = {
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
};

export const NavigationItems = ({ setNavOpen }: Props) => {
  const router = useRouter();

  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:ml-10 lg:flex lg:items-baseline lg:space-x-8 xl:space-x-16 xl:mr-10">
      <NavigationItem
        title="About"
        active={router.pathname === '#about'}
        href="#about"
        setNavOpen={setNavOpen}
      ></NavigationItem>
      <NavigationItem
        title="MintNFT"
        active={router.pathname === '#mintnft'}
        href="#mintnft"
        setNavOpen={setNavOpen}
      ></NavigationItem>
      <NavigationItem
        title="OpenSea"
        active={true}
        href="https://testnets.opensea.io/collection/communitypass"
        setNavOpen={setNavOpen}
        newTab={true}
      ></NavigationItem>
    </div>
  );
};
