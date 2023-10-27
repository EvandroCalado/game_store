import { useEffect, useState } from 'react';
import { Game } from '../../../api';
import { TypeGames } from '../../../types';
import { GridGames } from '../../Shared';

export type LatestGamesProps = {
  title: string;
  limit?: number;
  platformId?: number;
};

const gameCtrl = new Game();

export function LatestGames({ title, limit, platformId }: LatestGamesProps) {
  const [games, setGames] = useState<TypeGames | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLatestPublihedGames({
          limit,
          platformId,
        });
        setGames(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [limit, platformId]);

  if (!games) return null;

  return (
    <div>
      <h1>{title}</h1>

      <GridGames games={games} />
    </div>
  );
}
