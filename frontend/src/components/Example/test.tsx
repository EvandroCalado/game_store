import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Example from '.';

describe('<Example />', () => {
  it('should render', () => {
    const { container } = render(<Example />);
    expect(
      screen.getByRole('heading', { name: 'Example' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
