export interface MovieItemInterface {
  imdbID: string;
  Title: string;
  Year: number;
  Poster: string;
  Genre: string;
  Rating: number;
  imdbRating: number;
  Plot: string;
  Popularity: number;
  ReleaseDate: number;
}

export type SortType = "Ascending" | "Descending";
