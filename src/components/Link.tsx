import { Link as RouterLink } from 'react-router-dom';
import { styled } from '../hooks/useTheme';

const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
`;

export default Link;
