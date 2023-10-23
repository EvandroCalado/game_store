import { LoginProps } from '../components/auth/LoginForm/LoginForm.form';
import { RegisterProps } from '../components/auth/RegisterForm/RegisterForm.form';
import { ENV } from '../utils/';

export class Auth {
  async register(valuers: RegisterProps) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valuers),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

  async login(valuers: LoginProps) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valuers),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }
}
