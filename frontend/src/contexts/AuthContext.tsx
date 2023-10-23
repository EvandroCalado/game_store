import { createContext, useEffect, useState } from 'react';
import { Token, User } from '../api';

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthContextProps = {
  accessToken: string;
  user: object;
  login: (accessToken: string) => void;
  logout: () => void;
  updateUser: (key: string, value: string) => void;
};

const initialData = {
  accessToken: '',
  user: {},
  login: (accessToken: string) => {
    console.log(accessToken);
  },
  logout: () => {},
  updateUser: (key: string, value: string) => {
    console.log(key);
    console.log(value);
  },
};

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext(initialData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
        setLoading(false);
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (accessToken: string) => {
    try {
      tokenCtrl.setToken(accessToken);

      const response = await userCtrl.getMe();

      setUser(response);

      setAccessToken(accessToken);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const logout = () => {
    tokenCtrl.removeToken();
    setAccessToken('');
    setUser('');
  };

  const updateUser = (key: string, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const data = {
    accessToken,
    user,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
