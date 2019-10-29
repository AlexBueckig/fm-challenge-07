import styled from '@emotion/styled';

interface Props {
  flex?: boolean;
}

const Row = styled.div<Props>`
  margin: 2em 0;
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  justify-content: ${({ flex }) => (flex ? 'space-between' : 'start')};
`;

export default Row;
