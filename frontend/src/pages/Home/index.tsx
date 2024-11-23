import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContex";
import { useNavigate } from "react-router-dom";

interface IUserProps {
  email: string;
  name: string;
  password: string;
}

export function Home() {
  const { name, email, password, saveUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const userLocalStorageVerification = () => {
    const user = localStorage.getItem("user");

    if (user) {
      console.log("user");
      const userParsed: IUserProps = JSON.parse(user);
      console.log(userParsed.email);
      if (!userParsed.email) {
        console.log("email");
        saveUser(userParsed?.email, userParsed?.name, userParsed?.password);
      } else {
        console.log("navigate");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    userLocalStorageVerification();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <h2>{email}</h2>
      <h2>{name}</h2>
      <h2>{password}</h2>
    </>
  );
}
