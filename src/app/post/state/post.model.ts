import { ID } from '@datorama/akita';

export class Post {
  id: ID;
  title: string;
  content: string;

  constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
  }
}

/**
 * A factory function that creates Post
 */
export function createPost(params: Partial<Post>) {
  return {

  } as Post;
}
