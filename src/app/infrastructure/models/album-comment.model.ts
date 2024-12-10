export interface AlbumCommentRequest {
  description: string;
  rating: number;
  collector: Collector;
}

export interface Collector {
  id: number;
}
