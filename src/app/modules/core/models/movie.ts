import { Director } from '@modules/core/models/director';
import { Trailer } from '@modules/core/models/trailer';

export interface Movie {
  countries: string[];
  directors: Director[];
  genres: string[];
  idIMDB: string;
  languages: string[];
  metascore: string;
  plot: string;
  ranking: number;
  rated: string;
  trailers: Trailer[];
  rating: string;
  releaseDate: string;
  runtime: string;
  simplePlot: string;
  title: string;
  type: string;
  urlIMDB: string;
  urlPoster: string;
  votes: string;
  writers: Array<any>;
  year: string;
  selected?: boolean;
}
