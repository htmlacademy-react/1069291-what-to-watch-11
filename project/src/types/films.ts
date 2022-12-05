export type ReviewType = {
  id: number;
  author: string;
  grade: number;
  text: string;
  date: string;
}

export type FilmType = {
  id: number;
  name: string;
  genre: number;
  year: string;
  preview: string;
  movie: string;
  time: string;
  rating: number;
  director: string;
  starring: string[];
  description: string[];
  reviews: ReviewType[];
}
