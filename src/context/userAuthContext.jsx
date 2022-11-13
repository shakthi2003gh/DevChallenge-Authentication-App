import { createContext, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const User = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();

  async function signup(email, password) {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    setUser(data.user);
  }

  async function login(email, password) {
    const data = await signInWithEmailAndPassword(auth, email, password);
    setUser(data.user);
  }

  const value = { user, setUser, login, signup };

  return <User.Provider value={value}>{children}</User.Provider>;
};

export default UserContext;
