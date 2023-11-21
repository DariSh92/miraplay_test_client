import { StyledNavLink } from '../../components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
        <StyledNavLink to="/login">Ігри</StyledNavLink>
        <StyledNavLink to="/login">Про платформу</StyledNavLink>
        <StyledNavLink to="/login">Здай в оренду свій ПК</StyledNavLink>
        <StyledNavLink to="/login">Новини</StyledNavLink>
        <StyledNavLink to="/login"></StyledNavLink>
        <StyledNavLink to="/register">Реєстрація</StyledNavLink>
        <StyledNavLink to="/login">Вхід</StyledNavLink>
    </div>
  );
};