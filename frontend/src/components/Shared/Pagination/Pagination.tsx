import { useRouter } from 'next/router';
import { FC } from 'react';
import { Pagination as SematicPagination } from 'semantic-ui-react';
import styles from './Pagination.module.scss';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { currentPage, totalPages } = props;

  const router = useRouter();

  const OnPageChange = (_: any, data: any) => {
    const { activePage } = data;

    router.replace({ query: { ...router.query, page: activePage } });
  };

  return (
    <div className={styles.container}>
      <SematicPagination
        defaultActivePage={currentPage}
        totalPages={totalPages}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        onPageChange={OnPageChange}
      />
    </div>
  );
};
