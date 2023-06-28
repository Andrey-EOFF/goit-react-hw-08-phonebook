import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AuthNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const NavItem = styled(NavLink)`
  padding: 10px;
  margin: 0 10px;
  color: #62b4e8;
  background-color: #333333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #62b4e8;
    color: #ffffff;
  }

  &.active {
    background-color: #62b4e8;
    color: #ffffff;
  }
`;

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </AuthNavWrapper>
  );
};
