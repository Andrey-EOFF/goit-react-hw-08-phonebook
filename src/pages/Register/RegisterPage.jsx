import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterWrapper, Title } from './RegisterPage.styled';

export default function Register() {
  return (
    <RegisterWrapper>
      <Title>Registration</Title>
      <RegisterForm />
    </RegisterWrapper>
  );
}
