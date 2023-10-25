import { ENV, authFetch } from '../utils';

export class Address {
  async create(data: object, userId: number) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          ...data,
          user: userId,
        },
      }),
    };

    const response = await authFetch(url, params);

    const result = await (response as Response).json();

    if ((response as Response).status !== 200) throw result;

    return result;
  }

  async getAll(userId: number) {
    const filters = `filters[user][id][$eq]=${userId}`;
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`;

    const response = await authFetch(url);

    const result = await (response as Response).json();

    if ((response as Response).status !== 200) throw result;

    return result;
  }

  async update(data: object, addressId: number) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    };

    const response = await authFetch(url, params);

    const result = await (response as Response).json();

    if ((response as Response).status !== 200) throw result;

    return result;
  }

  async delete(addressId: number) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
    const params = {
      method: 'DELETE',
    };

    const response = await authFetch(url, params);

    const result = await (response as Response).json();

    if ((response as Response).status !== 200) throw result;

    return result;
  }
}
