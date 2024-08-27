import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";

function List() {
  return (
    <>
      <h1>Bem vindo - List</h1>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
    </>
  );
}

export default List;
