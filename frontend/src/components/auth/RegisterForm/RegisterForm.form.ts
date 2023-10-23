import * as Yup from 'yup';

export type RegisterProps = {
  email: string;
  username: string;
  name: string;
  password: string;
};

export function initialValues(): RegisterProps {
  return {
    email: '',
    username: '',
    name: '',
    password: '',
  };
}

export function validationSchema() {
  return Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    username: Yup.string()
      .min(3, 'Minimo de 3 letras')
      .max(20, 'Maximo de 20 letras')
      .required('Campo obrigatório'),
    name: Yup.string()
      .min(3, 'Minimo de 3 letras')
      .max(20, 'Maximo de 20 letras')
      .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });
}
