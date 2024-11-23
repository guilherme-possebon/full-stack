import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import {
  ButtonContainer,
  FormContainer,
  LoginContainer,
  LoginTitle,
} from "./styles";
import { loginApi } from "../../api/loginApi";
import { LoginContext } from "../../context/LoginContex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { register, handleSubmit } = useForm();

  const { saveUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const submitForm = async (data: any) => {
    const response = await loginApi(data);
    saveUser(response.email, response.poassword, response.name);
    navigate("/");
    console.log(response);
  };

  return (
    <LoginContainer>
      <LoginTitle>Faça seu login na aplicação</LoginTitle>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
        <Input label="E-mail" type="email" name="email" register={register} />
        <Input
          label="Password"
          type="password"
          name="password"
          register={register}
        />
        <ButtonContainer>
          <button type="submit">Entrar</button>
        </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  );
}
