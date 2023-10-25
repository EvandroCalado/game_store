export const ENV = {
  SERVER_HOST: process.env.NEXT_PUBLIC_SERVER_HOST || 'http://localhost:1337',
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
  ENDPOINTS: {
    AUTH: {
      REGISTER: process.env.NEXT_PUBLIC_REGISTER,
      LOGIN: process.env.NEXT_PUBLIC_LOGIN,
    },
    USERS: {
      ME: process.env.NEXT_PUBLIC_ME,
      UPDATE: process.env.NEXT_PUBLIC_UPDATE,
    },
    PLATFORM: process.env.NEXT_PUBLIC_PLATFORM,
    ADDRESS: process.env.NEXT_PUBLIC_ADDRESS,
  },
  TOKEN: 'token',
};
