import { BigNumber, ethers } from 'ethers';

export interface ITestValue {
  label: string;
  price: BigNumber;
  primaryColor?: string;
  secondaryColor?: string;
}

export const TIERS: ITestValue[] = [
  { label: 'Demo', price: ethers.utils.parseEther('0') },
  { label: 'Basic', price: ethers.utils.parseEther('0.03') },
  { label: 'Premium', price: ethers.utils.parseEther('0.06') },
  { label: 'Diamond', price: ethers.utils.parseEther('0.2') },
];
export const COLORS: ITestValue[] = [
  {
    label: 'Onyx',
    price: ethers.utils.parseEther('0'),
    primaryColor: '#27272A',
    secondaryColor: '#373757',
  },
  {
    label: 'CreativeContracts',
    price: ethers.utils.parseEther('0'),
    primaryColor: '#4ADE80',
    secondaryColor: '#14B8A5',
  },

  {
    label: 'Moonlight',
    price: ethers.utils.parseEther('0.03'),
    primaryColor: '#270060',
    secondaryColor: '#2E47BD',
  },
  {
    label: 'Diamond',
    price: ethers.utils.parseEther('0.12'),
    primaryColor: '#06B89E',
    secondaryColor: '#65B2D7',
  },
];
