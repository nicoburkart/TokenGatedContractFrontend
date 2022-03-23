import { Feature } from '../molecules/Feature';
import { Container } from '../templates/Container';

export const Features = () => {
  return (
    <Container>
      <div className="xl:bg-white z-10 flex-col md:flex-row py-16 w-fit flex rounded-3xl justify-center items-center space-y-16 md:space-y-0 md:space-x-16">
        <Feature
          title="Tokengate"
          desc="The NFT should serve as an access pass to e.g. a DAO or some of your content."
          icon="icons/shield-lock.svg"
        ></Feature>
        <Feature
          title="Saved Onchain"
          desc="Every pass is rendered and saved onchain. Thus the NFT will forever live on the blockchain."
          icon="icons/verified.svg"
        ></Feature>
        <Feature
          title="Longterm Members"
          desc="Reward members with benefits by setting the long term membership."
          icon="icons/clock.svg"
        ></Feature>
      </div>
    </Container>
  );
};
