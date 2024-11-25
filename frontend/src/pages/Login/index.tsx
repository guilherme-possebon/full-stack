import { useContext } from "react";
import { loginApi } from "../../api/loginApi";
import { Input } from "../../components/Input";
import {
  ButtonContainer,
  FormContainer,
  LoginContainer,
  LoginTitle,
} from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContex";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const userContext = useContext(LoginContext);
  const navigate = useNavigate();

  const submitForm = async (data: any) => {
    const response = await loginApi(data);
    userContext.saveUser(response.email, response.name, response.password);

    navigate("/");
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
