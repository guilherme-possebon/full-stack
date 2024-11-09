import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import {
  ButtonContainer,
  FormContainer,
  LoginContainer,
  LoginTitle,
} from "./styles";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <LoginContainer>
        <LoginTitle>Faça seu login na aplicação</LoginTitle>
        <FormContainer onSubmit={handleSubmit(submitForm)}>
          <Input label="E-mail" type="email" {...register("email")} />
          <Input label="Senha" type="password" {...register("password")} />
          <ButtonContainer>
            <button type="submit">Entrar</button>
          </ButtonContainer>
        </FormContainer>
      </LoginContainer>
    </>
  );
}
