import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navi = styled.nav`
 margin-right: auto;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 21px;
  font-weight: 700;
  color: white;
  margin-left: 20px;
  margin-right: 20px;
  &.active {
    color: #34c734;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #15e715;
  }
`;