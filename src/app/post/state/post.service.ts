import { listPosts, getPost } from 'src/graphql/queries';
import { updatePost, createPost } from 'src/graphql/mutations';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { PostStore } from './post.store';
import { Post } from './post.model';
import { GraphqlService } from '../../graphql.service';
import { PostQuery } from './post.query';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(
    private postStore: PostStore,
    private graphqlService: GraphqlService,
    private postQuery: PostQuery
  ) {}

  getPosts(): Observable<Array<Post>> {
    if (!this.postQuery.hasEntity()) {
      this.graphqlService.query(listPosts).then(res => {
        this.postStore.add(res.data.listPosts.items);
      });
    }
    return this.postQuery.selectAll();
  }

  getPost(postID: ID): Observable<Post> {
    if (!this.postQuery.hasEntity(postID)) {
      this.graphqlService.query(getPost, { id: postID }).then(res => {
        this.postStore.add(res.data.getPost);
      });
    }
    return this.postQuery.selectEntity(postID);
  }

  private async addPost(post: Post) {
    try {
      return this.graphqlService.query(createPost, {
        input: {
          title: post.title,
          content: post.content,
        }
      });
    } catch (error) {
      return Promise.reject(Error('Failed to post'));
    }
  }

  async add(post: Post) {
    await this.addPost(post);
    this.postStore.add(post);
  }

  updatePost(id, post: Partial<Post>) {
    this.postStore.update(id, post);
  }

  removePost(id: ID) {
    this.postStore.remove(id);
  }
}
