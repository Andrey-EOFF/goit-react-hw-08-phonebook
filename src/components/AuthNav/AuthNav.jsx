import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AuthNavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NavItem = styled(NavLink)`
  padding: 10px;
  margin: 0 10px;
  color: #fff;
  background-color: #ffc107;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffca2e;
  }

  &.active {
    background-color: #ff8c00;
  }
`;

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <NavItem to="/register">
        Register
      </NavItem>
      <NavItem to="/login">
        Log In
      </NavItem>
    </AuthNavWrapper>
  );
};