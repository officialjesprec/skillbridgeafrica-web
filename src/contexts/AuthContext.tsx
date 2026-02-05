import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  type: "learner" | "trainer";
}

interface AuthContextType {
  user: User | null;
  login: (phone: string, password: string, userType: "learner" | "trainer") => Promise<boolean>;
  signup: (userData: any, userType: "learner" | "trainer") => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("currentUser");
      }
    }
    setIsLoading(false);
  }, []);

  const signup = async (userData: any, userType: "learner" | "trainer"): Promise<boolean> => {
    try {
      const usersKey = userType === "learner" ? "learners" : "trainers";
      const existingUsers = JSON.parse(localStorage.getItem(usersKey) || "[]");

      if (existingUsers.some((u: any) => u.phone === userData.phone)) {
        alert("A user with this phone number already exists!");
        return false;
      }

      const newUser = { id: Date.now().toString(), ...userData, type: userType };
      existingUsers.push(newUser);
      localStorage.setItem(usersKey, JSON.stringify(existingUsers));

      const currentUser = { id: newUser.id, name: newUser.name, phone: newUser.phone, type: userType };
      setUser(currentUser);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      navigate(userType === "learner" ? "/dashboard/learner" : "/dashboard/trainer");
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const login = async (phone: string, password: string, userType: "learner" | "trainer"): Promise<boolean> => {
    try {
      const usersKey = userType === "learner" ? "learners" : "trainers";
      const users = JSON.parse(localStorage.getItem(usersKey) || "[]");
      const foundUser = users.find((u: any) => u.phone === phone && u.password === password);

      if (!foundUser) {
        alert("Invalid credentials!");
        return false;
      }

      const currentUser = { id: foundUser.id, name: foundUser.name, phone: foundUser.phone, type: userType };
      setUser(currentUser);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      navigate(userType === "learner" ? "/dashboard/learner" : "/dashboard/trainer");
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const value = useMemo(
    () => ({ user, login, signup, logout, isAuthenticated: !!user, isLoading }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};