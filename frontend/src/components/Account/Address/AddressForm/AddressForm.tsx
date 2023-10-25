import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { Address } from '../../../../api';
import { useAuth } from '../../../../hooks';
import { TypeAddress } from '../../../../types';
import { initalAddressFormValues, validationSchema } from './AddressForm.form';

const addressCtrl = new Address();

export type AddressFormProps = {
  onClose: () => void;
  onRealod: () => void;
  addressId?: number;
  address?: TypeAddress;
};

export function AddressForm({
  onClose,
  onRealod,
  addressId,
  address,
}: AddressFormProps) {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initalAddressFormValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        if (addressId) {
          await addressCtrl.update(values, addressId);
        } else {
          await addressCtrl.create(values, user.id);
        }

        formik.resetForm();
        onRealod();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Título do endereço"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />

      <Form.Group widths={'equal'}>
        <Form.Input
          name="name"
          placeholder="Nome"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="address"
          placeholder="Endereço"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address}
        />
      </Form.Group>

      <Form.Group widths={'equal'}>
        <Form.Input
          name="state"
          placeholder="Estado"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        />
        <Form.Input
          name="city"
          placeholder="Cidade"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />
      </Form.Group>

      <Form.Group widths={'equal'}>
        <Form.Input
          name="postalCode"
          placeholder="CEP"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.errors.postalCode}
        />
        <Form.Input
          name="phone"
          placeholder="Telefone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
