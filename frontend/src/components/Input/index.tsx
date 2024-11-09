import { InputContainer, InputField, Label } from "./styles";

interface InputProps {
  label: string;
  type: "text" | "email" | "password" | "number" | "tel" | "textarea";
}

export function Input({ label, type }: InputProps) {
  return (
    <>
      <InputContainer>
        <Label htmlFor={label}>{label}</Label>
        <InputField type={type} id={label} />
      </InputContainer>
    </>
  );
}
