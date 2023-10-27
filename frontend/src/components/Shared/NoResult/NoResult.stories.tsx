import { Meta, StoryFn } from '@storybook/react';
import { NoResult, NoResultProps } from '.';

export default {
  title: 'Components/NoResult',
  component: NoResult,
  args: {
    text: 'Nenhum resultado encontrado',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<NoResultProps> = (args) => <NoResult {...args} />;
