import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e2e1e1;
  border-radius: 5px;
  color: #444444;
  background-color: #f7f7f7;
  animation: ${fadeIn} 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  & > span {
    margin-bottom: 5px;
    font-weight: 700;
  }

  & > input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #e2e1e1;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #62b4e8;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #218838;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e7f34;
  }
`;

export { Form, Label, Button };
