/* fonts */

import { css } from 'styled-components';
import localFont from '@next/font/local';

export const font = (size: number, weight: number, lineHeight: number = 0) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight || size * 1.5}px;
`;

export const fontSize = {
  large: '32px',
  medium: '24px',
  regular: '16px',
  small: '14px',
};

export const spoqa = localFont({
  src: [
    {
      path: '../assets/fonts/SpoqaHanSansNeo-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SpoqaHanSansNeo-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SpoqaHanSansNeo-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SpoqaHanSansNeo-Light.woff',
      weight: '300',
      style: 'normal',
    },
  ],
});

export const campton = localFont({
  src: [
    {
      path: '../assets/fonts/Campton-Book.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Campton-SemiBold.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});
