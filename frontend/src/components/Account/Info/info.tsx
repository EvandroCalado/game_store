import { Button, Icon } from 'semantic-ui-react';
import { useAuth } from '../../../hooks';
import { formatDate } from '../../../utils';
import styles from './Info.module.scss';

export function Info() {
  const { user } = useAuth();

  return (
    <div className={styles.info}>
      <Button icon className={styles.user}>
        <Icon name="user outline" />
      </Button>

      <h3 className={styles.username}>{user.username}</h3>
      <h4 className={styles.email}>{user.email}</h4>
      <span className={styles.createdAt}>
        Membro desde: {formatDate(user.createdAt)}
      </span>
    </div>
  );
}
