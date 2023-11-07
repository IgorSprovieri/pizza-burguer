import { H3, ShadowBox } from "..";

type Props = {
  text: string;
};

export const NotifyCard = ({ text }: Props) => {
  return (
    <ShadowBox padding="16px">
      <H3 textAlign="center" color="black">
        {text}
      </H3>
    </ShadowBox>
  );
};
