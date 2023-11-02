import { FC } from 'react';
import { Image } from 'semantic-ui-react';
import styles from './HeaderWallpaper.module.scss';

export type HeaderWallpaperProps = {
  image: string;
};

export const HeaderWallpaper: FC<HeaderWallpaperProps> = (props) => {
  const { image } = props;

  return (
    <div className={styles.headerWallpaper}>
      <Image src={image} alt="cover" />
    </div>
  );
};
