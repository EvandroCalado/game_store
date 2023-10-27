import { Meta } from '@storybook/react';
import { BarTrust } from '.';

export default {
  title: 'Components/BarTrust',
  component: BarTrust,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <BarTrust />;
