import * as Yup from 'yup';
import { TypeAddress } from '../../../../types';

const initialValues = {
  id: 0,
  attributes: {
    title: '',
    name: '',
    address: '',
    state: '',
    city: '',
    postalCode: '',
    phone: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  },
};

export function initalAddressFormValues(address: TypeAddress = initialValues) {
  return {
    title: address.attributes.title,
    name: address.attributes.name,
    address: address.attributes.address,
    state: address.attributes.state,
    city: address.attributes.city,
    postalCode: address.attributes.postalCode,
    phone: address.attributes.phone,
  };
}

export function validationSchema() {
  return Yup.object().shape({
    title: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Título obrigatório'),
    name: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Apelido obrigatório'),
    address: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(50, 'Máximo de 50 caracteres')
      .required('Endereço obrigatório'),
    state: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Estado obrigatório'),
    city: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Cidade obrigatória'),
    postalCode: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .required('Cidade obrigatória'),
    phone: Yup.number().required('Número de telefone obrigatório'),
  });
}
