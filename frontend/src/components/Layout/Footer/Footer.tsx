import Link from 'next/link';
import { Button, Container, Image } from 'semantic-ui-react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="Gaming" />
            </Link>
          </div>

          <div className={styles.list}>
            <ul>
              <li>
                <Link href="/">Termos e condições</Link>
              </li>
              <li>
                <Link href="/">Política de privacidade</Link>
              </li>
              <li>
                <Link href="/">Contato</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <Button
              as="a"
              target="_blank"
              href="/"
              circular
              color="facebook"
              icon="facebook"
            />
            <Button
              as="a"
              target="_blank"
              href="/"
              circular
              color="pink"
              icon="instagram"
            />
            <Button
              as="a"
              target="_blank"
              href="/"
              circular
              color="linkedin"
              icon="linkedin"
            />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </span>
        </div>
      </Container>
    </div>
  );
}
