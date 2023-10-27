import { Meta, StoryFn } from '@storybook/react';
import { GridGames, GridGamesProps } from '.';

export default {
  title: 'Components/GridGames',
  component: GridGames,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<GridGamesProps> = () => <GridGames />;
