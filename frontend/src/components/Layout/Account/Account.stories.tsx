import { Meta } from '@storybook/react';
import { Account } from '.';

export default {
  title: 'Components/Account',
  component: Account,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Account />;
