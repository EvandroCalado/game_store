import { Meta, StoryFn } from '@storybook/react';
import { BasicLayout, BasicLayoutProps } from '.';

export default {
  title: 'Components/BasicLayout',
  component: BasicLayout,
  args: {
    children: <div>Basic Layout</div>,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BasicLayoutProps> = (args) => (
  <BasicLayout {...args} />
);
