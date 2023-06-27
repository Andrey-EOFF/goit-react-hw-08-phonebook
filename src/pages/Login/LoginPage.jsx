import { LoginForm } from "components/LoginForm/LoginForm";
import { LoginWrapper, Title } from "./LoginPage.styled";


export default function Login() {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <LoginForm />
    </LoginWrapper>
  );
}