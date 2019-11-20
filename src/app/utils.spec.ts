import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import Utils from './utils';
import { PostService } from './post/state/post.service';
import { MockPostService } from '../mocks/post.service.mock';
import { Post } from './post/state/post.model';

fdescribe('Utilities Functions', () => {
  let router: Router;
  let postService: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {provide: PostService, useClass: MockPostService}
      ]
    });
    postService = TestBed.get(PostService);
    router = TestBed.get(Router);
  });

  it('should call updatePost', () => {
    spyOn(postService, 'update');
    Utils.updatePost(postService, 123, new Post('hi', 'bye'));
    expect(postService.update).toHaveBeenCalledTimes(1);
  });

  it('should call addPost', () => {
    spyOn(postService, 'add');
    Utils.addPost(postService, new Post('hi', 'bye'));
    expect(postService.add).toHaveBeenCalledTimes(1);
  });

  it('should redirect to \'/dashboard/posts\'', () => {
    const navSpy = spyOn(router, 'navigate');

    Utils.redirectTo(router, '/dashboard/posts');
    expect(navSpy).toHaveBeenCalledWith(['/dashboard/posts']);
  });

  it('should redirect to \'/dashboard/post/123\'', () => {
    const navSpy = spyOn(router, 'navigate');

    Utils.redirectTo(router, '/dashboard/posts', 123);
    expect(navSpy).toHaveBeenCalledWith(['/dashboard/posts/123']);
  });

});
