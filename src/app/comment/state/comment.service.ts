import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { CommentStore } from './comment.store';
import { Comment } from './comment.model';
import { Observable, of } from 'rxjs';
import { GraphqlService } from '../../graphql.service';
import { listComments } from 'src/graphql/queries';
import { createComment, updatePost } from 'src/graphql/mutations';
import { CommentQuery } from './comment.query';

@Injectable({ providedIn: 'root' })
export class CommentService {

  constructor(
    private commentStore: CommentStore,
    private commentQuery: CommentQuery,
    private graphqlService: GraphqlService
  ) { }

  getComments(postId: ID): Observable<Array<Comment>> {
    if (!this.commentQuery.hasEntity(entity => entity.postID === postId)) {
      const queryArgs = {
        filter: {
          postID: {
            eq: postId
          }
        }
      };
      this.graphqlService.query(listComments, queryArgs).then(res => {
        this.commentStore.add(res.data.listComments.items);
      });
    }
    return this.commentQuery.selectAll({
      filterBy: entity => entity.postID === postId
    });
  }

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

  remove(id: ID) {
    this.commentStore.remove(id);
  }
}
