import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Comment } from './comment.model';

export interface CommentState extends EntityState<Comment> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'comment' })
export class CommentStore extends EntityStore<CommentState, Comment> {

  constructor() {
    super();
  }

}

