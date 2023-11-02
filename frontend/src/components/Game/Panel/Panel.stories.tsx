import { Meta, StoryFn } from '@storybook/react';
import { Panel } from '.';

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PanelProps> = () => <Panel />;
