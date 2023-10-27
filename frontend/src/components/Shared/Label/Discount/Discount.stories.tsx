import { Meta, StoryFn } from '@storybook/react';
import { Discount, DiscountProps } from '.';

export default {
  title: 'Components/Discount',
  component: Discount,
  args: {
    children: 20,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<DiscountProps> = (args) => <Discount {...args} />;
