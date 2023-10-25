import { Meta, StoryFn } from '@storybook/react';
import { Separator, SeparatorProps } from '.';

export default {
  title: 'Components/Separator',
  component: Separator,
  args: {
    height: 10,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<SeparatorProps> = (args) => (
  <Separator {...args} />
);
