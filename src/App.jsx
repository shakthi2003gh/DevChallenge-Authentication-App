import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { User } from "./context/userAuthContext";
import Home from "./page/home";
import SignupSection from "./sections/signup";
import LoginSection from "./sections/login";

function App() {
  const { user } = useContext(User);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/signup");
    else navigate("/profile");
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
