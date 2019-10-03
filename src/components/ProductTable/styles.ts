import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Tr = styled.tr`
  > td {
    padding-bottom: 16px;
  }
`

export const Description = styled.td`
  font-size: 12px;
`;

export const PriceTd = styled.td`
  padding-left: 64px;
  padding-right 16px;
  vertical-align: top;
`;

export const ProductName = styled.td`
padding-left: 64px;
padding-right 16px;
vertical-align: top;
`;

export const QuantityTd = styled.td`
  padding-left: 16px;
  padding-right 16px;
  width: 64px;
`;
