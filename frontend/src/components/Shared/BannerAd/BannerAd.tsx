import Link from 'next/link';
import { Button, Container, Image } from 'semantic-ui-react';
import styles from './BannerAd.module.scss';

export type BannerAdProps = {
  title: string;
  subtitle: string;
  btnTitle: string;
  btnLink: string;
  image: string;
};

export function BannerAd(props: BannerAdProps) {
  const { title, subtitle, btnTitle, btnLink, image } = props;

  return (
    <div className={styles.container}>
      <Container className={styles.containerImage}>
        <Image src={image} alt={title} />
      </Container>

      <div className={styles.containerInfo}>
        <Container>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>

          <Button primary as={Link} href={btnLink}>
            {btnTitle}
          </Button>
        </Container>
      </div>
    </div>
  );
}
