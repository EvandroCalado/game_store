import { map } from 'lodash';
import { Container } from 'semantic-ui-react';
import { Home } from '../../components/Home';
import { BannerAd, BarTrust, Separator } from '../../components/Shared';
import { BasicLayout } from '../../layouts';

const SectionOne = [
  {
    id: 1,
    name: 'Playstation',
    limit: 3,
  },
  {
    id: 3,
    name: 'Xbox',
    limit: 3,
  },
];

const sectionTwo = [
  {
    id: 2,
    name: 'Nintendo',
    limit: 3,
  },
  {
    id: 4,
    name: 'PC',
    limit: 3,
  },
];

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastPublishedGame />

        <Separator height={100} />

        <Container>
          <Home.LatestGames title="Lançamentos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        {map(SectionOne, (platform) => (
          <div key={platform.id}>
            <Container>
              <Home.LatestGames
                title={platform.name}
                limit={platform.limit}
                platformId={platform.id}
              />
            </Container>

            <Separator height={40} />
          </div>
        ))}

        <Separator height={60} />

        <BannerAd
          title="Registre-se e obtenha os melhores preços"
          subtitle="Compara com outros sites e faça sua escolha !"
          btnTitle="Registar"
          btnLink="/account"
          image="/img01.png"
        />

        <Separator height={100} />

        {map(sectionTwo, (platform) => (
          <div key={platform.id}>
            <Container>
              <Home.LatestGames
                title={platform.name}
                limit={platform.limit}
                platformId={platform.id}
              />
            </Container>

            <Separator height={40} />
          </div>
        ))}

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
