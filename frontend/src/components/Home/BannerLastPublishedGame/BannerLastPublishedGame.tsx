import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import { Game } from '../../../api';
import { TypeGame } from '../../../types';
import { calcDiscount, formatDate } from '../../../utils';
import { Label } from '../../Shared/Label';
import styles from './BannerLastPublishedGame.module.scss';

const gameCtrl = new Game();

export function BannerLastPublishedGame() {
  const [game, setGame] = useState<TypeGame | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublihedGames();
        setGame(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!game) return null;

  const wallpaper = game.attributes.wallpaper;

  const price = calcDiscount(game.attributes.price, game.attributes.discount);

  return (
    <div className={styles.container}>
      <Image
        src={wallpaper.data.attributes.url}
        alt={wallpaper.data.attributes.name}
        className={styles.wallpaper}
      />

      <Link href={game.attributes.slug} className={styles.infoContainer}>
        <Container>
          <span className={styles.date}>
            {formatDate(game.attributes.releaseDate)}
          </span>

          <h2>{game.attributes.title}</h2>

          <div className={styles.price}>
            <Label.Discount>- {game.attributes.discount}%</Label.Discount>

            <span className={styles.finalPrice}>R$ {price}</span>
          </div>
        </Container>
      </Link>
    </div>
  );
}
