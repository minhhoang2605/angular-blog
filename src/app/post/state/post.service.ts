import { updatePost, createPost, deletePost } from 'src/graphql/mutations';
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

  private async removePost(id: ID) {
    try {
      return this.graphqlService.query(deletePost, {
        input: {
          id: id
        }
      });
    } catch (error) {
      return Promise.reject(Error('Failed to remove post'));
    }
  }

  async add(post: Post) {
    await this.addPost(post);
    this.postStore.add(post);
  }

  update(id, post: Partial<Post>) {
    //TODO
    this.postStore.update(id, post);
  }

  async remove(id: ID) {
    await this.removePost(id);
    this.postStore.remove(id);
  }
}
