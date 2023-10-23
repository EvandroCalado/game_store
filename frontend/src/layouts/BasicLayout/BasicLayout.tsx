import classNames from 'classnames';
import { Container } from 'semantic-ui-react';
import { Footer, TopBar } from '../../components/Layout';
import styles from './BasicLayout.module.scss';

export type BasicLayoutProps = {
  children: React.ReactNode;
  isOpenSearch?: boolean;
  isContaner?: boolean;
  relative?: boolean;
};

export function BasicLayout({
  children,
  isOpenSearch = false,
  isContaner = false,
  relative = false,
}: BasicLayoutProps) {
  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />

      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContaner ? <Container>{children}</Container> : children}
        </div>
      </Container>

      <Footer />
    </>
  );
}
