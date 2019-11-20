import { PostService } from '../state/post.service';
import { Post } from 'src/app/post/state/post.model';
import { Command } from 'src/app/command';

export class AddPost implements Command {
    private postService: PostService;
    private post: Post;

    constructor(postService: PostService, post: Post) {
        this.postService = postService;
        this.post = post;
    }

    execute(): void {
        this.postService.add(this.post);
    }
}
