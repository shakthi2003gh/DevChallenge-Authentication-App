import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterTemplate from "./../components/registerForm";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonLabel = "Login";
  const headSection = <h1>Login</h1>;
  const alterNativeOption = (
    <p>
      Don't have an account yet? <Link to="/signup">Register</Link>
    </p>
  );

  const handleSubmit = () => {};

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
