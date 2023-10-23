import Link from 'next/link';
import { RegisterForm } from '../../../components/auth/RegisterForm';
import { JoinLayout } from '../../../layouts';
import styles from './sign-up.module.scss';

export type SignUpProps = {
  title?: string;
};

export default function SignUp() {
  return (
    <JoinLayout>
      <div className={styles.signUp}>
        <h3>Criar Conta</h3>
        <RegisterForm />
        <div className={styles.actions}>
          <Link href="/join/sign-in">Voltar</Link>
        </div>
      </div>
    </JoinLayout>
  );
}
