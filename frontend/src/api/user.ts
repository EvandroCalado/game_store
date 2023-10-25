import { ENV, authFetch } from '../utils';

export class User {
  async getMe() {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS.ME}`;

    const response = await authFetch(url);
    const result = await (response as Response).json();

    if ((response as Response).status !== 200) throw result;

    return result;
  }

  async updateMe(userId: number, data: object) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS.UPDATE}/${userId}`;

    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await authFetch(url, params);

    const result = await (response as Response).json();

    if ((response as Response).status !== 200) throw result;

    return result;
  }
}
