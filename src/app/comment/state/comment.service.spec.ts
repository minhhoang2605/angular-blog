import { TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';
import { GraphqlService } from 'src/app/graphql.service';
import { Comment } from './comment.model';
import { createComment, deleteComment } from 'src/graphql/mutations';

fdescribe('CommentService', () => {
  let commentService: CommentService;
  let graphqlService: GraphqlService;
  let querySpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        GraphqlService,
        CommentService 
      ]
    });

    commentService = TestBed.get(CommentService);
    graphqlService = TestBed.get(GraphqlService);
    querySpy = spyOn(graphqlService, 'query');
  });

  afterEach(() => {

  });

  it('should be created', () => {
    const service: CommentService = TestBed.get(CommentService);
    expect(service).toBeTruthy();
  });

  it('add should call query', () => {
    commentService.add(new Comment(123, 'test comment'));
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy.calls.argsFor(0)).toEqual([createComment, {
      input: {
        postID: 123,
        content: 'test comment',
      }
    }]);
  });

  it('remove should call query', () => {
    commentService.remove(123);
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy.calls.argsFor(0)).toEqual([deleteComment, {
      input: {
        id: 123
      }
    }]);
  });
});
