// src/context/AuthContext.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth } from "../../config/firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const register = async ({ email, password, firstName, lastName }) => {
    setAuthError(null);
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    const displayName = [firstName, lastName].filter(Boolean).join(" ");
    if (displayName) {
      await updateProfile(cred.user, { displayName });

      setUser({ ...cred.user, displayName });
    }

    return cred.user;
  };

  const login = async ({ email, password }) => {
    setAuthError(null);
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
  };

  const logout = async () => {
    setAuthError(null);
    await signOut(auth);
  };

  const value = useMemo(
    () => ({ user, loading, authError, setAuthError, register, login, logout }),
    [user, loading, authError],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
