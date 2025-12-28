/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState("student"); // default role

  const switchToStudent = () => setRole("student");
  const switchToAdmin = () => setRole("admin");

  return (
    <AuthContext.Provider value={{ role, switchToStudent, switchToAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
