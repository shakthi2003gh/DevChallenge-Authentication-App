import { createContext, useEffect, useState } from "react";
import { auth, storage } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const User = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user)
        setUser({
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
          bio: user.providerData[0].bio || "",
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

  async function updateUserDetail(updateUser) {
    async function storeImage(userID, Blob) {
      const fileLocation = "profile/" + userID + "/" + Blob.name;
      const storageRef = ref(storage, fileLocation);

      await uploadBytes(storageRef, Blob);
      return await getImageUrl(storageRef);
    }

    async function getImageUrl(ref) {
      const url = await getDownloadURL(ref);
      return url;
    }

    async function getUpdateObject() {
      const obj = { ...updateUser };

      if (updateUser && updateUser.photoURL)
        obj.photoURL = await storeImage(user.uid, updateUser.photoURL);

      return obj;
    }

    const obj = await getUpdateObject();

    Object.keys(obj).length &&
      updateProfile(auth.currentUser, obj).then(() => {
        setUser((prev) => ({ ...prev, ...obj }));
        console.log("updated");
      });
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
