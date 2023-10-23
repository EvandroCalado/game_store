import { Meta, StoryFn } from '@storybook/react';
import { Menu, MenuProps } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<MenuProps> = () => <Menu />;
