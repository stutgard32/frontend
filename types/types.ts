export interface ApiResponse<T> {
   data: T;
  meta?: {
    pagination?: {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
}

export interface Catalog {
  id: number;
  documentId: string;
  description: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: Image[];
  products: Product[];
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Product {
  id: number;
  documentId: string;
  title: string;
  specifications: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  prevspecifications: string;
  prevdescription: string;
  img: Image[];
  catalog: Catalog;
  documents: Document | Document[] | null;
}


export interface CogImageFormats {
  large?: ImageFormat;
  medium?: ImageFormat;
  small?: ImageFormat;
  thumbnail?: ImageFormat;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface CogImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: CogImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductNews {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  img: CogImage[];
}

export interface News {
  data: ProductNews[];
}

export interface Document {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
