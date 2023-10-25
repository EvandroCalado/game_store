import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { User } from '../../../../api';
import { useAuth } from '../../../../hooks';
import {
  initialChangePasswordFormValues,
  validationSchema,
} from './ChangePasswordForm.form';
import styles from './ChangePasswordForm.module.scss';

const userCtrl = new User();

export function ChangePasswordForm() {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialChangePasswordFormValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, { password: values.password });
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Mudar senha</label>

      <Form.Input
        name="password"
        type="password"
        placeholder="Nova senha"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input
        name="confirmPassword"
        type="password"
        placeholder="Confirme Nova senha"
        valur={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={formik.errors.confirmPassword}
      />

      <Form.Button type="submit" loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
