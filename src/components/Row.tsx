import styled from '@emotion/styled';

interface Props {
  flex?: boolean;
  column?: boolean;
}

const Row = styled.div<Props>`
  margin: 2em 0;
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  justify-content: ${({ flex }) => (flex ? 'space-between' : 'start')};
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export default Row;
