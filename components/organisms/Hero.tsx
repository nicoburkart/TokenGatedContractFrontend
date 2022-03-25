import Link from 'next/link';
import { PrimaryButton, SecondaryButton } from '../atoms/Buttons';
import { Paragraph, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const Hero = () => {
  return (
    <section className="z-10 relative text-zinc-800 font-poppins md:bg-[url('/images/line.svg')] bg-cover bg-bottom bg-no-repeat">
      <img
        className="hidden md:block absolute -z-10 blur-[70px] opacity-50 bottom-[70%] right-[80%] object-cover object-center rounded"
        alt="hero"
        src="images/blur-hero-2.svg"
      />
      <Container className="relative z-10 py-24 lg:py-48 2xl:py-72 md:flex-row space-y-12">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Title className="xl:text-6xl text-zinc-800 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-700">
              OnChain
            </span>
            <br />
            Access Pass Demo
          </Title>

          <Paragraph className="mb-8 font-semibold">
            This project is an example of how to use an NFT for a tokengated
            community such as DAOs or creators.
            <br />
            The NFT is 100% saved onchain (no IPFS needed) and is visualized as
            an SVG.
          </Paragraph>

          <div className="flex justify-between space-x-12">
            <Link href={'#mintnft'}>
              <a>
                <PrimaryButton className="px-16">Get Access</PrimaryButton>
              </a>
            </Link>
            <SecondaryButton className="hidden xl:block px-16">
              Contract Code
            </SecondaryButton>
          </div>
        </div>
        <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="hidden md:block -z-10 absolute blur-[70px] -inset-y-1/2 object-cover object-center rounded"
            alt="hero"
            src="images/blur-hero-2.svg"
          />
          <img
            className="object-cover object-center rounded -rotate-6"
            alt="hero"
            src="images/nft-hero.svg"
          />
        </div>
      </Container>
    </section>
  );
};
