import classNames from 'classnames';
import { map } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Icon, Image, Input } from 'semantic-ui-react';
import { Platform } from '../../../api';
import { TypePlatform, TypePlatforms } from '../../../types';
import styles from './Menu.module.scss';

export type MenuProps = {
  isOpenSearch?: boolean;
};

const platformCtrl = new Platform();

export function Menu({ isOpenSearch }: MenuProps) {
  const [platforms, setPlatforms] = useState<TypePlatforms | null>(null);
  const [showSearch, setShowSearch] = useState(isOpenSearch);

  const openCloseSearch = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    (async () => {
      try {
        const response = await platformCtrl.getAll();
        setPlatforms(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.platforms}>
      {map(platforms?.data, (platform: TypePlatform) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image
            src={platform.attributes.icon.data.attributes.url}
            alt={platform.attributes.title}
          />
          {platform.attributes.title}
        </Link>
      ))}

      <Button primary className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </Button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Buscar jogo"
          className={styles.input}
          focus={true}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}
