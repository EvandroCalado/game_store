import Link from 'next/link';
import { Image } from 'semantic-ui-react';
import { Account, Menu } from '..';
import styles from './TopBar.module.scss';

export type TopBarProps = {
  isOpenSearch?: boolean;
};

export function TopBar({ isOpenSearch }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/logo.png" alt="Gaming" />
        </Link>
      </div>

      <div className={styles.center}>
        <Menu isOpenSearch={isOpenSearch} />
      </div>

      <div className={styles.right}>
        <Account />
      </div>
    </div>
  );
}
