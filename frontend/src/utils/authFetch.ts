import { Token } from '../api';

type ParamsProps = {
  method?: string;
  headers?: {
    [key: string]: string;
  };
  body?: string;
};

export async function authFetch(url: string, params: ParamsProps = {}) {
  const tokenCtrl = new Token();
  const accessToken = tokenCtrl.getToken();

  const logout = () => {
    tokenCtrl.removeToken();
    window.location.replace('/');
  };

  if (!accessToken) {
    logout();
  } else {
    if (tokenCtrl.hasExpired(accessToken)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${accessToken}`,
        },
      };

      try {
        const response = await fetch(url, paramsTemp);

        return response;
      } catch (error) {
        return error;
      }
    }
  }
}
