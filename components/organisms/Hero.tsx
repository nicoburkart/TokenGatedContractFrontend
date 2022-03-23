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
      <Container className="py-24 lg:py-48 2xl:py-72 md:flex-row space-y-12">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Title className="xl:text-6xl text-zinc-800 mb-8">
            On Chain
            <br />
            Access Pass Demo
          </Title>

          <Paragraph className="mb-8 font-semibold">
            This project is an example how to use an NFT for a tokengated
            community.
            <br />
            DAOs or content creators can use this sample as a base to create
            their own onchain contract.
          </Paragraph>

          <div className="flex justify-between space-x-12">
            <PrimaryButton className="px-16">Get Access</PrimaryButton>
            <SecondaryButton className="hidden xl:block px-16">
              Gated Demo
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
