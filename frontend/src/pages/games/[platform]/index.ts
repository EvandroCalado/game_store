import { Game, Platform } from '../../../api';

export { default } from './platform';

type PlatformProps = {
  params: {
    platform: string;
  };
  query: {
    page: string;
  };
};

export async function getServerSideProps(ctx: PlatformProps) {
  const { query, params } = ctx;
  const { page = '1' } = query;
  const { platform } = params;

  const platformCtrl = new Platform();
  const responsePlatform = await platformCtrl.getBySlug(platform);

  const gamesCtrl = new Game();
  const responseGames = await gamesCtrl.getGamesByPlatfomSlug(platform, page);

  return {
    props: {
      platform: responsePlatform.data[0],
      games: responseGames,
      pagination: responseGames.meta.pagination,
    },
  };
}
