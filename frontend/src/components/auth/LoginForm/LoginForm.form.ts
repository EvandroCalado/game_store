import * as Yup from 'yup';

export type LoginProps = {
  identifier: string;
  password: string;
};

export function initialValues(): LoginProps {
  return {
    identifier: '',
    password: '',
  };
}

export function validationSchema() {
  return Yup.object().shape({
    identifier: Yup.string()
      .email('Email inválido')
      .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });
}
