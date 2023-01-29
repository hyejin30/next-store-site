import styled from 'styled-components';

import { Typography } from '@mui/material';

import { FOOTER_DETAIL_LIST } from '../constant';
import { flex, colors, fontSize } from '@/styles';

function CompanyInfo() {
  return (
    <Wrapper>
      <Detail>
        <Typography component="span" sx={{ fontWeight: 500, fontSize: fontSize.small }}>
          서울특별시 광진구 아차산로 200
        </Typography>
        <ItemList>
          {FOOTER_DETAIL_LIST.map((detail, idx) => (
            <li>
              <Typography
                key={`footer-detail-${idx}`}
                component="span"
                sx={{ fontWeight: 300, fontSize: fontSize.small }}
              >
                {detail}
              </Typography>
            </li>
          ))}
        </ItemList>
      </Detail>
    </Wrapper>
  );
}

export default CompanyInfo;

const Wrapper = styled.section`
  ${flex('', '', 'column')};
`;

const Detail = styled.div`
  ${flex('', '', 'column')}
  row-gap: 15px;
`;

const ItemList = styled.ul`
  ${flex('', '')}

  li:not(:last-child):after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 0.8rem;
    margin: 0 0.5rem;
    vertical-align: middle;
    background-color: ${colors.BORDER_X1};
  }
`;
