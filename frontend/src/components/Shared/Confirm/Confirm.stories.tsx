import { Meta, StoryFn } from '@storybook/react';
import { Confirm, ConfirmProps } from '.';

export default {
  title: 'Components/Confirm',
  component: Confirm,
  args: {
    children: <p>Test</p>,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ConfirmProps> = (args) => <Confirm {...args} />;
