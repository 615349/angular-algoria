export type Hit = {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  objectID: string;
}

export interface ApiResponse {
  hits: Hit[]
}