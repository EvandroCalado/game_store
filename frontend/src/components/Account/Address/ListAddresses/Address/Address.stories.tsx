import { Meta, StoryFn } from '@storybook/react';
import { Address, AddressProps } from '.';

export default {
  title: 'Components/Addresses',
  component: Address,
  args: {
    address: {
      id: 1,
      attributes: {
        title: 'Endereço de teste',
        name: 'Nome de teste',
        address: 'Endereço de teste',
        city: 'Cidade de teste',
        state: 'Estado de teste',
        postalCode: '12345-678',
        phone: '123456789',
      },
    },
    addressId: 1,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AddressProps> = (args) => <Address {...args} />;
