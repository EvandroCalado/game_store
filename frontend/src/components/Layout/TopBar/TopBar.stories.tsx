import { Meta, StoryFn } from '@storybook/react';
import { TopBar, TopBarProps } from '.';

export default {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<TopBarProps> = () => <TopBar />;
