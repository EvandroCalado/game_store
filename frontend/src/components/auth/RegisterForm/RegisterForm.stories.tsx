import { Meta } from '@storybook/react';
import { RegisterForm } from '.';

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <RegisterForm />;
