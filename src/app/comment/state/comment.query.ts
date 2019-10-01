import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CommentStore, CommentState } from './comment.store';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentQuery extends QueryEntity<CommentState, Comment> {

  constructor(protected store: CommentStore) {
    super(store);
  }

}
