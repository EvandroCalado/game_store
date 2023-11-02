import { FC } from 'react';
import { Container, Icon, Image } from 'semantic-ui-react';
import { TypeGame } from '../../../types';
import { calcDiscount } from '../../../utils';
import styles from './Panel.module.scss';

export type PanelProps = {
  game: TypeGame;
};

export const Panel: FC<PanelProps> = (props) => {
  const { game } = props;

  const { icon, title } = game.attributes.platform.data.attributes;

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image
          src={game.attributes.cover.data.attributes.url}
          alt={game.attributes.title}
        />
      </div>

      <div className={styles.actionContainer}>
        <div>
          <h2>{game.attributes.title}</h2>

          <div className={styles.moreInfo}>
            <span>
              <Image src={icon.data.attributes.url} alt={title} />
              {title}
            </span>
            <span>
              <Icon name="check" /> Disponível a pronta entrega
            </span>
          </div>

          <div className={styles.price}>
            {game.attributes.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />
                  R$ {game.attributes.price}
                </span>

                <span className={styles.discount}>
                  -{game.attributes.discount}%
                </span>
              </>
            )}

            <span className={styles.price}>
              R$ {calcDiscount(game.attributes.price, game.attributes.discount)}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};
