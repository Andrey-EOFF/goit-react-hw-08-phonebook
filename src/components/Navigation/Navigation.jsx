import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  color: #444444;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #62b4e8;
  }

  &.active {
    font-weight: bold;
    color: #62b4e8;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledNavLink to="/">
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      )}
    </Nav>
  );
};
