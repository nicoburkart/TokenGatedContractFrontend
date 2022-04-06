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
                className="relative z-50 inline-flex items-center justify-center rounded-md px-2 py-2 text-zinc-800 hover:text-gray-300 focus:outline-none dark:text-white md:px-4"
                onClick={() => setNavOpen(!navOpen)}
              >
                <div className="flex w-8 flex-col items-end">
                  <span
                    className={`block h-1 w-full rounded-full bg-zinc-800 transition-all ${
                      navOpen ? 'translate-y-1 -rotate-45' : 'mb-2'
                    }`}
                  ></span>
                  <span
                    className={`block h-1 rounded-full bg-zinc-800 transition-all ${
                      navOpen ? 'w-full rotate-45' : 'w-2/3'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </Container>
        <div
          className={`left- fixed top-0 z-40 flex h-full w-full flex-col items-center justify-center text-center transition-all ${
            navOpen
              ? 'bg-gradient-to-br from-gray-50 to-purple-50'
              : 'hidden' + ' md:hidden'
          }`}
        >
          <NavigationItems setNavOpen={setNavOpen}></NavigationItems>
        </div>
      </nav>
    </header>
  );
};
