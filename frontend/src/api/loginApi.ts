interface IloginApiProps {
  email: string;
  password: string;
}

export function loginApi({ email, password }: IloginApiProps) {
  console.log(email + " " + password);

  return {
    name: "Guilherme Possebon",
    email: "gpossebon67@gmail.com",
    poassword: "teste",
  };
}
