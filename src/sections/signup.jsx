import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import RegisterTemplate from "../components/registerForm";
import { User } from "../context/userAuthContext";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(User);

  const buttonLabel = "Start coding now";
  const headSection = (
    <>
      <h1>Join thousands of learners from around the world</h1>

      <p className="sub-heading">
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>
    </>
  );
  const alterNativeOption = (
    <p>
      Already a member? <Link to="/login">Login</Link>
    </p>
  );

  const handleSubmit = () => {
    signup(email, password);
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

export default SignupSection;
