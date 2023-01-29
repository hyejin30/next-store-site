/* fonts */

import { css } from 'styled-components';

export const font = (size: number, weight: number, lineHeight: number = 0) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight || size * 1.5}px;
`;

export const fontSize = {
  large: '32px',
  medium: '18px',
  regular: '14px',
  small: '12px',
};
