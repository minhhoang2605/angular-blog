import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CommentStore, CommentState } from './comment.store';
import { Comment } from './comment.model';
import { ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { GraphqlService } from 'src/app/graphql.service';
import { listComments } from 'src/graphql/queries';
import { onCreateComment } from 'src/graphql/subscriptions';


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

  subcribeCreate(): void {
    this.graphqlService.getSubscription(onCreateComment).subscribe(
      response => {
        if (response !== null) {
          this.commentStore.add(response.value.data.onCreateComment);
        }
      }
    );
  }

  getComments(postId: ID): Observable<Array<Comment>> {
    this.subcribeCreate();
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
