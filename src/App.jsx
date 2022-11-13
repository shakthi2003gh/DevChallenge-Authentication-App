import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { User } from "./context/userAuthContext";
import SignupSection from "./sections/signup";
import LoginSection from "./sections/login";

function App() {
  const { user } = useContext(User);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/signup");
    else navigate("/");
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/login" element={<LoginSection />} />
      </Routes>
    </>
  );
}

export default App;
