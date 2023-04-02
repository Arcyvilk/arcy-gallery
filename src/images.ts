import type { ImgTile } from './types';
import { shuffleArray } from './utils/shuffleArray';

const img01 = 'https://cataas.com/cat/cute';
const img02 = 'https://cataas.com/cat/funny';
const img03 = 'https://cataas.com/cat/tabby';
const img04 = 'https://cataas.com/cat/bubble';
const img05 = 'https://cataas.com/cat/sleep';
const img06 = 'https://cataas.com/cat/smile';
const img07 = 'https://cataas.com/cat/play';
const img08 = 'https://cataas.com/cat/shoe';

export const images: ImgTile[] = shuffleArray([
  { url: img03, thumbnail: img03, title: 'Title', description: 'Description' },
  { url: img02, thumbnail: img02, title: 'Title', description: 'Description' },
  { url: img05, thumbnail: img05, title: 'Title', description: 'Description' },
  { url: img04, thumbnail: img04, title: 'Title', description: 'Description' },
  { url: img01, thumbnail: img01, title: 'Title', description: 'Description' },
  { url: img06, thumbnail: img06, title: 'Title', description: 'Description' },
  { url: img08, thumbnail: img08, title: 'Title', description: 'Description' },
  { url: img07, thumbnail: img07, title: 'Title', description: 'Description' },
  { url: img04, thumbnail: img04, title: 'Title', description: 'Description' },
  { url: img03, thumbnail: img03, title: 'Title', description: 'Description' },
  { url: img01, thumbnail: img01, title: 'Title', description: 'Description' },
  { url: img08, thumbnail: img08, title: 'Title', description: 'Description' },
  { url: img05, thumbnail: img05, title: 'Title', description: 'Description' },
  { url: img02, thumbnail: img02, title: 'Title', description: 'Description' },
  { url: img06, thumbnail: img06, title: 'Title', description: 'Description' },
]);
