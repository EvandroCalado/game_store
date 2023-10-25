import { Meta } from '@storybook/react';
import { AddAddress } from '.';

export default {
  title: 'Components/AddAddress',
  component: AddAddress,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <AddAddress />;
