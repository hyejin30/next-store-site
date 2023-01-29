import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, fontSize } from '@/styles';

interface ITextMedium {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextMedium(props: ITextMedium) {
  const { children, weight = 500, color = colors.BLACK, ...restProps } = props;

  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default TextMedium;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.medium};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
