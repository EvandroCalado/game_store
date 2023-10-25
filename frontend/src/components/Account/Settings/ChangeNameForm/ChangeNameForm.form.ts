import * as Yup from 'yup';

export function initialChangeNameFormValues(username: string) {
  return {
    username,
  };
}

export function validationSchema() {
  return Yup.object().shape({
    username: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Apelido obrigatório'),
  });
}
