import { PrimaryButton, SecondaryButton } from '../atoms/Buttons';
import { Paragraph, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const Hero = () => {
  return (
    <section className="text-zinc-800 font-poppins relative">
      <div className='hidden md:block absolute h-full w-full left-0 top-0 bg-[url("/images/line.svg")] bg-cover bg-bottom bg-no-repeat'></div>

      <Container className="py-24 lg:py-48 2xl:py-72 md:flex-row">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Title className="xl:text-6xl text-zinc-800 mb-8">
            On Chain
            <br />
            Access Pass Demo
          </Title>

          <Paragraph className="mb-8">
            This project is an example how to use an NFT for a tokengated
            community.
            <br />
            DAOs or content creators can use this sample as a base to create
            their own onchain contract.
          </Paragraph>

          <div className="flex justify-center">
            <PrimaryButton className="px-16">Get Access</PrimaryButton>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="assets/images/hero-image.svg"
          />
        </div>
      </Container>
    </section>
  );
};
