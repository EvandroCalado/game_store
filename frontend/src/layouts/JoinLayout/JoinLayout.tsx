import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon, Image } from 'semantic-ui-react';
import { useAuth } from '../../hooks';
import styles from './JoinLayout.module.scss';

export type JoinLayoutProps = {
  children: React.ReactNode;
};

export function JoinLayout({ children }: JoinLayoutProps) {
  const router = useRouter();
  const { user } = useAuth();

  if (user) {
    router.push('/');
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href={'/'}>
          <Image src="/logo.png" alt="Gaming" />
        </Link>
        <Link href={'/'}>
          <Icon name="close" />
        </Link>
      </div>
      <div className={styles.blockLeft}>{children}</div>
      <div className={styles.blockRight}></div>
    </div>
  );
}
