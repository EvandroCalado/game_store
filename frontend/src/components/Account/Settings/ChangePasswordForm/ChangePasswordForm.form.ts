import * as Yup from 'yup';

export function initialChangePasswordFormValues() {
  return {
    password: '',
    confirmPassword: '',
  };
}

export function validationSchema() {
  return Yup.object().shape({
    password: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Senha obrigatória'),
    confirmPassword: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Confirmação de senha obrigatória')
      .oneOf([Yup.ref('password')], 'Senha não confere'),
  });
}
