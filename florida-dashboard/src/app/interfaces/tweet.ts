// For TypeScript, we can define what a Tweet object looks like
export interface Tweet {
  _id: string;
  text: string;
  created_at: string;
  link: string;
  likes: number;
  replies: number;
  retweets: number;
}
