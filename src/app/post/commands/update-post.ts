import { PostService } from '../state/post.service';
import { Post } from 'src/app/post/state/post.model';
import { ID } from '@datorama/akita';
import { Command } from 'src/app/command';

export class UpdatePost implements Command {
    private postService: PostService;
    private post: Partial<Post>;
    private postId: ID;

    constructor(postService: PostService, id: ID, post: Partial<Post>) {
        this.postService = postService;
        this.post = post;
        this.postId = id;
    }

    execute(): void {
        this.postService.update(this.postId, this.post);
    }
}
