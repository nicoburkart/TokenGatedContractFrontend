import Link from 'next/link';
import { Paragraph, SubTitle, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const About = () => {
  return (
    <section id="about" className="text-zinc-50 bg-zinc-800 z-10 relative">
      <Container className="py-24">
        <Title className="text-zinc-50">About</Title>
        <div className="bg-zinc-50 rounded-full w-14 h-1 mb-10 lg:mb-20"></div>
        <div className="w-full flex flex-col md:flex-row space-y-10 md:space-x-8 md:space-y-0 items-center xl:space-x-32">
          <div className="md:w-1/4 md:max-w-fit rounded-full overflow-hidden border-[3px] h-full flex-shrink-0">
            <img
              className="w-full h-[180px] md:h-auto md:max-w-[250px]"
              src="images/profile-pic.jpeg"
              alt=""
            />
          </div>

          <div className="md:w-3/4 text-center md:text-left flex flex-col items-center md:items-start">
            <SubTitle className="text-zinc-50">Who developed this:</SubTitle>
            <Paragraph className="text-zinc-50">
              Hey, I’m the founder of Creative Contracts and member of the
              DeveloperDAO. I’m a smart contract developer that is passionate
              about building fun projects within the crypto community. I love to
              share my knowlege with fellow developers and always try to learn
              something new. I hope this project helps you with your own
              contract!
              <br />
              <br />
              Nico Burkart
            </Paragraph>
            <div className="flex space-x-4 mt-8 items-baseline">
              <Link href={'https://twitter.com/nicoburkart'}>
                <a target="_blank">
                  <img src="icons/social/twitter.svg" alt="" />
                </a>
              </Link>
              <Link href={'https://github.com/nicoburkart'}>
                <a target="_blank">
                  <img src="icons/social/github.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
