import { map } from 'lodash';
import Link from 'next/link';
import { Image } from 'semantic-ui-react';
import { Label } from '..';
import { TypeGames } from '../../../types';
import { calcDiscount } from '../../../utils';
import styles from './GridGames.module.scss';

export type GridGamesProps = {
  games: TypeGames;
};

export function GridGames({ games }: GridGamesProps) {
  return (
    <div className={styles.gridGames}>
      {map(games.data, (game) => (
        <Link
          href={`/${game.attributes.slug}`}
          key={game.id}
          className={styles.game}
        >
          <div className={styles.content}>
            <Image
              src={game.attributes.cover.data.attributes.formats.small.url}
              alt={game.attributes.title}
            />

            {game.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                -{game.attributes.discount}%
              </Label.Discount>
            )}
          </div>

          <div>
            <span>{game.attributes.title}</span>
            <span className={styles.price}>
              R$ {calcDiscount(game.attributes.price, game.attributes.discount)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
