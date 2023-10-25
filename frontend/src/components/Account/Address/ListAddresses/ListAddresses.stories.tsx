import { Meta } from '@storybook/react';
import { ListAddresses } from '.';

export default {
  title: 'Components/ListAddresses',
  component: ListAddresses,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <ListAddresses />;
