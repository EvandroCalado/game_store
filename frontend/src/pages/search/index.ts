import { Game } from '../../api';

export { default } from './Search';

type CtxProps = {
  query: {
    q: string;
    page: string;
  };
};

export const getServerSideProps = async (ctx: CtxProps) => {
  const { q, page = '1' } = ctx.query;

  const gameCtrl = new Game();
  const response = await gameCtrl.searchGames(q, page);

  return {
    props: {
      games: response,
      pagination: response.meta.pagination,
      searchText: q,
    },
  };
};
