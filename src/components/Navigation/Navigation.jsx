import { Navi, StyledNavLink } from '../../components/Navigation/Navigation.styled';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
        <Navi>
      <StyledNavLink to="/">Miraplay</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/games">Games</StyledNavLink>}
    </Navi>
  );
};