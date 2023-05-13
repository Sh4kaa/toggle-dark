import styled from 'styled-components';

export const Head = styled.header`
  height: 70px;
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.fontColor};
`;
