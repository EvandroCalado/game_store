import { Container, Icon } from 'semantic-ui-react';
import styles from './BarTrust.module.scss';

export function BarTrust() {
  return (
    <div className={styles.barTrust}>
      <Container className={styles.content}>
        <div className={styles.block}>
          <Icon name="truck" />
          <div>
            <h5>Super rápido</h5>
            <span>Entregamos em todo o Brasil</span>
          </div>
        </div>

        <div className={styles.block}>
          <Icon name="shield" />
          <div>
            <h5>Confiável e seguro</h5>
            <span>Mais de 10.000 jogos</span>
          </div>
        </div>

        <div className={styles.block}>
          <Icon name="wechat" />
          <div>
            <h5>Atendimento ao cliente</h5>
            <span>Agentes disponíveis 24h</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
