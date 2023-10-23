import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Button, Icon, Label } from 'semantic-ui-react';
import { useAuth } from '../../../hooks';
import styles from './Account.module.scss';

// TODO: Add total
const total = 5;

export function Account() {
  const { user } = useAuth();
  const router = useRouter();

  const goTologin = () => router.push('/join/sign-in');
  const goToAccount = () => router.push('/account');

  const goToCart = () => {
    if (!user) goTologin();
    else router.push('/cart');
  };

  const isUser = user ? goToAccount : goTologin;

  return (
    <div className={styles.account}>
      <Button icon className={styles.cart}>
        <Icon name="cart" onClick={goToCart} />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>

      <Button icon className={classNames({ [styles.user]: user })}>
        <Icon name="user outline" onClick={isUser} />
      </Button>
    </div>
  );
}
