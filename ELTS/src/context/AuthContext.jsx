/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      setRole("admin");
      setUser({ username: "admin", name: "Administrator" });
      setIsLoggedIn(true);
      return true;
    } else if (username === "student" && password === "student") {
      setRole("student");
      setUser({ username: "student", name: "Student User" });
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    setUser(null);
  };

  const addApplication = (application) => {
    setApplications(prev => [...prev, { ...application, id: Date.now(), status: 'Pending' }]);
  };

  const updateApplicationStatus = (id, status) => {
    setApplications(prev => prev.map(app => app.id === id ? { ...app, status } : app));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, user, login, logout, applications, addApplication, updateApplicationStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
