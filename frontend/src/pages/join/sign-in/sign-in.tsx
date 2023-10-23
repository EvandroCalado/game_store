import Link from 'next/link';
import { LoginForm } from '../../../components/auth';
import { JoinLayout } from '../../../layouts';
import styles from './sign-in.module.scss';

export default function SignIn() {
  return (
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Iniciar Sessão</h3>

        <LoginForm />

        <div className={styles.actions}>
          <Link href="/join/sign-up">Não tem conta ?</Link>
        </div>
      </div>
    </JoinLayout>
  );
}
