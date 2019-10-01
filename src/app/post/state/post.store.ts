import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Post } from './post.model';

export interface PostState extends EntityState<Post> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'post' })
export class PostStore extends EntityStore<PostState, Post> {

  constructor() {
    super();
  }

}
