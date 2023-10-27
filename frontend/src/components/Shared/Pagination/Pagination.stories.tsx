import { Meta, StoryFn } from '@storybook/react';
import { Pagination, PaginationProps } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PaginationProps> = (args) => (
  <Pagination {...args} />
);
