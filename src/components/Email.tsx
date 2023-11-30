import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { changeEmail } from "../redux/userSlice";

export const Email = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);
  function handleChangeEmail(e: any) {
    dispatch(changeEmail(e.target.value));
  }

  return (
    <input
      type="email"
      value={email}
      placeholder="Email"
      onChange={handleChangeEmail}
    />
  );
};
