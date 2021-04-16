export interface SearchImgModel {
  results: Array<ImgItem>;
  total: number;
  total_pages: number;
}

export interface ImgItem {
  alt_description: string;
  links: Link;
  urls: { small: string};
  tags: Array<{title: string}>;
}

export interface Link {
  download: string;
  html: string;
}
