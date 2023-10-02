import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Secrete/firebaseauth";

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const signUpWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (name, photolink) => {
    const userInfo = {
      displayName: name,
      photoURL: photolink,
    };
    return updateProfile(auth.currentUser, userInfo);
  };

  const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

  const changePassword = (password) =>
    updatePassword(auth.currentUser, password);

  const changeMail = (email) => updateEmail(auth.currentUser, email);

  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };

  const authInfo = {
    loading,
    user,
    auth,
    googleSignIn,
    signUpWithEmailAndPassword,
    logIn,
    updateNameAndPhoto,
    forgotPassword,
    changePassword,
    changeMail,
    logOut,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
