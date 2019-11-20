import { ID } from '@datorama/akita';

export class Comment {
  id: ID;
  postID: ID;
  content: string;

  constructor(postId: ID, content?: string) {
    this.postID = postId;
    this.content = content || "";
}
}

/**
 * A factory function that creates Comment
 */
export function createComment(params: Partial<Comment>) {
  return {

  } as Comment;
}
