// import { GraphqlService } from './graphql.service';
// import { Injectable } from '@angular/core';
// import { Post } from './post.model';
// import { Comment } from './comment.model';
// import { listPosts, getPost, listComments } from 'src/graphql/queries';
// import { createComment, updatePost, createPost } from 'src/graphql/mutations';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostsService {

//   constructor(
//     private graphqlService: GraphqlService,
//   ) { }

//   async getPosts(): Promise<any> {
//     let response: any;
//     try {
//       response = await this.graphqlService.query(listPosts);
//       return response;
//     } catch (error) {
//       return Promise.reject(Error('Failed to retrive posts data'));
//     }
//   }

//   async getPost(postID: string): Promise<any> {
//     let response: any;
//     try {
//       response = await this.graphqlService.query(getPost, { id: postID });
//       return response;
//     } catch (error) {
//       return Promise.reject(Error('Failed to retrive posts data'));
//     }
//   }

//   async getComments(postId: string): Promise<any> {
//     let response: any;
//     const queryArgs = {
//       filter: {
//         postID: {
//           eq: postId
//         }
//       }
//     };

//     try {
//       response = await this.graphqlService.query(listComments, queryArgs);
//       return response;
//     } catch (error) {
//       return Promise.reject(Error('Failed to retrive post comments data'));
//     }
//   }

//   async addPost(post: Post) {
//     try {
//       return this.graphqlService.query(createPost, {
//         input: {
//           title: post.title,
//           content: post.content,
//           comments: 0,
//           likes: 0
//         }
//       });
//     } catch (error) {
//       return Promise.reject(Error('Failed to post'));
//     }
//   }

//   likePost(postId: string, like: number): void {
//     this.graphqlService.query(updatePost, {
//       input: {
//         id: postId,
//         likes: like
//       }
//     });
//   }

//   async addComment(comment: Comment, count: number) {
//     try {
//       this.graphqlService.query(createComment, {
//         input: {
//           postID: comment.postID,
//           content: comment.content
//         }
//       });
//       this.graphqlService.query(updatePost, {
//         input: {
//           id: comment.postID,
//           comments: count
//         }
//       });
//     } catch (error) {
//       return Promise.reject(Error('Failed to add comment data'));
//     }
//   }
// }
