import { Container } from 'semantic-ui-react';
import {
  GridGames,
  NoResult,
  Pagination,
  Separator,
} from '../../../components/Shared';
import { BasicLayout } from '../../../layouts';
import { TypeGames, TypePagination, TypePlatform } from '../../../types';

export type PlatformProps = {
  platform: TypePlatform;
  games: TypeGames;
  pagination: TypePagination;
};

export default function Platform(props: PlatformProps) {
  const { platform, games, pagination } = props;

  const hasGames = games.data.length > 0;

  const hasMoreThanTreeGames = games.data.length > 3;

  return (
    <>
      <BasicLayout relative>
        <Container>
          <Separator height={15} />

          <h2>{platform.attributes.title}</h2>

          {hasGames ? (
            <>
              <GridGames games={games} />
              <Separator height={hasMoreThanTreeGames ? 30 : 291} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult
              text={`A categoria ${platform.attributes.title} não tem jogos`}
            />
          )}

          <Separator height={9} />
        </Container>
      </BasicLayout>
    </>
  );
}
