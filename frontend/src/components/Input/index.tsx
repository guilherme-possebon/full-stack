import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer, InputField, Label } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: "text" | "email" | "password" | "number" | "tel" | "textarea";
  name: string;
  register: UseFormRegister<FieldValues>;
}

export function Input({ label, type, name, register, ...rest }: InputProps) {
  return (
    <>
      <InputContainer>
        <Label htmlFor={name}>{label}</Label>
        <InputField
          type={type}
          id={name}
          {...rest}
          {...register(name)}
          name={name}
        />
      </InputContainer>
    </>
  );
}
