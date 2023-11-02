import { Game } from '../../api';

export { default } from './Game';

type GameProps = {
  params: {
    game: string;
  };
};

export const getServerSideProps = async (ctx: GameProps) => {
  const { game } = ctx.params;

  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(game);

  return {
    props: {
      game: response.data[0],
    },
  };
};
