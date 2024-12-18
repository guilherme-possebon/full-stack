import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContex";

export function Home() {
  const userContext = useContext(LoginContext);
  const navigate = useNavigate();

  const migrarParaDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>{userContext.email}</h2>
      <h2>{userContext.name}</h2>
      <h2>{userContext.password}</h2>
      <button onClick={migrarParaDashboard}>Dashboard</button>
    </div>
  );
}
