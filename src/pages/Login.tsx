import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";

function Login() {
  return (
    <>
      <h1>Bem vindo - login</h1>
      <Link to="/list">
        <Button>List</Button>
      </Link>
    </>
  );
}

export default Login;
