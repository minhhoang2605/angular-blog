import { PostService } from '../state/post.service';
import { ID } from '@datorama/akita';
import { Command } from 'src/app/command';

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
