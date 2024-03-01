export interface Show {
  id: number;
  name: string;
  genres: string[];
  runtime: number;
  rating: Rating;
  image: Image;
  premiered: string;
}

export interface ShowList {
  score: number;
  show: Show;
}

type Rating = {
  average: number;
};

type Image = {
  original: string;
  medium: string;
};