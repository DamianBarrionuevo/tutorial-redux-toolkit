import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <header>
      <h1>Redux Toolkit Tutorial</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Username: {user.username}</li>
      </ul>
    </header>
  );
};
