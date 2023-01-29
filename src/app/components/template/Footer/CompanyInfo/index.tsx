import styled from 'styled-components';

import { Text } from '@/app/components/atom';

import { FOOTER_DETAIL_LIST } from '../constant';
import { flex, colors } from '@/styles';

function CompanyInfo() {
  return (
    <Wrapper>
      <Detail>
        <Text.Small weight={500}>서울특별시 광진구 아차산로 200</Text.Small>
        <ItemList>
          {FOOTER_DETAIL_LIST.map((detail, idx) => (
            <li>
              <Text.Small key={`footer-detail-${idx}`} color={colors.GRAY_LIGHT_X3}>
                {detail}
              </Text.Small>
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
