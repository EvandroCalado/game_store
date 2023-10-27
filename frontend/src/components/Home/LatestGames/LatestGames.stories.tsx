import { Meta, StoryFn } from '@storybook/react';
import { LatestGames, LatestGamesProps } from '.';

export default {
  title: 'Components/LatestGames',
  component: LatestGames,
  args: {
    title: 'LatestGames',
    limit: 3,
    platformId: null,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<LatestGamesProps> = (args) => (
  <LatestGames {...args} />
);
