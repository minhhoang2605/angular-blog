import { ID } from '@datorama/akita';

export class Comment {
  id: ID;
  postID: ID;
  content: string;
}

/**
 * A factory function that creates Comment
 */
export function createComment(params: Partial<Comment>) {
  return {

  } as Comment;
}
