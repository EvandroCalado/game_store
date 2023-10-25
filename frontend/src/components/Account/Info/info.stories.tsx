import { Meta } from '@storybook/react';
import { Info } from '.';

export default {
  title: 'Components/Info',
  component: Info,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Info />;
