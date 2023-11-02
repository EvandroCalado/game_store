import { useContext } from 'react';
import { AuthContext, AuthContextProps } from '../contexts';

// TODO: Consertar type
export const useAuth = (): AuthContextProps => useContext(AuthContext);
