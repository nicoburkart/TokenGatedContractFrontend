import { ethers } from 'ethers';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSigner } from 'wagmi';
import { COLORS, TIERS } from '../../constants';
import { abiCommunityPass } from '../../contractABI';
import { renderPreview } from '../../services/renderPreview';
import { PrimaryButton } from '../atoms/Buttons';
import { InputDropDown } from '../atoms/InputDropDown';
import { Paragraph, SubTitle, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const MintPass = () => {
  const CONTRACT_ADDRESS = '0x17B2d73F8ca96DBCe24EFF415fa64a899cF7f2b3';
  const [selectedAccessTierIndex, setSelectedAccessTierIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [{ data: signer, error, loading }, getSigner] = useSigner();

  const triggerMint = async () => {
    toast.promise(mint, {
      pending: 'Minting... 🧱⛏',
      success: 'Mint Successfull! 🎨',
      error: 'Mint Unsuccessfull... 🤯',
    });
  };

  const mint = async () => {
    if (loading) {
      return;
    }
    try {
      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        abiCommunityPass,
        signer
      );

      let tx = await connectedContract.mintNFT(
        TIERS[selectedAccessTierIndex].label,
        COLORS[selectedColorIndex].label,
        {
          from: await signer?.getAddress(),
          value: TIERS[selectedAccessTierIndex].price.add(
            COLORS[selectedColorIndex].price
          ),
        }
      );
      console.log('Mining...please wait.');
      await tx.wait();

      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${tx.hash}`
      );
    } catch (err) {
      throw err;
    }
  };

  return (
    <section id="mintnft" className="bg-cover bg-bottom bg-no-repeat">
      <Container className="py-24">
        <Title>Create Pass</Title>
        <div className="bg-zinc-800 rounded-full w-14 h-1 mb-10"></div>
        <div className="flex w-full justify-center md:justify-between lg:space-x-16">
          <div className="relative flex flex-col w-full lg:w-1/2 space-y-4">
            <img
              className="hidden md:block absolute blur-[70px] opacity-30 -top-1/2 left-0 object-cover object-center z-0"
              alt="hero"
              src="images/blur-hero-2.svg"
            />
            <SubTitle className="md:text-left ">Configure Pass</SubTitle>
            <InputDropDown
              label="Access Tier"
              items={TIERS}
              onUpdate={setSelectedAccessTierIndex}
            ></InputDropDown>

            <InputDropDown
              label="Color"
              items={COLORS}
              onUpdate={setSelectedColorIndex}
            ></InputDropDown>

            <Paragraph>
              <span className="flex items-center justify-between">
                Price:
                <span>
                  {ethers.utils.formatEther(
                    TIERS[selectedAccessTierIndex].price.add(
                      COLORS[selectedColorIndex].price
                    )
                  )}{' '}
                  ETH
                </span>
              </span>
            </Paragraph>

            <PrimaryButton onClick={triggerMint}>Mint</PrimaryButton>
          </div>
          <div className="hidden lg:flex justify-center lg:w-1/2">
            <img
              className="max-h-[500px]"
              alt="hero"
              src={renderPreview(selectedAccessTierIndex, selectedColorIndex)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
