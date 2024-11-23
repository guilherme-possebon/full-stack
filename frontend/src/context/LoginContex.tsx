import {
  createContext,
  FunctionComponent,
  ReactElement,
  useState,
} from "react";

interface ILoginProviderProps {
  children: ReactElement;
}

interface ILoginProps {
  email: string;
  password: string;
  name: string;

  saveUser: (email: string, password: string, name: string) => void;
}

export const LoginContext = createContext({} as ILoginProps);

export const LoginProvider: FunctionComponent<ILoginProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  function saveUser(email: string, password: string, name: string) {
    setUser({
      email: email,
      password: password,
      name: name,
    });

    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <LoginContext.Provider
      value={
        {
          email: user.email,
          password: user.password,
          name: user.name,
          saveUser: saveUser,
        } as ILoginProps
      }
    >
      {children}
    </LoginContext.Provider>
  );
};
