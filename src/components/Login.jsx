import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div className="p-6 text-center">
      <button
        onClick={() => dispatch(login({ email: "user@email.com" }))}
        className="bg-black text-white px-6 py-2 rounded">
        Login
      </button>
    </div>
  );
}
