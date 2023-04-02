import img01 from './_data/01.jpg';
import img02 from './_data/02.jpg';
import img03 from './_data/03.jpg';
import img04 from './_data/04.jpg';
import img05 from './_data/05.jpg';
import img06 from './_data/06.jpg';
import img07 from './_data/07.jpg';
import img08 from './_data/08.jpg';
import type { ImgTile } from './types';
import { shuffleArray } from './utils/shuffleArray';

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
