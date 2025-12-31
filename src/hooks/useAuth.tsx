import { useState, useEffect, createContext, useContext, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("careerpath_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem("careerpath_users") || "[]");
    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );
    
    if (foundUser) {
      const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
      setUser(userData);
      localStorage.setItem("careerpath_user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem("careerpath_users") || "[]");
    const exists = users.some((u: any) => u.email === email);
    
    if (exists) {
      return false;
    }

    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("careerpath_users", JSON.stringify(users));

    const userData = { id: newUser.id, name: newUser.name, email: newUser.email };
    setUser(userData);
    localStorage.setItem("careerpath_user", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("careerpath_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}