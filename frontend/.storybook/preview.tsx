import type { Preview } from '@storybook/react';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AuthProvider } from '../src/contexts';
import '../src/scss/globals.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <AuthProvider>
      <Story />
    </AuthProvider>
  ),
];

export default preview;
