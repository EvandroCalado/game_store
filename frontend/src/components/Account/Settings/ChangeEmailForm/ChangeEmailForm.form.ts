import * as Yup from 'yup';

export function initialChangeNameFormValues() {
  return {
    email: '',
    repetEmail: '',
  };
}

export function validationSchema() {
  return Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    repetEmail: Yup.string()
      .email('Email inválido')
      .required('Repetir email obrigatório')
      .oneOf([Yup.ref('email')], 'Não corresponde ao email'),
  });
}
