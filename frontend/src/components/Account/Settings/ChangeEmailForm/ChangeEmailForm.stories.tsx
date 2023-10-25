import { Meta } from '@storybook/react';
import { ChangeEmailForm } from '.';

export default {
  title: 'Components/ChangeEmailForm',
  component: ChangeEmailForm,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <ChangeEmailForm />;
