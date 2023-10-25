import { Meta, StoryFn } from '@storybook/react';
import { BasicModal, BasicModalProps } from '.';

export default {
  title: 'Components/BasicModal',
  component: BasicModal,
  args: {
    children: <h1>Basic Modal</h1>,
    showModal: true,
    onClose: () => {},
    title: 'Basic Modal',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BasicModalProps> = (args) => (
  <BasicModal {...args} />
);
