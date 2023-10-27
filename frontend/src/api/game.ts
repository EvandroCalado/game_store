import { ENV } from '../utils';

export class Game {
  async getLastPublihedGames() {
    const sort = 'sort=publishedAt:desc';
    const pagination = 'pagination[limit]=1';
    const populate = 'populate=*';
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAMES}?${sort}&${pagination}&${populate}`;

    const response = await fetch(url);

    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

  async getLatestPublihedGames({
    limit = 9,
    platformId = null,
  }: {
    limit?: number;
    platformId?: number | null;
  }) {
    const filterPLatform =
      platformId && `filters[platform][id][$eq]=${platformId}`;
    const pagination = `pagination[limit]=${limit}`;
    const sort = 'sort[0]=publishedAt:desc';
    const populate = 'populate=*';

    const urlParams = `${filterPLatform}&${pagination}&${sort}&${populate}`;

    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAMES}?${urlParams}`;

    const response = await fetch(url);

    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

  async getGamesByPlatfomSlug(slug: string, page: string) {
    const filters = `filters[platform][slug][$eq]=${slug}`;
    const pagination = `pagination[page]=${page}&pagination[pageSize]=6`;
    const populate = 'populate=*';

    const urlparams = `${filters}&${pagination}&${populate}`;

    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAMES}?${urlparams}`;

    const response = await fetch(url);

    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }
}
