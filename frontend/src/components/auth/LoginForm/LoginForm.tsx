import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { Auth } from '../../../api';
import { useAuth } from '../../../hooks';
import { initialValues, validationSchema } from './LoginForm.form';

const authCtrl = new Auth();

export function LoginForm() {
  // const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await authCtrl.login(values);
        login(response.jwt);

        // router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="email"
        placeholder="Email"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Senha"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Entrar
      </Form.Button>
    </Form>
  );
}
