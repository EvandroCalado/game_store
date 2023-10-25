import { Meta, StoryFn } from '@storybook/react';
import { AddressForm, AddressFormProps } from '.';

export default {
  title: 'Components/AddressForm',
  component: AddressForm,
  args: {
    onClose: () => {},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AddressFormProps> = (args) => (
  <AddressForm {...args} />
);
