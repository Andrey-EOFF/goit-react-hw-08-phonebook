import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #e2e1e1;
  border-radius: 5px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #444444;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  border: 1px solid #e2e1e1;
  border-radius: 4px;
  color: #444444;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #62b4e8;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export { Form, Label, Input, Button };
