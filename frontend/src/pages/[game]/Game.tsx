import { FC } from 'react';
import { Game } from '../../components/Game';
import { Separator } from '../../components/Shared';
import { BasicLayout } from '../../layouts';
import { TypeGame } from '../../types';

export type GameProps = {
  game: TypeGame;
};

const GamePage: FC<GameProps> = (props) => {
  const { game } = props;

  return (
    <>
      <BasicLayout>
        <Game.HeaderWallpaper
          image={game.attributes.wallpaper.data.attributes.url}
        />
        <Game.Panel game={game} />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
};

export default GamePage;
