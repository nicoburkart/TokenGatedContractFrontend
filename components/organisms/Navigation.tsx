import Link from 'next/link';
import { useContext, useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import { DropDownMenu } from '../molecules/DropDownMenu';
import { NavigationItems } from '../molecules/NavigationItems';
import { Container } from '../templates/Container';
import { WalletConnector } from './WalletConnector';

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [{ data: accountData }, disconnect] = useAccount();

  const ProfileMenu = () => {
    return (
      <DropDownMenu
        transparentBackground={true}
        items={[
          {
            label: 'logout',
            action: () => {
              disconnect();
            },
          },
        ]}
        icon={<img src="icons/profile.svg" className="h-10 w-10"></img>}
      ></DropDownMenu>
    );
  };

  return (
    <header>
      <nav className="py-4">
        <Container>
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center px-2 md:pl-0">
              <Link href="/">
                <a className="flex flex-row items-center justify-center">
                  <div className="rounded-full w-10 h-10 bg-gradient-to-br from-red-400 to-purple-700"></div>
                  <h1 className="hidden md:block font-poppins font-black text-zinc-800 text-xl ml-4">
                    TokengatedContract.
                  </h1>
                </a>
              </Link>
            </div>
            <div className="hidden lg:block ml-auto">
              <NavigationItems></NavigationItems>
            </div>
            <div className="block">
              <div className="relative">
                {!accountData ? (
                  <WalletConnector></WalletConnector>
                ) : (
                  <ProfileMenu></ProfileMenu>
                )}
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center px-2 md:px-4 py-2 rounded-md focus:outline-none"
                onClick={() => setNavOpen(!navOpen)}
              >
                <img className="h-12 w-12" src="icons/menu.svg" alt="" />
              </button>
            </div>
          </div>
        </Container>
        <div className={navOpen ? '' : 'hidden' + ' lg:hidden'}>
          <NavigationItems></NavigationItems>
        </div>
      </nav>
    </header>
  );
};
