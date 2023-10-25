import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { User } from '../../../../api';
import { useAuth } from '../../../../hooks';
import {
  initialChangeNameFormValues,
  validationSchema,
} from './ChangeEmailForm.form';
import styles from './ChangeEmailForm.module.scss';

const userCtrl = new User();

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth();

  const formik = useFormik({
    initialValues: initialChangeNameFormValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, { email: values.email });
        updateUser('email', values.email);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Mudar email</label>

      <Form.Input
        name="email"
        placeholder="Novo email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="repetEmail"
        placeholder="Repetir email"
        value={formik.values.repetEmail}
        onChange={formik.handleChange}
        error={formik.errors.repetEmail}
      />

      <Form.Button type="submit" loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
