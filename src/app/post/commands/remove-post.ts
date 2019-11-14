import { PostService } from '../state/post.service';
import { Post } from 'src/app/post/state/post.model';
import { ID } from '@datorama/akita';

export class RemovePost implements Command {
    private postService: PostService;
    private postId: ID;

    constructor(postService: PostService, id: ID) {
        this.postService = postService;
        this.postId = id;
    }

    execute(): void {
        this.postService.remove(this.postId);
    }
}
