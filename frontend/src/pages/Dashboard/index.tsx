import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContex";

export function Dashboard() {
  const userContext = useContext(LoginContext);
  const navigate = useNavigate();

  const migrarParaHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{userContext.email}</h2>
      <h2>{userContext.name}</h2>
      <h2>{userContext.password}</h2>
      <button onClick={migrarParaHome}>Home</button>
    </div>
  );
}
