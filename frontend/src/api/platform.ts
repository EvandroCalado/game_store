import { ENV } from '../utils';

export class Platform {
  async getAll() {
    const sort = 'sort=order:asc';
    const populate = 'populate=icon';
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${sort}&${populate}`;

    const response = await fetch(url);

    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }

  async getBySlug(slug: string) {
    const filters = `filters[slug][$eq]=${slug}`;
    const populate = 'populate=*';
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${filters}&${populate}`;

    const response = await fetch(url);

    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  }
}
