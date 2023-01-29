import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, fontSize } from '@/styles';

interface ITextRegular {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextRegular(props: ITextRegular) {
  const { children, weight = 400, color = colors.BLACK, ...restProps } = props;

  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default TextRegular;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.regular};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
