import { Button } from 'semantic-ui-react';
import styles from './styles.module.scss';

export type ExampleProps = {
  title?: string;
};

export default function Example({ title = 'Example' }: ExampleProps) {
  return (
    <div>
      <h1>{title}</h1>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <button className={styles.textColor}>Scss</button>
    </div>
  );
}
