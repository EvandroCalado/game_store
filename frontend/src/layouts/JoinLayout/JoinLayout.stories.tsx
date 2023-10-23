import { Meta, StoryFn } from '@storybook/react';
import { JoinLayout, JoinLayoutProps } from '.';

export default {
  title: 'Components/JoinLayout',
  component: JoinLayout,
  args: {
    children: 'Join Layout',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<JoinLayoutProps> = (args) => (
  <JoinLayout {...args} />
);
