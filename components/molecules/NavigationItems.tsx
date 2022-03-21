import { useRouter } from 'next/router';
import { NavigationItem } from '../atoms/NavigationItem';

export const NavigationItems = () => {
  const router = useRouter();

  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:ml-10 lg:flex lg:items-baseline lg:space-x-8 xl:space-x-16">
      <NavigationItem
        title="Home"
        active={router.pathname === '/'}
        href="/"
      ></NavigationItem>
      <NavigationItem
        title="Content"
        active={router.pathname === '/content'}
        href="/content"
      ></NavigationItem>
      <NavigationItem
        title="MintNFT"
        active={router.pathname === '/mintnft'}
        href="/mintnft"
      ></NavigationItem>
    </div>
  );
};
