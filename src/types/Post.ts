interface RichText {
  type: 'link' | 'paragraph';
  value: string;
}

export interface IAuthor {
  name: string;
  avatarUrl: string;
  role: string
}

export interface IComment {
  id: number;
  author: IAuthor;
  likes: number;
  publishedAt: Date;
  content: RichText[]
}

export interface IPost {
  id: number;
  author: IAuthor;
  publishedAt: Date;
  content: RichText[]
  comments: IComment[]
}