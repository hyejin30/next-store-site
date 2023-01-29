import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, fontSize } from '@/styles';

interface ITextLarge {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextLarge(props: ITextLarge) {
  const { children, weight = 500, color = colors.BLACK, ...restProps } = props;

  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default TextLarge;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.large};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
