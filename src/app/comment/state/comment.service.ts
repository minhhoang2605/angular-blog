import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { CommentStore } from './comment.store';
import { Comment } from './comment.model';
import { Observable, of } from 'rxjs';
import { GraphqlService } from '../../graphql.service';
import { createComment, updatePost, deleteComment } from 'src/graphql/mutations';
import { CommentQuery } from './comment.query';

@Injectable({ providedIn: 'root' })
export class CommentService {

  constructor(
    private commentStore: CommentStore,
    private graphqlService: GraphqlService,
    private commentQuery: CommentQuery
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

  private async removeComment(id: ID) {
    try {
      this.graphqlService.query(deleteComment, {
        input: {
          id: id
        }
      });
    } catch (error) {
      return Promise.reject(Error('Failed to remove comment data'));
    }
  }

  async add(comment: Comment) {
    await this.addComment(comment);
  }

  // async update(id, comment: Partial<Comment>) {
  //   this.commentStore.update(id, comment);
  // }

  async remove(id: ID) {
    await this.removeComment(id);
    this.commentStore.remove(id);
  }

  async removeComments(postId: ID) {
    let comments: Comment[];
    this.commentQuery.getComments(postId).subscribe(res => comments = res);
    comments.forEach(comment => {
      console.log("removed comment:" + comment.id);
      this.remove(comment.id);
    });
  }
}
