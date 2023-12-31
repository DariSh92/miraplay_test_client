import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 21px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  &.active {
    color: #c2c7c2;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #c2c7c2;
  }
`;