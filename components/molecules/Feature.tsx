import { Paragraph, SubTitle } from '../atoms/Typography';

type Props = {
  title: string;
  desc: string;
  icon: string;
  className?: string;
};

export const Feature = ({ title, desc, icon, className }: Props) => {
  return (
    <div className="md:w-1/3 xl:w-1/4 flex flex-col text-center space-y-3">
      <img className="h-32" src={icon} alt="" />
      <SubTitle>{title}</SubTitle>
      <Paragraph>{desc}</Paragraph>
    </div>
  );
};
