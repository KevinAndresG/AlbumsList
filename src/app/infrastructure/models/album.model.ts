export interface AlbumRequest {
  name: string;
  cover: string;
  releaseDate: Date;
  description: string;
  genre: string;
  recordLabel: string;
}

export interface AlbumResponse {
  id: number;
  name: string;
  cover: string;
  releaseDate: Date | string;
  description: string;
  genre: string;
  recordLabel: string;
  tracks: Track[];
  performers: Performer[];
  comments: Comment[];
}

export interface Comment {
  id: number;
  description: string;
  rating: number;
}

export interface Performer {
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: Date;
}

export interface Track {
  id: number;
  name: string;
  duration: string;
}
