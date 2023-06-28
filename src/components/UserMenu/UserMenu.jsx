import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import styled from 'styled-components';


const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WelcomeText = styled.p`
  margin-right: 10px;
  
`;

const LogoutButton = styled.button`
  padding: 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrapper>
      <WelcomeText>Welcome, {user.name}</WelcomeText>
      <LogoutButton type="button" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </UserMenuWrapper>
  );
};
