import styles from './NoResult.module.scss';

export type NoResultProps = {
  text: string;
};

export function NoResult(props: NoResultProps) {
  const { text } = props;

  return (
    <div className={styles.noResult}>
      <p>{text}</p>
    </div>
  );
}
