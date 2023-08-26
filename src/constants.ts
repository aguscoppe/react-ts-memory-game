import * as Images from './images';

export type Image = {
  id: number;
  name: string;
  src: string;
  shown: boolean;
};

export const images: Image[] = [
  {
    id: 1,
    name: 'Elephant',
    src: Images.Elephant,
    shown: false,
  },
  {
    id: 2,
    name: 'Hen',
    src: Images.Hen,
    shown: false,
  },
  {
    id: 3,
    name: 'Giraffe',
    src: Images.Giraffe,
    shown: false,
  },
  {
    id: 4,
    name: 'Frog',
    src: Images.Frog,
    shown: false,
  },
  {
    id: 5,
    name: 'Dolphin',
    src: Images.Dolphin,
    shown: false,
  },
  {
    id: 6,
    name: 'Parrot',
    src: Images.Parrot,
    shown: false,
  },
  {
    id: 7,
    name: 'Kiwi',
    src: Images.Kiwi,
    shown: false,
  },
  {
    id: 8,
    name: 'Snake',
    src: Images.Snake,
    shown: false,
  },
];
