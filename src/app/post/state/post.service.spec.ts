import { TestBed, fakeAsync } from '@angular/core/testing';

import { PostService } from './post.service';

import { GraphqlService } from 'src/app/graphql.service';
import { Post } from './post.model';
import { createPost, updatePost, deletePost } from 'src/graphql/mutations';

fdescribe('PostService', () => {
  let postService: PostService;
  let graphqlService: GraphqlService;
  let querySpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        GraphqlService, 
        PostService 
      ]
    });

    postService = TestBed.get(PostService);
    graphqlService = TestBed.get(GraphqlService);
    querySpy = spyOn(graphqlService, 'query');
  });

  afterEach(() => {

  });

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });

  it('add should call query', () => {
    postService.add(new Post('new', 'post'));
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy.calls.argsFor(0)).toEqual([createPost, {
      input: {
        title: 'new',
        content: 'post',
      }
    }]);
  });

  it('update should call query', () => {
    postService.update(123, new Post('new', 'post'));
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy.calls.argsFor(0)).toEqual([updatePost, {
      input: {
        id: 123,
        title: 'new',
        content: 'post',
      }
    }]);
  });

  it('remove should call query', () => {
    postService.remove(123);
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy.calls.argsFor(0)).toEqual([deletePost, {
      input: {
        id: 123
      }
    }]);
  });
});
