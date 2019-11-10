import { Injectable } from '@angular/core';
import { QueryEntity, ID } from '@datorama/akita';
import { PostStore, PostState } from './post.store';
import { Post } from './post.model';
import { GraphqlService } from 'src/app/graphql.service';
import { Observable } from 'rxjs';
import { listPosts, getPost } from 'src/graphql/queries';

@Injectable({
  providedIn: 'root'
})
export class PostQuery extends QueryEntity<PostState, Post> {

  constructor(
    protected postStore: PostStore,
    private graphqlService: GraphqlService
  ) {
    super(postStore);
  }

  getPosts(): Observable<Array<Post>> {
    if (!this.hasEntity()) {
      this.graphqlService.query(listPosts).then(res => {
        this.postStore.add(res.data.listPosts.items);
      });
    }
    return this.selectAll();
  }

  getPost(postID: ID): Observable<Post> {
    if (!this.hasEntity(postID)) {
      this.graphqlService.query(getPost, { id: postID }).then(res => {
        this.postStore.add(res.data.getPost);
      });
    }
    return this.selectEntity(postID);
  }

}
