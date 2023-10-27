import { Meta, StoryFn } from '@storybook/react';
import { BannerAd, BannerAdProps } from '.';

export default {
  title: 'Components/BannerAd',
  component: BannerAd,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BannerAdProps> = () => <BannerAd />;
