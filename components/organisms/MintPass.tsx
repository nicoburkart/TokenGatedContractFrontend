import { useState } from 'react';
import { PrimaryButton } from '../atoms/Buttons';
import { InputElem } from '../atoms/InputElem';
import { Paragraph, SubTitle, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const MintPass = () => {
  const [selectedAccessTierIndex, setSelectedAccessTierIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const accessTiers = [
    {
      label: 'Demo',
      price: 0,
    },
    {
      label: 'Tier 1',
      price: 0.003,
    },
    {
      label: 'Tier 2',
      price: 0.005,
    },
    {
      label: 'Tier 3',
      price: 0.03,
    },
  ];
  const colors = [
    {
      label: 'Onyx',
      price: 0.0,
    },
    {
      label: 'Eggshell',
      price: 0.003,
    },
  ];

  return (
    <section className="bg-cover bg-bottom bg-no-repeat">
      <Container className="py-24">
        <Title>Create Pass</Title>
        <div className="bg-zinc-800 rounded-full w-14 h-1 mb-10 lg:mb-20"></div>
        <div className="flex w-full items-center justify-center md:justify-between lg:space-x-16">
          <div className="relative flex flex-col w-full lg:w-1/2 space-y-4">
            <img
              className="hidden md:block absolute blur-[70px] opacity-30 -top-1/2 left-0 object-cover object-center z-0"
              alt="hero"
              src="images/blur-hero-2.svg"
            />
            <SubTitle className="md:text-left">Configure Pass</SubTitle>
            <InputElem
              label="Access Tier"
              items={accessTiers}
              update={setSelectedAccessTierIndex}
            ></InputElem>

            <InputElem
              label="Color"
              items={colors}
              update={setSelectedColorIndex}
            ></InputElem>

            <Paragraph>
              <span className="flex items-center justify-between">
                Price:
                <span>
                  {accessTiers[selectedAccessTierIndex].price +
                    colors[selectedColorIndex].price}{' '}
                  ETH
                </span>
              </span>
            </Paragraph>

            <PrimaryButton>Mint</PrimaryButton>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <img
              className="object-cover object-center w-full"
              alt="hero"
              src="images/nft-hero.svg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
