import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";

function Home() {
  return (
    <>
      <h1>Bem vindo - Home</h1>
      <Link to="/">
        <Button>Login</Button>
      </Link>
    </>
  );
}

export default Home;
