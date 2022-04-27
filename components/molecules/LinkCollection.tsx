import Image from 'next/image';
import Link from 'next/link';

export const LinkCollection = () => {
  return (
    <div className="flex space-x-4 pt-8 justify-center">
      <Link href={'https://testnets.opensea.io/collection/communitypass'}>
        <a target="_blank">
          <Image
            height={50}
            width={55}
            src={'/icons/opensea.svg'}
            alt="link to open sea"
          ></Image>
        </a>
      </Link>
      <Link
        href={
          'https://rinkeby.etherscan.io/address/0x17b2d73f8ca96dbce24eff415fa64a899cf7f2b3'
        }
      >
        <a target="_blank">
          <Image
            height={50}
            width={50}
            src={'/icons/etherscan.svg'}
            alt="link to etherscan"
          ></Image>
        </a>
      </Link>
    </div>
  );
};
