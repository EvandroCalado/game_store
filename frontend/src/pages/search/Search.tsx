import { FC, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import {
  GridGames,
  NoResult,
  Pagination,
  Separator,
} from '../../components/Shared';
import { BasicLayout } from '../../layouts';
import { TypeGames, TypePagination } from '../../types';

export type SearchProps = {
  games: TypeGames;
  pagination: TypePagination;
  searchText: string;
};

const Search: FC<SearchProps> = (props) => {
  const { games, pagination, searchText } = props;

  const hasGames = games.data.length > 0;

  const hasMoreThanThreeGames = games.data.length > 3;

  useEffect(() => {
    document.querySelector<HTMLInputElement>('#search-games')?.focus();
  }, []);

  return (
    <BasicLayout relative isOpenSearch>
      <Container>
        <Separator height={12} />

        <h2>Buscando: {searchText}</h2>

        {hasGames ? (
          <>
            <GridGames games={games} />
            <Separator height={hasMoreThanThreeGames ? 30 : 291} />
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.pageCount}
            />
          </>
        ) : (
          <NoResult
            text={`Nenhum jogo encontrado para a busca: ${searchText}`}
          />
        )}

        <Separator height={12} />
      </Container>
    </BasicLayout>
  );
};

export default Search;
