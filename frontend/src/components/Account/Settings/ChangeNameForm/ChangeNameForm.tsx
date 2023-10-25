import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { User } from '../../../../api';
import { useAuth } from '../../../../hooks';
import {
  initialChangeNameFormValues,
  validationSchema,
} from './ChangeNameForm.form';
import styles from './ChangeNameForm.module.scss';

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialChangeNameFormValues(''),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await userCtrl.updateMe(user.id, values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nome de usuário</label>

      <div className={styles.content}>
        <Form.Input
          name="username"
          placeholder="Novo nome de usuário"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Button
          type="submit"
          loading={formik.isSubmitting}
          className={styles.button}
        >
          Enviar
        </Form.Button>
      </div>
    </Form>
  );
}
