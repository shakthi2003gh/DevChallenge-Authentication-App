import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../context/userAuthContext";
import RegisterTemplate from "./../components/registerForm";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(User);

  const buttonLabel = "Login";
  const headSection = <h1>Login</h1>;
  const alterNativeOption = (
    <p>
      Don't have an account yet? <Link to="/signup">Register</Link>
    </p>
  );

  const handleSubmit = () => {
    login(email, password);
    setEmail("");
    setPassword("");
  };

  const props = {
    headSection,
    buttonLabel,
    alterNativeOption,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };

  return <RegisterTemplate {...props} />;
};

export default LoginSection;
