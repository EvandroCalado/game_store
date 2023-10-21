import { Meta, StoryFn } from '@storybook/react';
import { Example, ExampleProps } from '.';

export default {
  title: 'Components/Example',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ExampleProps> = () => <Example />;
