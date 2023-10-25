import { Meta } from '@storybook/react';
import { ChangePasswordForm } from '.';

export default {
  title: 'Components/ChangePasswordForm',
  component: ChangePasswordForm,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <ChangePasswordForm />;
