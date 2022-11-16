import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const User = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user)
        setUser({
          photoURL: user.photoURL,
          name: user.displayName,
          phone: user.phoneNumber,
          email: user.email,
        });
    });
  }, []);

  function setUserDetail(user) {
    setUser({
      photoURL: user.photoURL,
      name: user.displayName,
      phone: user.phoneNumber,
      email: user.email,
    });
  }

  function updateUserDetail(user) {
    updateProfile(auth.currentUser, user).then(() => console.log("updated"));
  }

  async function signup(email, password) {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    setUserDetail(data.user);
  }

  async function login(email, password) {
    const data = await signInWithEmailAndPassword(auth, email, password);
    setUserDetail(data.user);
  }

  function logout() {
    signOut(auth).then(() => setUser());
  }

  const value = { user, setUser, login, signup, updateUserDetail, logout };

  return <User.Provider value={value}>{children}</User.Provider>;
};

export default UserContext;
