import { api } from "@/lib/axios";
import { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  user: User;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface User {
  login: string;
  avatar_url: string;
  id: number;
  bio: string | null;
  company: string | null;
  followers: number;
  name: string;
}

export const UserContext = createContext({} as UserContextType);

export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState({} as User);

  async function fetchUser() {
    const response = await api.get("/users/gustavogarciac");

    const { name, login, avatar_url, id, bio, company, followers } =
      response.data;

    setUser({
      login,
      avatar_url,
      id,
      bio,
      company,
      followers,
      name,
    });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
