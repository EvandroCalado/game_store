export interface TypeGames {
  data: TypeGame[];
  meta: Meta;
}

interface Meta {
  pagination: TypePagination;
}

export interface TypePagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface TypeGame {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  title: string;
  price: number;
  discount: number;
  slug: string;
  summary: string;
  video: string;
  releaseDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  platform: Platform;
  cover: Cover;
  wallpaper: Wallpaper;
  screenshots: Screenshots;
}

interface Screenshots {
  data: Data3[];
}

interface Wallpaper {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats2 {
  medium: Thumbnail;
  thumbnail: Thumbnail;
  small: Thumbnail;
  large: Thumbnail;
}

interface Cover {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  thumbnail: Thumbnail;
  small: Thumbnail;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}

interface Platform {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  slug: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
