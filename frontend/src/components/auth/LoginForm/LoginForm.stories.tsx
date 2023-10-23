import { Meta } from '@storybook/react';
import { LoginForm } from '.';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <LoginForm />;
