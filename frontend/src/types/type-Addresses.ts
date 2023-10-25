export interface TypeAddresses {
  data: TypeAddress[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface TypeAddress {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  title: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
