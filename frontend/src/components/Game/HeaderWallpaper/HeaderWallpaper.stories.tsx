import { Meta, StoryFn } from '@storybook/react';
import { HeaderWallpaper, HeaderWallpaperProps } from '.';

export default {
  title: 'Components/HeaderWallpaper',
  component: HeaderWallpaper,
  args: {
    image:
      'https://res.cloudinary.com/dx2lwce8m/image/upload/v1697805807/god_of_war_ragnarok_ps5_wallpaper_c695e221a6.jpg',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<HeaderWallpaperProps> = (args) => (
  <HeaderWallpaper {...args} />
);
