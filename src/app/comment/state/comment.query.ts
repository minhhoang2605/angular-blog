import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CommentStore, CommentState } from './comment.store';
import { Comment } from './comment.model';
import { ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { GraphqlService } from 'src/app/graphql.service';
import { listComments } from 'src/graphql/queries';


@Injectable({
  providedIn: 'root'
})
export class CommentQuery extends QueryEntity<CommentState, Comment> {

  constructor(
    protected commentStore: CommentStore,
    private graphqlService: GraphqlService
  ) {
    super(commentStore);
  }

  getComments(postId: ID): Observable<Array<Comment>> {
    if (!this.hasEntity(entity => entity.postID === postId)) {
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
    return this.selectAll({
      filterBy: entity => entity.postID === postId
    });
  }

}
