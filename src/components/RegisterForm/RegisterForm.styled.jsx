import styled from 'styled-components';

const Form = styled.form`
  /* Стили для формы */
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  /* Стили для метки */
  margin-bottom: 10px;
`;

const Input = styled.input`
  /* Стили для текстового поля ввода */
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  /* Стили для кнопки */
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export { Form, Label, Input, Button };