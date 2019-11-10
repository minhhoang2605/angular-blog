import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { CommentStore } from './comment.store';
import { Comment } from './comment.model';
import { Observable, of } from 'rxjs';
import { GraphqlService } from '../../graphql.service';
import { createComment, updatePost } from 'src/graphql/mutations';

@Injectable({ providedIn: 'root' })
export class CommentService {

  constructor(
    private commentStore: CommentStore,
    private graphqlService: GraphqlService
  ) { }

  private async addComment(comment: Comment) {
    try {
      this.graphqlService.query(createComment, {
        input: {
          postID: comment.postID,
          content: comment.content
        }
      });
    } catch (error) {
      return Promise.reject(Error('Failed to add comment data'));
    }
  }

  async add(comment: Comment) {
    await this.addComment(comment);
    this.commentStore.add(comment);
  }

  update(id, comment: Partial<Comment>) {
    this.commentStore.update(id, comment);
  }

  async remove(id: ID) {
    this.commentStore.remove(id);
  }
}
