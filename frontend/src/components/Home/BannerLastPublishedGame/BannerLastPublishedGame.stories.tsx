import { Meta } from '@storybook/react';
import { BannerLastPublishedGame } from './BannerLastPublishedGame';

export default {
  title: 'Components/BannerLastPublishedGame',
  component: BannerLastPublishedGame,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <BannerLastPublishedGame />;
